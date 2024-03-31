"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";
import DescriptionHeader from "./components/header/descriptionHeading/descriptionHeading";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <main>
        <Header /> 
        <DescriptionHeader />
        <Body />
        <Footer />
      </main>
    </RecoilRoot>
  );
}
