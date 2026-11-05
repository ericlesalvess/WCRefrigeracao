import {Hero} from "./_components/hero";
import {About} from "./_components/about";
import {Services} from "./_components/services";
import {Testimonials} from "./_components/testimonials";
import { Infrastructure } from "./_components/infrastructure";
import {Cta} from "./_components/cta";
import {Footer} from "./_components/footer"
import {Header} from "./_components/header"

export default function Home(){
  return(
    <main>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Infrastructure/>
      <Cta/>
      <Footer/>
    </main>
  )
}