
"use client"

import FAQ from "@/app/landing-sections/faq";
import FeaturesCards from "@/app/landing-sections/features-cards";
import Feature from "@/app/landing-sections/feature";
import Pricing from "@/app/landing-sections/pricing/pricing";
import Swift from "@/app/landing-sections/swift/page";
import Partner from "@/app/landing-sections/pertners/partner";
import Services from "./landing-sections/services/page";
import CarouselAFC from "./landing-sections/caroussel/page";
import Hero from "./landing-sections/hero/page";


export default function Home() {
  return (
    <main className='max-w-6xl mx-auto px-4'>
      <CarouselAFC/>
      <Hero/>

      <Swift />
      <Services />
      {/*<Feature isImageFirst={true}/>
            <Feature isImageFirst={false}/>
            <FeaturesCards/>
            <FAQ/>*/}
      <Partner />
    </main>
  );
}
