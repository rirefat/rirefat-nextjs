import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import grainImage from '@/assets/images/grain.jpg';
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";

const testimonials = [
  {
    name: "Danielle Dino",
    position: "Owner @ WEBCASA Design Agency",
    text: "I work with many WordPress developers for the past 10 years and it is hard to find someone with the level of skills and strict attention to details. Rafiul is very excellent to work any project.",
    avatar: memojiAvatar1,
  },
  {
    name: "Olga Harradine",
    position: "Managing Director @ Clean to Concierge",
    text: "Rafiul is brilliant to work with. He is responsive, knowledgeable and professional. Nothing was a problem. Anything tricky – he found a way to fix it. He is extremely fluent in English and everything produced was perfect. The workflow was fast and thorough. Highly recommend!",
    avatar: memojiAvatar2,
  },
  {
    name: "THEDOG Teachings",
    position: "Podcast Company",
    text: "Rafiul goes above and beyond. He’s creative, enthusiastic and trustworthy. He’s done a great job with our site. Will be working with him again and again.",
    avatar: memojiAvatar3,
  },
  {
    name: "Vic Devore",
    position: "CEO @ DEVOREDesign",
    text: "Every time I need something fixed with my websites, Rafiul is my “go to” guy. He does great and gets everything done in a timely manner. Great communication. Thank you Rafiul!",
    avatar: memojiAvatar4,
  },
  {
    name: "Ben Crandall",
    position: "Co-Founder @ optimiser",
    text: "Rafiul is a skilled, proactive, and friendly freelancer. Fast and accurate work provided for this task. Explained in terms I can understand. I will rehire Rafiul again.",
    avatar: memojiAvatar5,
  },
];


const Testimonials = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Voices of Appreciation"
          subtitle="Warm Testimonials"
          text="Insightful reflections from clients I have had the privilege to collaborate with"
        />

        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-8">
            {testimonials.map(testimonial => (
              <Card
                key={testimonial.name}
                className="max-w-xs md:max-w-md md:p-8"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt="Image of client"
                      className="max-h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">{testimonial.position}</div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;