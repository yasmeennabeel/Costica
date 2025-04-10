import React from 'react'
import mainModel from '../../assets/imgs/mainModel.webp';
import mainPagePhoto from '../../assets/imgs/mainPagePhoto.webp';
import styles from './HomePage.module.css'


export default function HomePage() {
  return (
    <div className={`container d-flex justify-content-between align-items-center gap-3 ${styles.heroSection}`}>
      <div className={styles.imageLeft}>
        <img src={mainPagePhoto} alt="Left Image" className={styles.image} />
      </div>
      <div className={styles.heroContent}>
        <p className={styles.subtitle}>For the beauty of youth</p>
        <h1 className={styles.title}>Discover the secrets of luminous skin</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolore, tenetur tempora et id quia distinctio magnam nesciunt laboriosam.
        </p>
        <button className={styles.homeButton}>Shop Now</button>
      </div>
      <div className={styles.imageRight}>
        <img src={mainModel} alt="Right Image" className={styles.image} />
      </div>
    </div>
  )
}
