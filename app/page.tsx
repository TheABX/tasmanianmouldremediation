import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import PMFriendly from '@/components/PMFriendly'
import RemediationNotCleaning from '@/components/RemediationNotCleaning'
import WhyMouldReturns from '@/components/WhyMouldReturns'
import Services from '@/components/Services'
import ServiceAreas from '@/components/ServiceAreas'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Professional Mould Remediation & Moisture Assessment | Tasmania',
  description: 'Expert mould remediation and moisture assessment services for property managers and landlords across North West Coast Tasmania and Launceston. Safe removal, professional documentation.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <RemediationNotCleaning />
      <PMFriendly />
      <WhyMouldReturns />
      <Services />
      <ServiceAreas />
      <Testimonials />
      <CTASection />
    </>
  )
}
