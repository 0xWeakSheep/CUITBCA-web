import Hero from "@/components/hero"
import About from "@/components/about"
import Members from "@/components/members"
import SocialMedia from "@/components/social-media"
import Resources from "@/components/resources"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <About />
      <Members />
      <SocialMedia />
      <Resources />
      <Footer />
    </main>
  )
}
