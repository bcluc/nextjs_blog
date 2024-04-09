import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        <div className={styles.imageContainer}>
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>
              11.12.2024
            </span>
            {" - "}
            <span className={styles.category}>
              TRAVEL
            </span>
          </div>
          <Link href="/">

            <h1 className={styles.title}>Title</h1>
          </Link>
          <p className={styles.desc}>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          <Link href="/" className={styles.link}>Read More</Link>
        </div >
      </div>
    </div>
  )
}
