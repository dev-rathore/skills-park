import HeroSection from "@/components/ui/home-page-sections/hero"
import SkillsSection from "@/components/ui/home-page-sections/skills-section/skills"
import StandOutSection from "@/components/ui/home-page-sections/stand-out-section/stand-out"
import PricingSection from "@/components/ui/home-page-sections/pricing"
import TestimonialsSection from "@/components/ui/home-page-sections/testimonials-section/testimonials";
import FooterSection from "@/components/ui/home-page-sections/footer"
import HeaderSection from "@/components/ui/home-page-sections/header";
import NewsletterSubscribeSection from "@/components/ui/home-page-sections/newsletter-subscribe";

const Page = () => {
  return (
    <div className="container flex min-h-screen w-full flex-col">
      <HeaderSection />
      <main
        className="container flex flex-col gap-4 md:gap-8 p-0 md:p-10"
      >
        <HeroSection />
        <SkillsSection />
        <StandOutSection />
        <PricingSection />
        <TestimonialsSection />
        <NewsletterSubscribeSection />
        <FooterSection />
      </main>
    </div>
  )
}

export default Page;
