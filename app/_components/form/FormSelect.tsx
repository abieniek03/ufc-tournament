"use client";
import { stylesFormField } from "@/app/_styles/styles";
import { IOption } from "@/app/_types/types";

interface Props {
  id: string;
  label: string;
  options: IOption[];
  form: any;
}

export function FormSelect({ id, label, options, form }: Readonly<Props>) {
  return (
    <div className="mb-6 text-sm">
      <label htmlFor={id} className="mb-2 block">
        {label}
      </label>
      <select id={id} className={stylesFormField} {...form}>
        <option value="" disabled selected>
          Select weightclass
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
