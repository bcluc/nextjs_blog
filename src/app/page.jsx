import Link from "next/link";
import styles from "./homepage.module.css";
import { NavBar } from "@/components/navbar/NavBar";
import { Footer } from "@/components/footer/Footer";
import { Featured } from "@/components/featured/Featured";
import { CategoryList } from "@/components/categoryList/CategoryList";
import { CardList } from "@/components/cardList/CardList";
import { MenuCategories } from "@/components/menuCategories/MenuCategories";
import { Menu } from "@/components/menu/Menu";

export default function Home() {
  return <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
      <CardList/>
      <Menu/>
    </div>
  </div>;
}
