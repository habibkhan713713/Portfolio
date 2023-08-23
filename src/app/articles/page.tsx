import article2 from "../../../public/images/Articles/article2.webp";
import article1 from "../../../public/images/Articles/article1.webp";
import AnimatedText from "../components/AnimatedText";
import { FeaturedArticle , MovingImg } from "../components/ArticleComp";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";

async function getData() {
  
  const data = await client.fetch(groq`*[_type == "post"]{
    _id,
    publishedAt,
    title,
    "slug":slug.current ,
    "mainImage":mainImage.asset->url,
    heading    
  
    }`)

    
  return data
 }

async function Page() {
 const data = await getData();


  return (
    <main className="mb-24 lg:mb-8 flex mx-32 flex-col items-center md:mx-8 justify-between">
     
      <AnimatedText
        className="text-8xl pt-16 pb-16 2xl:py-8 xl:py-4 dark:text-light xl:text-[5rem] 2xl:text-[4.5rem] lg:text-4xl  lg:py-1 "
        text="Words Can Change the World!"
      ></AnimatedText>
      <div className="grid gap-12 grid-flow-row grid-cols-12 items-center md:w-[93vw] md:block justify-between ">
        <FeaturedArticle
          readtime="9"
          image={article1}
          para="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
          link=""
          title="Build a custom pagination component in reactjs from scratch"
        ></FeaturedArticle>

        <FeaturedArticle
          readtime="12"
          image={article2}
          para="Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
          link=""
          title="creating stunning loading screens in react: Build 3 types of loading screens"
        ></FeaturedArticle>
      </div>
      <div className="w-full flex flex-col pb-32 justify-center items-center pt-32 xl:py-16 lg:pb-2">
        <h1 className="text-4xl font-bold text-dark pb-16 dark:text-light xl:pb-8 lg:pb-4">
          All Articles
        </h1>

        <div className="flex 2xl:w-full flex-col md:w-[96vw] items-center justify-center pt-8 lg:pt-2">
          {data &&
            data.map((post:any)=>{return(
              <MovingImg key={post.slug}
            title={post.heading}
            img={post.mainImage}
            link={post.slug}
            date={post.publishedAt}
          ></MovingImg>
            )})
          }
        </div>
      </div>
    </main>
  );
}

export default Page;
export const metadata = {
  generator: 'Next.js',
  applicationName: 'Habibullah Khan || Articles',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React',"Portfolio","Next","Habibullah Khan", 'JavaScript',"Web DEveloper","Web"],
  authors: [{ name: 'Habibullah Khan' }],
  creator: 'Habibullah Khan',
  publisher: 'Habibullah Khan',
}