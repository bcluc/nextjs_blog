import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContainer}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="luc blog" width={50} height={50} />
            <h1 className={styles.logoText}>LucBlog</h1>
          </div>
          <p className={styles.desc}>
            Hi this is description
          </p>

        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/" className={styles.link}>Contact</Link>
            <Link href="/" className={styles.link}>About</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/" className={styles.link}>Contact</Link>
            <Link href="/" className={styles.link}>About</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/" className={styles.link}>Contact</Link>
            <Link href="/" className={styles.link}>About</Link>
          </div>
        </div>
      </div>
      <div className={styles.icons}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
    </div>
  )
}
