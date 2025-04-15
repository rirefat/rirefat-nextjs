import StarIcon from '@/assets/icons/star.svg';

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Responsive",
  "Usable",
  "Reliable"
];

const strengthWords = [
  // 💻 Technical Strengths
  "Proficient",
  "Versatile",
  "Full-Stack",
  "Frontend-focused",
  "Component-driven",
  "Responsive",
  "Performant",
  "Cross-browser",
  "Scalable",
  "API-integrated",
  "Reusable architecture",
  "Optimized",

  // 🧠 Problem-Solving & Intelligence
  "Analytical",
  "Solution-oriented",
  "Detail-driven",
  "Innovative",
  "Logical",
  "Critical thinker",
  "Strategic",
  "Data-driven",

  // 🚀 Work Ethic & Personality
  "Self-motivated",
  "Consistent",
  "Reliable",
  "Focused",
  "Disciplined",
  "Growth-minded",
  "Resourceful",
  "Adaptable",
  "Resilient",

  // 🤝 Collaboration & Communication
  "Communicative",
  "Collaborative",
  "Empathetic",
  "Clear communicator",
  "Team-oriented",
  "Client-focused",
  "Supportive",
  "Solution-focused communicator",

  // 📈 Impact-Oriented
  "Result-driven",
  "Value-focused",
  "User-centric",
  "Impactful",
  "Purposeful",
  "Business-aligned",
  "Conversion-minded",
  "Growth-enabling"
];


const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-blue-400 text-gray-900 overflow-x-clip -rotate-3 -mx-1'>
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {strengthWords.map(word => (
              <div key={word} className='inline-flex gap-4 items-center'>
                <span className='uppercase font-extrabold text-sm'>{word}</span>
                <StarIcon className='size-6 -rotate-12' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TapeSection;