'use client'

import { useParams } from 'next/navigation';

import { Card } from "./Card";
import styles from "./page.module.css"
import { useEffect, useState } from "react";


export default function Post({ image, htmlString, data }:any) {
    const [b,s] = useState<any>(null)
  

    const aaaaa = async() =>{
        const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs/`
  );

  const markdownWithMeta = await res.json();
  s(markdownWithMeta.data)
  return markdownWithMeta.data;
    }

    useEffect(()=>{aaaaa()},[])
    const array = ['ga','ga','ga']
  return (
    <div className={styles.CardContent}>
      {b?.map((data:any , index:number) => (
          <Card description={data?.attributes?.description} image={data?.attributes?.imageUrl} title={data?.attributes?.title} key={index}/>                              
      ))}
    </div>

  
    
  
  );
};

function marked(content: any) {
    throw new Error("Function not implemented.");
}
