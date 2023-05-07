
import React, { FC } from 'react'
import styles from "./page.module.css"


interface props{
    image:string;
    title:string;
    description:string;

}

export const Card:FC<props> = ({image,title,description}) => {
  return (
    <div className={styles.Card}>
        <figure className={styles.cardImage}>
            <img src={image} alt='image' className={styles.image}/>
        </figure>
        <div className={styles.CardBottom}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}
