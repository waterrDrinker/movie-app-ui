import Link from "next/link"
import { homeHero } from "./lib/data"

export default function Home() {
  return (
    <main className="pl-[51px] w-full">
      <section id="hero" className="h-[800px] w-full flex flex-col justify-end items-center relative">
        <div className="w-[1250px] h-[800px] absolute top-0 right-0 bg-hero bg-no-repeat -z-20" />
        <div className="pr-[200px]">
          <div className="w-[886px] mb-[36px]">
            <h2 className="text-[40px] text-center">{homeHero.header}</h2>
          </div>
          <div className="text-[30px] space-x-[24px] flex justify-center">
            <Link href='#!' className="px-[53px] h-[80px] flex items-center rounded-2xl gradient-btn">Смотреть</Link>
            <Link href='#!' className="px-[53px] h-[80px] flex items-center rounded-2xl transparent-btn">О фильме</Link>
          </div>
        </div>
      </section>


    </main>
  )
}
