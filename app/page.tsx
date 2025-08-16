import HeroSection from '@/components/HeroSection';
import HowItWork from '@/components/HowItWork';
import MenuSection from '@/components/MenuSection';

export default function page() {
  return (
    <main className="bg-[#FFF9E9] w-full min-h-screen ">
      <HeroSection />
      <HowItWork />
      <MenuSection />
    </main>
  );
}
