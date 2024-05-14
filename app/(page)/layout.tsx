import { IChildren as Props } from "../_types/types";

export default function PageLayout({ children }: Readonly<Props>) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
