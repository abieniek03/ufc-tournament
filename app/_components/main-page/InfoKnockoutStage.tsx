import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import knockoutStageImage from "@/app/_assets/knockout-stage.png";

export function InfoKnockoutStage() {
  return (
    <section className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
      <div className="w-full">
        <SectionTitle>Knockout stage</SectionTitle>
        <div className="leading-loose opacity-75">
          <p className="mb-4">
            The knockout stage is a time when emotions run high. Fighters know
            that any mistake can cost them the victory, making the matches
            incredibly intense and spectacular. They must demonstrate maximum
            concentration and skills to survive and advance to the next rounds.
            For fans, it is a time of great emotions, unexpected twists, and
            memorable moments.
          </p>
          <p>
            The stage lasts from the quarterfinals or semifinals. Depending on
            how many players are participating in the entire tournament.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <Image
          src={knockoutStageImage}
          alt="Knockout stage image"
          width={400}
          height={400}
          className="w-full lg:max-w-[560px]"
        />
      </div>
    </section>
  );
}
