"use client";

import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  Tournament,
  TournamentSchema,
} from "@/app/_utils/validation/tournament.schema";
import { FormInput } from "@/app/_components/form/FormInput";
import { Button } from "@/app/_components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "@/app/_utils/axios/axiosInstance";
import { useEffect, useState } from "react";
import { FormSelect } from "@/app/_components/form/FormSelect";
import { IOption, IWeightclass, Step } from "@/app/_types/types";
import { ChooseFighters } from "@/app/_components/dashboard/ChooseFighters";
import { useCreateTournamentStore } from "@/app/_store/store";

export default function CreateTournamentPage() {
  const [step, setStep] = useState<Step>("Data");
  const form = useForm<Tournament>({
    resolver: zodResolver(TournamentSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  const createTournamentStore = useCreateTournamentStore();

  const onSubmit: SubmitHandler<Tournament> = (data: Tournament) => {
    createTournamentStore.updateData(data.name, data.weightclassId);
    setStep("Choose Fighters");
  };

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
      {step === "Data" ? (
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormInput id="name" label="Name" />
            <FormSelect
              id="weightclass"
              label="Weightclass"
              options={weightclasses}
              form={form.register("weightclassId")}
            />
            <Button styleType="primary">Select fighters</Button>
          </form>
        </FormProvider>
      ) : (
        <ChooseFighters />
      )}
    </>
  );
}
