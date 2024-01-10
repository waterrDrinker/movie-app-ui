type Product = {
  id: number;
  title: string;
  subtitle?: string;
  desc?: string;
  score: string | null;
  seasons?: string;
  image: string;
  releaseDate?: string;
  genre?: string;
  country?: string;
  ageRestriction?: string;
}

export const homeHero = {
  img: '/images/hero-image.jpg',
  header: 'Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле.'
}

export const novelties: Product[] = [
  {
    id: 1,
    title: 'Синий жук',
    score: '10',
    image: '/images/card-1.jpg'
  },
  {
    id: 2,
    title: 'Домашняя игра',
    score: '6,9',
    image: '/images/card-2.jpg'
  },
  {
    id: 3,
    title: 'Салют 7',
    score: '5,8',
    image: '/images/card-3.jpg'
  },
  {
    id: 4,
    title: 'Поймай меня, если сможешь',
    score: '7,0',
    image: '/images/card-4.jpg'
  },
]

export const topTen: Product[] = [
  {
    id: 4,
    title: 'Уэнсдэй',
    subtitle: 'Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.',
    releaseDate: '2022 - ...',
    seasons: '1сезон',
    country: "США",
    genre: 'Ужасы',
    ageRestriction: '0+',
    desc: 'Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в академии.',
    score: "10",
    image: '/images/top-card-1.jpg'
  },
  {
    id: 5,
    title: 'Поймай меня, если сможешь',
    score: null,
    image: '/images/top-card-2.jpg'
  },
  {
    id: 6,
    title: 'Поймай меня, если сможешь',
    score: '7,0',
    image: '/images/top-card-3.jpg'
  },
]