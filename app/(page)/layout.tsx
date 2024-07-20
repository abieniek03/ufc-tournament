import { redirect } from "next/navigation";
import { IChildren as Props } from "../_types/types";
import { auth } from "@clerk/nextjs/server";

export default function PageLayout({ children }: Readonly<Props>) {
  const { userId } = auth();

  if (userId) redirect("/tournaments");

  return <>{children}</>;
}
