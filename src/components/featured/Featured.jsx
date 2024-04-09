import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hello, Luc here</b>
        <p className={styles.subTitle}>Discover my stories and ideas.</p>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Do you know where this is?
          </h1>
          <p className={styles.postDesc}>
            This is a beautiful place that have many people visit.
          </p>
          <button className={styles.button}>
            <p className={styles.textButton}>
              Read More
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
