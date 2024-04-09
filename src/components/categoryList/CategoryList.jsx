import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

export const CategoryList = () => {
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
        <Link href={`/blog`} className={`${styles.category} ${styles.fashion}`}>
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image} />
            Fashion
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.food}`}>
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image} />
            Food
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.travel}`}>
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image} />
            Travel
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.style}`}>
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image} />
            Travel
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.style}`}>
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image} />
            Travel
        </Link>

      </div>
    </div>
  )
}
