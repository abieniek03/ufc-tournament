import { IChildren as Props } from "@/app/_types/types";

export function SectionTitle({ children }: Readonly<Props>) {
  return (
    <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
      {children}
    </h2>
  );
}
