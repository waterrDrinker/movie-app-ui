import Image from "next/image";
import Link from "next/link";
// #!
const Sidenav = () => {
  return (
    <nav className="flex items-center flex-col px-[55px] pt-[40px] h-screen">
      <div id="logo" className="pl-[9px] mb-[110px]">
        <Link href="/" className="transition delay-150 hover:brightness-150">
          <Image src="/icons/Logo.svg" alt="logo" height={50} width={32} />
        </Link>
      </div>
      <div id="btns" className="flex flex-col space-y-7 mb-[282px]">
        <Link href="#!" className="transition delay-150 hover:brightness-125">
          <div className="p-2.5">
            <Image src="/icons/search-icon.svg" alt="logo" height={34} width={34} />
          </div>
        </Link>
        <Link href="#!" className="transition delay-150 hover:brightness-125">
          <div className="p-2.5">
            <Image src="/icons/home-icon.svg" alt="home" height={34} width={34} />
          </div>
        </Link>
        <Link href="#!" className="transition delay-150 hover:brightness-125">
          <div className="p-2.5">
            <Image src="/icons/player-icon.svg" alt="player" height={34} width={34} />
          </div>
        </Link>
        <Link href="#!" className="transition delay-150 hover:brightness-125">
          <div className="p-2.5">
            <Image src="/icons/tv-icon.svg" alt="tv" height={34} width={34} />
          </div>
        </Link>
        <Link href="#!" className="transition delay-150 hover:brightness-125">
          <div className="p-2.5">
            <Image src="/icons/heart-icon.svg" alt="favorite" height={34} width={34} />
          </div>
        </Link>
        <Link href="#!" className="transition delay-150 hover:brightness-125">
          <div className="p-2.5">
            <Image src="/icons/profile-icon.svg" alt="profile" height={34} width={34} />
          </div>
        </Link>
      </div>
      <div id="up" className="">
        <Link href='#!' className="transition hover:brightness-125">
          <div className="p-2.5">
            <Image
              src='/icons/up-icon.svg'
              alt='up'
              width={25}
              height={25}
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Sidenav;
