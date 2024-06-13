"use client";

import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useWatch,
} from "react-hook-form";
import {
  Tournament,
  TournamentSchema,
} from "@/app/_utils/validation/tournament.schema";

import { Button } from "@/app/_components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "@/app/_utils/axios/axiosInstance";
import { useEffect, useState } from "react";
import { FormSelect } from "@/app/_components/form/FormSelect";
import { IOption, IWeightclass } from "@/app/_types/types";
import { ChooseFighters } from "@/app/_components/dashboard/ChooseFighters";

export default function CreateTournamentPage() {
  const form = useForm<Tournament>({
    resolver: zodResolver(TournamentSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const fightersCount = useWatch({
    control: form.control,
    name: "fightersCount",
  });
  const weightclassId = useWatch({
    control: form.control,
    name: "weightclassId",
  });

  const [weightclasses, setWeightclasses] = useState<IOption[]>([]);

  const getWeightclasses = async () => {
    try {
      const response = await axios.get("/weightclass");
      const data = response.data.data;

      setWeightclasses(
        data.map((el: IWeightclass) => ({ id: el.id, label: el.name })),
      );
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWeightclasses();
  }, []);

  return (
    <>
      <DashboardPageTitle>Create tournament</DashboardPageTitle>
      <div className="mt-4">
        <FormProvider {...form}>
          <form>
            <div className="mb-4 border-b-2 border-primary-500 pb-4">
              <FormSelect
                id="fightersCount"
                label="Fighters count"
                options={[
                  {
                    id: "8",
                    label: "8",
                  },
                  {
                    id: "16",
                    label: "16",
                  },
                ]}
                form={form.register("fightersCount")}
              />
              <FormSelect
                id="weightclassId"
                label="Weightclass"
                options={weightclasses}
                form={form.register("weightclassId")}
              />
            </div>
            {fightersCount && weightclassId && (
              <ChooseFighters
                key={`${fightersCount}-${weightclassId}`}
                fightersCount={parseInt(fightersCount)}
                weightclassId={weightclassId}
              />
            )}
          </form>
        </FormProvider>
      </div>
    </>
  );
}
