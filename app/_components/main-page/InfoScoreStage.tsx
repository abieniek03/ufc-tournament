import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import scoreStageFirstImage from "@/app/_assets/round-1.jpg";
import scoreStageSecondImage from "@/app/_assets/round-2.jpg";

export function InfoScoreStage() {
  return (
    <section>
      <div className="mb-16 flex flex-col items-center gap-4 lg:mb-24 lg:flex-row-reverse lg:gap-12 xl:gap-16">
        <div className="w-full">
          <SectionTitle>Score stage</SectionTitle>
          <h3 className="mb-2 text-xl font-bold uppercase text-primary-300/75 md:text-2xl">
            Round 1
          </h3>
          <p className="leading-loose opacity-75">
            The fighters you choose will be arranged according to their ranking
            positions. The top half of the fighters, those who are ranked the
            highest, will be seeded in the matchups, and their opponents will be
            drawn randomly. This ensures that the highest-ranked fighters will
            not face each other in the initial rounds.
          </p>
        </div>
        <div className="flex w-full justify-end">
          <Image
            src={scoreStageFirstImage}
            alt="Score first round image"
            width={400}
            height={400}
            className="w-full lg:max-w-[560px]"
          />
        </div>
      </div>
      <div className="mb-16 flex flex-col items-center gap-4 lg:mb-24 lg:flex-row lg:gap-12 xl:gap-16">
        <div className="w-full">
          <h3 className="mb-2 text-xl font-bold uppercase text-primary-300/75 md:text-2xl">
            Round 2
          </h3>
          <p className="mb-4 leading-loose opacity-75">
            In the second round of the tournament, winners and losers from the
            first round will face each other. For the losers, these will be
            do-or-die matches.
          </p>
          <p className="leading-loose opacity-75">
            Their goal should be to finish the fight in their favor as quickly
            as possible to earn the maximum number of points.
          </p>
        </div>
        <div className="flex w-full justify-end">
          <Image
            src={scoreStageSecondImage}
            alt="Score second round image"
            width={400}
            height={400}
            className="w-full lg:max-w-[560px]"
          />
        </div>
      </div>
      <div>
        <div className="mx-auto mb-24 flex max-w-screen-md flex-col items-center justify-center gap-16 sm:flex-row md:justify-between">
          <div className="flex items-center gap-4 font-semibold">
            <p className="text-8xl md:text-[9rem]">3</p>
            <div className="uppercase">
              <p className="text-5xl md:text-7xl">points</p>
              <p className="text-2xl md:text-4xl">for win</p>
            </div>
          </div>{" "}
          <div className="flex items-center gap-4 font-semibold">
            <p className="text-8xl md:text-[9rem]">1</p>
            <div className="uppercase">
              <p className="text-5xl md:text-7xl">point</p>
              <p className="text-2xl md:text-4xl">for draw</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-3xl font-bold uppercase">
            Bonus points for finish fight
          </p>

          <div className="mx-auto my-16 flex max-w-sm flex-col gap-8">
            <div className="flex items-center justify-between gap-16 font-bold uppercase">
              <p className="text-2xl">
                first <br />
                round
              </p>
              <p className="text-6xl">+3</p>
            </div>
            <div className="flex items-center justify-between gap-16 font-bold uppercase">
              <p className="text-2xl">
                second <br />
                round
              </p>
              <p className="text-6xl">+2</p>
            </div>

            <div className="flex items-center justify-between gap-16 font-bold uppercase">
              <p className="text-2xl">
                third <br />
                round
              </p>
              <p className="text-6xl">+1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
