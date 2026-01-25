import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
}
