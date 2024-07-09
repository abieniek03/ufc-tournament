import { IBracket } from "@/app/_types/types";

interface Props {
  data: IBracket[];
}

export function Bracket({ data }: Readonly<Props>) {
  return (
    <div>
      <p>Bracket</p>
    </div>
  );
}
