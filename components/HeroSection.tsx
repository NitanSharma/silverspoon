import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 container px-4 py-28 min-h-screen ">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-5xl md:text-6xl">
          Be The Fastest In <br /> Delivery Your{' '}
          <span className="text-orange-400">Food</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
          maiores.
        </p>
        <Button className="rounded-md bg-orange-400 ">Get Started</Button>
      </div>
      <div className="flex flex-col items-center justify-center ">
        svg-section
       </div>
      
    </section>
  );
}
