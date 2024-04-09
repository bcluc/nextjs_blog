"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import styles from "./authLinks.module.css"

export const AuthLink = () => {
  const [open, setOpen] = useState(false);
  const status = 'notauthenticated'
  return (
    <>

      {status == "notauthenticated" ? (
        <Link href="/login" className={styles.link}>Login</Link>

      ) : (
        <>
          <Link href="/write" className={styles.link}>Logout</Link>
          <span className={styles.link}>LogOut</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {
        open && (
          <div className={styles.responsiveMenu}>
            <Link href="/" >Home Page</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>
            {status === "notauthenticated" ? (
              <Link href="/login"></Link>
            ) : (
              <>
                <Link href="/write">Logout</Link>
                <span className={styles.link}>LogOut</span>
              </>
            )
            }

          </div>
        )
      }
    </>
  )
}
