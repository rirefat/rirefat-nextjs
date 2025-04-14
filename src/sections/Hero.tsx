import Image from 'next/image';
import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import Available from '@/assets/images/available.gif';

const HeroSection = () => {
  return (
    <div className='py-32'>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt='Person peeking from behind laptop'
            className='size-[100px]'
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex gap-4 rounded-xl'>
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

        <h1 className='font-serif text-3xl text-center mt-8 tracking-wide'>Building Exceptional User Experience</h1>
        <p className='mt-4 text-center text-white/60 '>I specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project.</p>

        <div className='flex flex-col items-center gap-3 mt-8'>
          <button className='font-semibold inline-flex items-center gap-2 border border-white/15 rounded-xl px-6 h-12 hover:bg-white/10 hover:text-white transition duration-300'>
            <span>Explore My Works</span>
            <span>🔎</span>
            {/* <ArrowDown className="size-4"/> */}
          </button>
          <button className='font-semibold inline-flex items-center gap-2 border border-white bg-white text-gray-900 rounded-xl px-6 h-12 hover:bg-white/70 hover:text-gray-900 hover:border-transparent transition duration-300'>
            <span>👋🏻</span>
            <span>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;