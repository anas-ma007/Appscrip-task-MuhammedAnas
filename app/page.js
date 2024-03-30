import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";
import DescriptionHeader from "./components/header/descriptionHeading/descriptionHeading";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

export default function Home() {
  return <main>
    <Header/>
    <DescriptionHeader/>
    <Body/>
    <Footer/>
  </main>;
}
