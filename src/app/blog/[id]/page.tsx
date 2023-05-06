'use client'

import  Head  from "next/head";
import fm from "front-matter";
import matter from "gray-matter";
import Image from "next/image";

import styles from "./page.module.css"
import { useEffect, useState } from "react";


// export const getStaticPaths = async () => {
//   const resulting = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs`);
//   const result = await resulting.json();
//   return {
//     paths: result.data.map((result:any)  => ({
//       params: { id: result.id.toString() },
//     })),
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }:any) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs/1`
//   );

//   const markdownWithMeta = await res.json();
//   const parsedMarkdown = matter(markdownWithMeta.data.attributes.draft);
//   const htmlString = marked(parsedMarkdown.content);

//   const image = markdownWithMeta.data.attributes.imageUrl;

//   return {
//     props: {
//       image,
//       htmlString,
//       data: parsedMarkdown.data,
//     },
//   };
// };

export default function Post({ image, htmlString, data }:any) {
    const [b,s] = useState<any>(null)

    const aaaaa = async() =>{
        const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs/1`
  );

  const markdownWithMeta = await res.json();
  console.log(markdownWithMeta.data)
  s(markdownWithMeta.data)
  return markdownWithMeta.data;
    }

    useEffect(()=>{aaaaa()},[])

  return (
    <>fds
    <p>{b?.id}</p>
    <p>{b?.attributes?.title}</p>
      {/* <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Head>
      <div className={styles.post}>
        <Image
          src={`${image}`}
          alt="blog-post"
          priority={true}
          className="rounded-full"
          width={600}
          height={400}
        />
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div> */}
    </>
  );
};

function marked(content: any) {
    throw new Error("Function not implemented.");
}
