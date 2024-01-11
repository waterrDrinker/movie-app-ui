import Link from "next/link";
import { homeHero, novelties, topTen } from "./lib/data";
import { archivo } from "./fonts/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pl-[5.1rem] w-full">
      <section
        id="hero"
        className="h-[800px] w-full flex flex-col justify-end items-center relative mb-[9.5rem]"
      >
        <div className="w-[1250px] h-[800px] absolute top-0 right-0 bg-hero bg-no-repeat -z-20" />
        <div className="pr-[200px]">
          <div className="w-[886px] mb-[36px]">
            <h2 className="text-[4rem] font-medium text-center">
              {homeHero.header}
            </h2>
          </div>
          <div className="text-[3rem] space-x-[2rem] flex justify-center">
            <Link
              href="#!"
              className="px-[53px] h-[80px] flex items-center rounded-2xl gradient-bg"
            >
              Смотреть
            </Link>
            <Link
              href="#!"
              className="px-[53px] h-[80px] flex items-center rounded-2xl transparent-bg"
            >
              О фильме
            </Link>
          </div>
        </div>
      </section>

      <section id="novelties" className="mb-[11rem]">
        <h3 className="text-[4rem] font-bold mb-[2.4rem]">Новинки</h3>
        <ul className="flex space-x-[4.4rem] overflow-hidden whitespace-nowrap">
          {novelties.map((novelty) => (
            <li
              key={novelty.id}
              className="cursor-pointer shrink-0 grow-0 basis-auto"
            >
              <Link href="#!">
                <div className="relative mb-[2rem]">
                  <Image
                    className="rounded-[2rem]"
                    src={novelty.image}
                    alt={novelty.title}
                    width={398}
                    height={597}
                  />
                  <div className="absolute gradient-bg left-7 top-7 w-[7.5rem] h-[4.8rem] rounded-xl flex justify-center items-center">
                    {novelty.score}
                  </div>
                </div>
                {novelty.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="top-ten" className="mb-[20.3rem]">
        <h3 className="font-bold text-[4rem] mb-[3.35rem]">
          <span className="font-black italic text-[5.2rem] text-gradient--outline mr-[2rem]">
            ТОП-10
          </span>
          просмотров за неделю
        </h3>
        <ul className="flex space-x-[26.1rem] overflow-hidden whitespace-nowrap pl-[16.1rem]">
          {topTen.map((top, i) => (
            <li
              key={top.id}
              className="cursor-pointer shrink-0 grow-0 basis-auto"
            >
              <Link href="#!">
                <div className="mb-[2rem]">
                  <div className="w-[39.8rem] h-[59.7rem] relative">
                    <Image
                      className="rounded-[2rem]"
                      src={top.image}
                      alt={top.title}
                      width={398}
                      height={597}
                    />
                    <div
                      className={`${archivo.className} absolute -z-10 -left-[16.1rem] top-[2.5rem] text-[36rem] font-black italic`}
                    >
                      <p className="text-gradient--outline">{i + 1}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
