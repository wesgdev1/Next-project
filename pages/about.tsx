import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { MainLayaout } from "../components/layaouts/MainLayaout";
import { DarkLayaout } from "../components/layaouts/DarkLayaout";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <h1 className={"title"}>PAGINA DE ABOUT</h1>
      <p>
        Get started by editing&nbsp;
        <code className={"code"}>pages/About</code>
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={"vercelLogo"}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page:ReactElement) {
  return (
    <MainLayaout>
      <DarkLayaout>{page}</DarkLayaout>
    </MainLayaout>
  );
};
