import Image from 'next/image';
import memojiImage from '@/assets/images/memoji-computer.png';
// import ArrowDown from '@/assets/icons/arrow-down.svg';
import Available from '@/assets/images/available.gif';
import grainImage from '@/assets/images/grain.jpg';
import StarIcons from '@/assets/icons/star.svg';
import SparkleIcons from '@/assets/icons/sparkle.svg';
import HeroOrbit from '@/components/HeroOrbit';

const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-10"
          style={{
            backgroundImage: `url(${grainImage.src})`
          }}
        />

        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />
        <div className="size-[1450px] hero-ring" />

        <HeroOrbit size={800} rotation={-72}>
          <StarIcons className='size-28 text-blue-300' />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcons className='size-12 text-blue-300' />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcons className='size-8 text-blue-300' />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcons className='size-8 text-blue-300/20' />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcons className='size-5 text-blue-300/20' />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcons className='size-10 text-blue-300/20' />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcons className='size-14 text-blue-300/20' />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className='size-3 bg-blue-300/60 rounded-full animate-pulse' />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-40}>
          <div className='size-2 bg-blue-300/60 rounded-full animate-pulse' />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className='size-2 bg-blue-300/60 rounded-full animate-pulse' />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt='Person peeking from behind laptop'
            className='size-[100px]'
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex gap-4 rounded-2xl'>
            <div className='flex justify-center items-center'>
              <Image
                src={Available}
                alt='Available for any project'
                className='size-3'
              />
            </div>
            <div className='text-sm font-medium'>Available For New Projects</div>
          </div>
        </div>

        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Exceptional User Experience</h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>Hello, I&apos;m Rafiul, specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project.</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-3 mt-8'>
          <button className='font-semibold inline-flex items-center gap-2 border border-white/15 rounded-xl px-6 h-12 hover:bg-white/10 hover:text-white transition duration-300 z-10'>
            <span>Explore My Works</span>
            <span>🔎</span>
            {/* <ArrowDown className="size-4"/> */}
          </button>
          <button className='font-semibold inline-flex items-center gap-2 border border-white bg-white text-gray-900 rounded-xl px-6 h-12 hover:bg-white/70 hover:text-gray-900 hover:border-transparent transition duration-300 z-10'>
            <span>👋🏻</span>
            <span>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;