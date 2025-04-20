import Link from "next/link";
import Image from "next/image";
import CheckIcon from '@/assets/icons/check-circle.svg';
import GithubIcon from '@/assets/icons/github.svg';
import PreviewIcon from '@/assets/icons/preview.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import grainImage from '@/assets/images/grain.jpg';
import { url } from "inspector";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";



const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    source: "https://github.com/yourusername/dark-saas-landing",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    source: "https://github.com/yourusername/light-saas-landing",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    source: "https://github.com/yourusername/ai-startup-landing",
    image: aiStartupLandingPage,
  },
];



const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Crafted Creations"
          subtitle="Precision in Every Pixel"
          text="Witness how abstract ideas evolve into immersive digital realities"
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >

              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`
                }}
              />
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-blue-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text gap-2">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckIcon className="size-4 md:size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col md:flex-row gap-4 mt-8">
                    <Link href="#" target="_blank">
                      <button className="bg-white hover:bg-white/80 text-gray-950 h-12 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 w-full md:w-auto">
                        <span>Preview</span>
                        <ArrowUpRightIcon className='size-5' />
                      </button>
                    </Link>

                    <Link href="#" target="_blank">
                      <button className="border border-white/30 text-white hover:bg-white/10 h-12 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 w-full md:w-auto">
                        <span>GitHub</span>
                        <GithubIcon className='size-5' />
                      </button>
                    </Link>
                  </div>


                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt="Project featuring image"
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;