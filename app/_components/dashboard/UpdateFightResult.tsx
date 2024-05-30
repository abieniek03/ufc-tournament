"use client";

import { Modal } from "../Modal";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Result,
  ResultSchema,
} from "@/app/_utils/validation/update-result.schema";
import { FormInput } from "../form/FormInput";
import { FormSelect } from "../form/FormSelect";
import { Button } from "../Button";
import { IOption } from "@/app/_types/types";
import { useMutation } from "@tanstack/react-query";
import axios from "@/app/_utils/axios/axiosInstance";
import { getAuthToken } from "@/app/_utils/helpers/getAuthToken";

interface Props {
  fightId: string;
  fighters: IOption[];
}

export function UpdateFightResult({ fightId, fighters }: Readonly<Props>) {
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
    console.log(data);
    updateFightResult.mutate(data);
  };

  return (
    <Modal title="Update fight result">
      <>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormSelect
              id="winner"
              label="Winner"
              options={fighters}
              form={form.register("winner")}
            />
            <FormInput type="number" id="round" label="Round" />
            <FormSelect
              id="method"
              label="Method"
              options={methods}
              form={form.register("method")}
            />
            <FormInput id="time" label="Time" />
            <FormInput
              id="description"
              label="Description"
              placeholder="Points, finish details"
            />
            <div className="mt-8">
              <Button
                styleType="primary"
                wFull={true}
                loading={updateFightResult.isPending}
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
