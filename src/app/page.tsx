import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { BrandDifferent, Footer, Header, Hero, Navbar, News, Products, Studio } from "@/components";


export default async function Home() {

  const products = await client.fetch(groq`*[_type == 'product']`)
     console.log(products)


  return (
    <div>
      <Navbar />
      <Header />
       <Hero />
       <BrandDifferent />
       <Products />
       <News />
       <Studio />
       <Footer />
    </div>
  );
}
