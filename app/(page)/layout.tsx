import { Navbar } from "../_components/Navbar";
import { IChildren as Props } from "../_types/types";

export default function PageLayout({ children }: Readonly<Props>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
