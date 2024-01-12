import { Product } from "./types";

export const homeHero = {
  img: "/images/hero-image.jpg",
  header:
    "Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле.",
};

export const products: Product[] = [
  {
    id: "1",
    title: "Синий жук",
    score: "10",
    images: "/images/card-1.jpg",
  },
  {
    id: "2",
    title: "Домашняя игра",
    score: "6,9",
    images: "/images/card-2.jpg",
  },
  {
    id: "3",
    title: "Салют 7",
    score: "5,8",
    images: "/images/card-3.jpg",
  },
  {
    id: "4",
    title: "Поймай меня, если сможешь",
    score: "7,0",
    images: "/images/card-4.jpg",
  },
  {
    id: "5",
    title: "8 подруг Оушена",
    score: "9,1",
    images: "/images/card-5.jpg",
  },
  {
    id: "6",
    title: "Энканто",
    score: "9,1",
    images: "/images/card-6.jpg",
  },
  {
    id: "7",
    title: "Мэр Кингстауна",
    score: "9,1",
    images: "/images/card-7.jpg",
  },
  {
    id: "8",
    title: "Пять ночей с Фредди",
    score: "9,1",
    images: "/images/card-8.jpg",
  },
];

export const topTen: Product[] = [
  {
    id: "9",
    isTop: true,
    title: "Уэнсдэй",
    originalTitle: "Wednesday",
    subtitle:
      "Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.",
    releaseDate: "2022 - ...",
    worldPremier: "31 октября 2022",
    seasons: "1 сезон",
    country: "США",
    genre: "Ужасы",
    genres: ["Фэнтези", "Комедия", "Криминал", "Детектив"],
    audioLanguages: ["Rus", "Eng"],
    quality: "Full HD",
    ageRestriction: "0+",
    isContentSensetive: true,
    desc: "Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в академии.",
    score: "10",
    images: {
      poster: "/images/top-card-1.jpg",
      hero: "/images/wednesday/hero.jpg",
      title: "/images/wednesday/title.png",
      screens: [
        {
          screenUrl: "/images/wednesday/screen-1.jpg",
          episodeOrder: "1 серия",
          duration: "43 минуты",
        },
        {
          screenUrl: "/images/wednesday/screen-2.jpg",
          episodeOrder: "2 серия",
          duration: "41 минуту",
        },
        {
          screenUrl: "/images/wednesday/screen-3.jpg",
          episodeOrder: "3 серия",
          duration: "38 минут",
        },
      ],
    },
    similarIds: ["5", "6", "10", "1", "7", "8"],
  },
  {
    id: "10",
    isTop: true,
    title: "Красное уведомление",
    score: "9,1",
    images: "/images/top-card-2.jpg",
  },
  {
    id: "11",
    isTop: true,
    title: "Поймай меня, если сможешь",
    score: "7,0",
    images: "/images/top-card-3.jpg",
  },
];

