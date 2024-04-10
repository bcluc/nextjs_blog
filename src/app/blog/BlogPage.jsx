import React from 'react'
import styles from "./blogPage.module.css"
import { CardList } from '@/components/cardList/CardList'

export const BlogPage = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
    const { cat } = searchParams;
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Style Blog
            </h1>
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
        </div>
    )
}
