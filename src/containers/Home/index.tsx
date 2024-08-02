import { Hero } from "@/components/Hero";
import { Popular } from "@/components/Popular";
import { Block } from "@/components/Block";
import { Banner } from "@/components/Banner";
import { ProductGrid } from "@/components/ProductGrid";
import { PriceTracker } from "@/components/PriceTracker";
import { Slider } from "@/components/Slider/index";

const products = Array.from({length: 16}).map(el => ({image: '/image.jpg', alt: 'alt', link: '#'}))

export default function HomePage() {
  return (
    <>
      <Hero/>
      <Popular/>
      <Banner blocks={[{src: '/image.jpg', alt: 'img'}]}/>
      <Slider title="Hot Right Now"/>
      <ProductGrid products={products}/>
      <Block 
        title='You play the games, not us' 
        description="Get the best prices for your used console" 
        button={{type: 'primary', inner: 'Winner, winner, chicken dinner'}}
      />
      <Slider title="MacBooks"/>
      <Banner blocks={[
        {src: '/image.jpg', alt: 'img', width: '40%'}, 
        {src: '/image.jpg', alt: 'img', width: '60%'}]}
        />
      <Block 
        title='Is this thing on?' 
        description="It’s super easy to trade-in your AirPods" 
        button={{type: 'primary', inner: 'Sounds good', style: {width: '100%', maxWidth: '196px'}}}
      />
      <PriceTracker image={{src: '/image.jpg', alt: 'img', width: '46%'}} height="301px"/>
      <Slider title="Latest News"/>
    </>
  );
}
