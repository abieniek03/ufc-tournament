"use client";

import { type ComponentProps } from "react";
import clsx from "clsx";
import { useFormContext, useController } from "react-hook-form";

import { stylesFormLabel, stylesFormField } from "@/app/_styles/styles";

interface Props {
  id: string;
  label: string;
}

export function FormInput({
  label,
  id,
  ...rest
}: Readonly<ComponentProps<"input"> & Props>) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { field } = useController({
    control,
    name: id,
  });

  return (
    <div className="text-secondary mb-3 text-sm">
      <label htmlFor={id} className={stylesFormLabel}>
        {label}
      </label>
      <input
        type={rest.type || "text"}
        className={clsx(
          stylesFormField,
          errors[id] && "border-error focus:outline-error",
          rest.disabled && "opacity-35",
        )}
        value={field.value || rest.defaultValue}
        onChange={field.onChange}
        {...rest}
      />
      {errors[id] && (
        <p className="mt-1 text-xs text-error">
          {errors[id]?.message?.toString()}
        </p>
      )}
    </div>
  );
}
