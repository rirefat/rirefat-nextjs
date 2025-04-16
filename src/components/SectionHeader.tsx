const SectionHeader = ({ title, subtitle, text }: { title: string, subtitle: string, text: string }) => {
    return (
        <>
            <p className="uppercase text-center font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-blue-400 text-transparent bg-clip-text">{subtitle}</p>
            <h2 className="font-serif text-center mt-6 text-3xl md:text-5xl">{title}</h2>
            <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">{text}</p>
        </>
    );
};

export default SectionHeader;