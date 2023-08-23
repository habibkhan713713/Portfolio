import Image from "next/image";
import Profile from "../../../../public/images/profiles/profilepic2.png";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../../../../sanity/lib/image";


export default async function page(props: any) {
  async function getPostBySlug(slug: any) {
    const query = groq`
        *[_type == "post" && slug.current == $slug][0] {
          _id,
          publishedAt,
          title,
          "slug": slug.current,
          "mainImage": mainImage.asset->url,
          keywords,
          description,
          body
        }
      `;
    const params = { slug }; // Pass the slug as a parameter
    const post = await client.fetch(query, params);
    metadata.keywords = post.keywords.split(",");
    metadata.title = post.title;
    metadata.description = post.description;
    return post;
  }

  const post = await getPostBySlug(props.params.id);

 

  return (
    <div className="text-dark dark:text-light w-[100%] 3xl:px-32 2xl:px-32 sm:px-8 xs:px-4 lg:px-16 pt-16 sm:pt-8 flex flex-col items-start justify-between">
      <h1 className="text-4xl font-bold mb-8 xs:text-2xl">{post.heading}</h1>

      <div className="flex flex-row items-center justify-between md:items-start md:ml-4 w-[90%] 2xl:w-[90%] 3xl:w-[90%] md:w-full md:flex-col">
        <div className="flex flex-row justify-center items-center">
          <Image
            alt="Author Pic"
            src={Profile}
            sizes="(max-width:768px) 20vw,
          (max-width:1200px) 20vw,
          20vw"
            className="h-20 w-20 rounded-full dark:bg-light bg-dark"
          ></Image>
          <div className="flex flex-col items-center justify-between 3xl:ml-8 2xl:ml-8 capitalize ">
            <span className="2xl:text-lg 3xl:text-lg  font-bold">
              Habibullah Khan
            </span>
            <span className="2xl:text-base 3xl:text-base capitalize">
              Student of BSCS
            </span>
          </div>
        </div>
        <span className="2xl:text-base 3xl:text-base capitalize md:pt-6">
          <span
            className="text-dark/80 
         dark:text-light/80
        "
          >
            Published On :&nbsp;{" "}
          </span>
          {post.publishedAt}
        </span>
      </div>

      <div className="mt-12 mb-12 h-auto w-full ">
        <Image
          className="w-full h-auto"
          width={500}
          height={500}
          src={post.mainImage}
          priority
          alt={post.title}
        ></Image>
        <div className="mt-8 flex flex-col gap-5 ">
          <PortableText
            value={post.body}
            components={{}}
          ></PortableText>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  generator: "Next.js",
  applicationName: "Portfolio Habibullah khan",
  referrer: "origin-when-cross-origin",
  description: ``,
  keywords: [],
  title: "",
  authors: [{ name: "Habibullah Khan" }],
  creator: "Habibullah Khan",
  publisher: "Habibullah Khan",
};
