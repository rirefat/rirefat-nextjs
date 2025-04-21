import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from '@/assets/icons/star.svg';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import ReactIcon from '@/assets/icons/react.svg';
import NextjsIcon from '@/assets/icons/next-js.svg';
import MongoDBIcon from '@/assets/icons/mongodb.svg';
import NodejsIcon from '@/assets/icons/nodejs.svg';
import ExpressIcon from '@/assets/icons/express.svg';
import WordPressIcon from '@/assets/icons/wordpress.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import TechIcon from "@/components/TechIcon";



const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon
  },
  {
    title: "React JS",
    iconType: ReactIcon
  },
  {
    title: "Next JS",
    iconType: NextjsIcon
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon
  },
  {
    title: "Node",
    iconType: NodejsIcon
  },
  {
    title: "Express JS",
    iconType: ExpressIcon
  },
  {
    title: "WordPress",
    iconType: WordPressIcon
  },
  {
    title: "Chrome",
    iconType: ChromeIcon
  },
  {
    title: "GitHub",
    iconType: GithubIcon
  },
]

const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        title="A Glimpse Into My World"
        subtitle="About Me"
        text="Learn more about who I am, what I do, and what inspires me"
      />

      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>Current Read</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>

          <Image src={bookImage} alt="Book Cover" />
        </Card>

        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>Explore the technologies and tools I use to craft exceptional digital experiences.</p>
          </div>

          <div>
            {toolboxItems.map(item => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;