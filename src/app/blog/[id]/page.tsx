'use client'

import { useParams } from 'next/navigation';

import { Card } from "./Card";
import styles from "./page.module.css"
import { useEffect, useState } from "react";


export default function Post({ image, htmlString, data }:any) {
    const [b,s] = useState<any>(null)
    const params = useParams()

    const aaaaa = async() =>{
        const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs/${params.id}`
  );

  const markdownWithMeta = await res.json();
  s(markdownWithMeta.data)
  return markdownWithMeta.data;
    }

    useEffect(()=>{aaaaa()},[])

  return (
    <Card description={b?.attributes?.description} image={b?.attributes?.imageUrl} title={b?.attributes?.title}/>

  
    
  
  );
};

function marked(content: any) {
    throw new Error("Function not implemented.");
}
