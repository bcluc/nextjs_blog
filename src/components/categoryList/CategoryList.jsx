import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  //console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.headTitle}>Popular Categories</h1>
      <div className={styles.categories}>
      <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image} />
            Style
        </Link>
      </div>
    </div>
  )
}

export default CategoryList;