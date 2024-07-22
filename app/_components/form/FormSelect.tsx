"use client";

import { type ComponentProps } from "react";
import { useFormContext, useController } from "react-hook-form";
import clsx from "clsx";

import { stylesFormLabel, stylesFormField } from "@/app/_styles/styles";
import { IOption } from "@/app/_types/types";

interface Props {
  id: string;
  label: string;
  options: IOption[];
  form: any;
}

export function FormSelect({
  id,
  label,
  options,
  form,
  ...rest
}: Readonly<ComponentProps<"select"> & Props>) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { field } = useController({
    control,
    name: id,
  });

  return (
    <div className="mb-3 text-sm">
      <label htmlFor={id} className={stylesFormLabel}>
        {label}
      </label>
      <select
        id={id}
        className={clsx(
          stylesFormField,
          errors[id] && "border-error focus:outline-error",
        )}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        {...form}
        {...rest}
      >
        <option value="" disabled selected>
          Select {label.toLocaleLowerCase()}
        </option>
        {Array.isArray(options) &&
          options.map((option: IOption) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
}
