import { type ComponentProps } from "react";
import Link from "next/link";
import { IChildren } from "../_types/types";
import clsx from "clsx";

type ButtonStyleType = "primary" | "secondary";

interface Props extends IChildren {
  styleType: ButtonStyleType;
  loading?: boolean;
  path?: string;
}

export function Button({
  styleType,
  children,
  path,
  ...rest
}: Readonly<ComponentProps<"button"> & Props>) {
  const buttonStyles = clsx(
    "rounded-md px-6 py-2 transition-all duration-200 outline-primary bg-primary text-sm hover:opacity-95 border",
    styleType === "primary" &&
      "bg-primary text-primary-content border-transparent",
    styleType === "secondary" && "bg-primary/5 hover:bg-primary/10",
  );

  if (path) {
    return (
      <Link href={path} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} {...rest}>
      {children}
    </button>
  );
}
