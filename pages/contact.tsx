import Image from "next/image";
import { Inter } from "next/font/google";

import { MainLayaout } from "../components/layaouts/MainLayaout";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <MainLayaout>
      <h1 className={"title"}>PAGINA DE CONTACTO</h1>
      <p>
        Get started by editing&nbsp;
        <code className={"code"}>pages/contact</code>
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
    </MainLayaout>
  );
}
