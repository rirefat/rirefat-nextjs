import { PropsWithChildren } from "react";

const HeroOrbit = ({ children, size, rotation }: PropsWithChildren<{ size: number; rotation: number }>) => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div
                className="flex items-start justify-start"
                style={{
                    transform: `rotate(${rotation}deg)`,
                    height: `${size}px`,
                    width: `${size}px`
                }}>
                <div className="inline-flex animate-spin [animation-duration:25s]">{children}</div>
            </div>
        </div>
    );
};

export default HeroOrbit;