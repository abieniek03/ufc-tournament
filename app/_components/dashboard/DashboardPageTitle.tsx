import { Children } from "@/app/_types/types";

export function DashboardPageTitle({ children }: Readonly<Children>) {
  return <h1 className="text-2xl font-bold lg:text-3xl">{children}</h1>;
}
