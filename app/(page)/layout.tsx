import { redirect } from "next/navigation";
import { Children as Props } from "../_types/types";
import { auth } from "@clerk/nextjs/server";

export default function PageLayout({ children }: Readonly<Props>) {
  const { userId } = auth();

  if (userId) redirect("/tournaments");

  return (
    <>
      <main>{children}</main>
    </>
  );
}
