import { Product } from "../../../lib/types";
import Link from "next/link";
import { products, topTen } from "../../../lib/data";
import Image from "next/image";

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const product = getProductData(id);

  let similarProducts;
  if (product?.similarIds) {
    similarProducts = product.similarIds.map((id) => {
      return (
        topTen.find((prod) => prod.id === id) ||
        products.find((prod) => prod.id === id)
      );
    });
  }

  return (
    <>
      {product ? (
        <main className="w-full">
          <h1 hidden>{product.title}</h1> {/* for SEO */}
          <section id="hero" className="w-full relative mb-[11.2rem]">
            <div className="absolute right-0 top-0 -z-10">
              {product?.images &&
                typeof product.images === "object" &&
                product.images?.hero && (
                  <Image
                    className=""
                    src={product.images?.hero}
                    alt="hero"
                    width={1400}
                    height={780}
                    quality={100}
                  />
                )}
            </div>
            <div className="flex flex-col items-start pt-[9rem]">
              {product?.images &&
                typeof product.images === "object" &&
                product.images?.title && (
                  <Image
                    className="mb-[3.236rem]"
                    src={product.images?.title}
                    alt="title"
                    width={367}
                    height={132}
                  />
                )}

              <ul className="flex items-center space-x-[3.2rem] font-normal mb-8">
                <li className="bg-transparent rounded-[1.2rem] py-[0.722rem] px-[2.2rem] font-medium">
                  {product.score}
                </li>
                <li className="">{product.releaseDate}</li>
                <li>{product.seasons}</li>
                <li>{product.country}</li>
                <li>{product.genre}</li>
                <li>{product.ageRestriction}</li>
              </ul>

              <div className="max-w-[73.5rem] mb-[11.2rem]">
                <p>{product.subtitle}</p>
              </div>

              <div className="flex items-center space-x-[1.6rem] font-[3rem]">
                <Link
                  href="#!"
                  className="bg-gradient flex justify-center items-center py-[2.4rem] px-[3.2rem] rounded-[1.6rem] h-[8rem]"
                >
                  Смотреть
                </Link>
                <button className="bg-transparent flex justify-center items-center py-[2.4rem] px-[3.2rem] rounded-[1.6rem] h-[8rem]">
                  Трейлер
                </button>
                <button
                  className="bg-transparent flex justify-center items-center py-[2.667rem] px-[3.733rem] rounded-[1.6rem] h-[8rem]"
                >
                  <Image
                    src="/icons/bookmark-icon.svg"
                    alt="bookmark"
                    width={21.33}
                    height={26.67}
                  />
                </button>
                <button
                  className="bg-transparent flex justify-center items-center py-[2.667rem] px-[3.733rem] rounded-[1.6rem] h-[8rem]"
                >
                  <Image
                    src="/icons/heart.svg"
                    alt="favorite"
                    width={26.59}
                    height={23.99}
                  />
                </button>
              </div>
            </div>
          </section>
          <section id="screens" className="mb-[6rem]">
            <div className="flex items-center space-x-[4.4rem] mb-[2.4rem]">
              <h2 className="font-bold text-[4rem]">Сезоны</h2>
              <ul className="flex items-center space-x-[2rem]">
                {Array.from({ length: 3 }, (_, i) => i + 1).map((num, i) => (
                  <li key={i} className="w-[4rem] h-[4rem] bg-[#232326] text-[var(--gray-color)] rounded-full flex justify-center items-center hover:bg-white hover:text-background select-none cursor-pointer">
                    {num}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="flex space-x-[2rem]">
              {typeof product.images === "object" &&
                product.images?.screens &&
                product.images.screens.map((screen, i) => (
                  <li key={i} className="basis-auto shrink-0 grow-0">
                    <Image
                      className="max-w-[54.4rem] h-[30.6rem] object-cover rounded-[2rem] mb-[2rem]"
                      src={screen.screenUrl}
                      alt={`Screen-${i + 1}`}
                      width={544}
                      height={306}
                    />
                    <div>
                      <p className="mb-[1.2rem]">{screen.episodeOrder}</p>
                      <span className="text-[var(--gray-color)] text-[2.4rem]">{screen.duration}</span>
                    </div>
                  </li>
                ))}
            </ul>
          </section>
          <section id="description" className="pr-[6.4rem] mb-[6rem]">
            <h3 className="font-bold text-[4rem] mb-[2.4rem]">Описание</h3>
            <p className="font-normal text-[3rem] mb-[2.4rem]">{product.desc}</p>
            {product?.isContentSensetive && (
              <div className="flex">
                <div className="w-[6.762rem] flex justify-start items-start pt-[0.2rem]">
                  <Image
                    src="/icons/attention-icon.svg"
                    width={39.68}
                    height={40}
                    alt="Attention icon"
                  />
                </div>
                <p className="text-[var(--darker-gray-color)] font-normal text-[2.8rem]">
                  Контент может содержать сцены курения и употребления спиртных
                  напитков. Курение и чрезмерное употребление алкоголя вредит
                  вашему здоровью.
                </p>
              </div>
            )}
          </section>
          <section id="similar" className="mb-[6rem]">
            <h4 className="font-bold text-[4rem] mb-[2.4rem]">Похожее</h4>
            <ul className="flex space-x-[4.4rem] overflow-hidden whitespace-nowrap">
              {similarProducts?.map((prod: Product | undefined) => {
                return prod ? (
                  <li
                    key={prod.id}
                    className="cursor-pointer shrink-0 grow-0 basis-auto"
                  >
                    <Link href="#!">
                      <div className="relative mb-[2rem]">
                        <Image
                          className="rounded-[2rem]"
                          src={
                            typeof prod.images === "string"
                              ? prod.images
                              : prod.images?.poster
                          }
                          alt={prod.title}
                          width={398}
                          height={597}
                        />
                        <div className="absolute bg-gradient left-7 top-7 w-[7.5rem] h-[4.8rem] rounded-xl flex justify-center items-center">
                          {prod.score}
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li>undefined</li>
                );
              })}
            </ul>
          </section>
          <section id="information" className="mb-[12.6rem]">
            <h5 className="font-bold text-[4rem] mb-[2.4rem]">Информация</h5>
            <div className="grid grid-cols-3 font-normal text-[2.8rem]">
              <div>
                <h6 className="text-[var(--darker-gray-color)]">Премьера в мире</h6>
                <p>{product.worldPremier}</p>
              </div>
              <div>
                <h6 className="text-[var(--darker-gray-color)]">Страна</h6>
                <p>{product.country}</p>
              </div>
              <div>
                <h6 className="text-[var(--darker-gray-color)]">Язык аудиодорожки</h6>
                <p>{product.audioLanguages?.join(', ')}</p>
              </div>
              <div>
                <h6 className="text-[var(--darker-gray-color)]">Оригинальное название</h6>
                <p>{product.originalTitle}</p>
              </div>
              <div>
                <h6 className="text-[var(--darker-gray-color)]">Жанры</h6>
                <p>{product.genres?.join(', ')}</p>
              </div>
              <div>
                <h6 className="text-[var(--darker-gray-color)]">Качество</h6>
                <p>{product.quality}</p>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <div>Couldn&apos;t found a product.</div>
      )}
    </>
  );
};

export default Page;

function getProductData(id: string) {
  const product = products.find((product) => product.id === id);
  if (product) {
    return product;
  } else {
    const topProduct = topTen.find((top) => top.id === id);
    return topProduct || undefined;
  }
}
