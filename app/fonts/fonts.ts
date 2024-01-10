import { Archivo } from "next/font/google";
import localFont from "next/font/local";

export const archivo = Archivo({ subsets: ["latin"] });
export const ttNormsPro = localFont({
  src: [
    {
      path: "./TTNormsPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./TTNormsPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./TTNormsPro-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./TTNormsPro-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./TTNormsPro-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./TTNormsPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./TTNormsPro-BlackItalic.woff",
      weight: "800",
      style: "italic",
    },
    {
      path: "./TTNormsPro-BlackItalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
});
