import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import selectFightersImage from "@/app/_assets/select-fighters.png";

export function InfoSelectFighters() {
  return (
    <section className="mb-36 flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
      <div className="w-full">
        <SectionTitle>Select Fighters</SectionTitle>
        <p className="leading-loose opacity-75">
          Choose 8 or 16 fighters from a given weightclass. You can select any
          UFC fighter who is in the game and is currently in the organization,
          as well as those who are no longer with the UFC but have had at least
          one fight since 2021. The tournament consists of two stages SCORE and
          KNOCKOUT. Each fight in the tournament is contested over 3 rounds,
          except for the final fight, which is contested over 5 rounds.
        </p>
      </div>
      <div className="flex w-full justify-end">
        <Image
          src={selectFightersImage}
          alt="Select fighters image"
          width={400}
          height={400}
          className="w-full lg:max-w-[560px]"
        />
      </div>
    </section>
  );
}
