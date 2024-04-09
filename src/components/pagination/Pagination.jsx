import React from 'react'
import styles from "./pagination.module.css"
import { Card } from '../card/Card'

export const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button}>Next</button>
    </div>
  )
}
