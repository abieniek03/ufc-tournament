import { BracketElement } from "./BracketElement";

interface Props {
  data: any;
}

export function Bracket({ data }: Readonly<Props>) {
  console.log(data);
  return (
    <div>
      <p>bracket</p>
      {data.map((el: any, index: number) => (
        <BracketElement key={index} fightId={el.fightId} />
      ))}
    </div>
  );
}
