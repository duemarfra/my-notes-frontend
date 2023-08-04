'use client'

import Link from 'next/link'
import styles from './page.style.css'
import { IoArrowForward } from 'react-icons/io5';

export default function Home() {
  return (
    <>
      <h1>WELCOME TO "MY NOTES"</h1>
      <div className="link-container">
        <Link href="/notes" className="link">
          <IoArrowForward size={20} className={styles.icon} />
        </Link>
      </div>
    </>


  )
}
