import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  const BASE_URL = import.meta.env.BASE_URL;

  return (
    <section
      id='home'
      className='hero-gradient text-white fade-in relative mt-20 scroll-mt-20'
      data-testid='hero-section'
    >
      <div className='max-w-7xl mx-auto p-4 sm:p-6 lg:p-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center'>
          <div className='text-center lg:text-left'>
            <h1
              className='text-lg md:text-5xl font-bold mb-4 md:mb-12 leading-tight'
              data-testid='hero-title'
            >
              Professional Physiotherapy for Your Health & Recovery
            </h1>
            <p
              className='text-sm md:text-2xl mb-4 md:mb-10 text-white/90 leading-relaxed'
              data-testid='hero-description'
            >
              Expert care and personalized treatment plans to help you move
              better, feel stronger, and live pain-free.
            </p>
            <div className='flex flex-row gap-2 md:gap-12 justify-center lg:justify-start'>
              <Button
                onClick={() => scrollToSection("contact")}
                className='bg-white text-primary px-8 py-4 text-sm md:text-lg font-semibold hover:bg-white/90'
                data-testid='hero-book-consultation'
              >
                Contact
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant='outline'
                className='border-2 border-white text-primary px-8 py-4 text-sm md:text-lg font-semibold hover:bg-white/90 hover:text-primary'
                data-testid='hero-our-services'
              >
                Services Offered
              </Button>
            </div>
          </div>
          <div className='flex justify-center lg:justify-end w-[100%]'>
            <img
              src={`${BASE_URL}logo.jpg`}
              // src={`${BASE_URL}logo_transparent.png`}
              alt='Modern physiotherapy clinic interior'
              className='rounded-2xl shadow-2xl'
              data-testid='hero-image'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
