"use client";

import { useEffect } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useWatch,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Result,
  ResultSchema,
} from "@/app/_utils/validation/update-result.schema";
import { useMutation } from "@tanstack/react-query";

import { Modal } from "../Modal";
import { FormInput } from "../form/FormInput";
import { FormSelect } from "../form/FormSelect";
import { Button } from "../Button";

import { IOption, Level } from "@/app/_types/types";
import { getAuthToken } from "@/app/_utils/helpers/getAuthToken";
import axios from "@/app/_utils/axios/axiosInstance";

interface Props {
  fightId: string;
  fightLevel: Level;
  fighters: IOption[];
}

export function UpdateFightResult({
  fightId,
  fightLevel,
  fighters,
}: Readonly<Props>) {
  const token = getAuthToken();

  const methods = [
    {
      id: "KO",
      label: "KO",
    },
    {
      id: "TKO",
      label: "TKO",
    },
    {
      id: "SUB",
      label: "Submission",
    },
    {
      id: "UD",
      label: "Unanimous decision",
    },
    {
      id: "SD",
      label: "Split decision",
    },
    {
      id: "MD",
      label: "Majority decision",
    },
  ];

  const form = useForm<Result>({
    resolver: zodResolver(ResultSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const methodValue = useWatch({
    control: form.control,
    name: "method",
  });

  const updateFightResult = useMutation({
    mutationKey: ["updateFightResult", fightId],
    mutationFn: async (resultData: Result) => {
      try {
        const response = await axios.patch(`/fights/${fightId}`, resultData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        window.location.reload();
        return response.data;
      } catch (error: any) {
        console.error(error);
      }
    },
  });

  const onSubmit: SubmitHandler<Result> = (data: Result) => {
    updateFightResult.mutate(data);
  };

  const getMaxRound = (fightLevel: Level) => {
    return fightLevel === "FINAL" ? 5 : 3;
  };

  useEffect(() => {
    if (methodValue && methodValue[1] === "D") {
      form.setValue("time", "5:00");
      form.setValue("round", getMaxRound(fightLevel));
    } else {
      form.setValue("time", "");
    }
  }, [methodValue]);

  return (
    <Modal
      triggerButtonStyle="primary"
      trigger="Update result"
      title="Update fight result"
    >
      <>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormSelect
              id="winner"
              label="Winner"
              options={fighters}
              form={form.register("winner")}
            />
            <FormSelect
              id="method"
              label="Method"
              options={methods}
              form={form.register("method")}
            />
            <FormInput
              type="number"
              id="round"
              label="Round"
              min={1}
              max={getMaxRound(fightLevel)}
              value={
                (methodValue &&
                  methodValue[1] === "D" &&
                  getMaxRound(fightLevel)) ||
                undefined
              }
              disabled={(methodValue && methodValue[1] === "D") || false}
            />
            <FormInput
              id="time"
              label="Time"
              defaultValue={form.getValues("time")}
              disabled={(methodValue && methodValue[1] === "D") || false}
            />
            <FormInput
              id="description"
              label="Description"
              placeholder="Finish details / score cards (e.g. 2x29-28, 28-29)"
            />
            <div className="mt-8">
              <Button
                styleType="primary"
                wFull={true}
                loading={
                  updateFightResult.isPending || updateFightResult.isSuccess
                }
              >
                Save result
              </Button>
            </div>
          </form>
        </FormProvider>
      </>
    </Modal>
  );
}
