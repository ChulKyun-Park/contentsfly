import Image from "next/image";

interface LogoSliderProps {
  logos: string[];
  basePath: string;
  direction?: "left" | "right";
  speed?: string;
}

export default function LogoSlider({ logos, basePath, direction = "left", speed }: LogoSliderProps) {
  const doubled = [...logos, ...logos];
  const animStyle = direction === "left"
    ? { animation: `sp-marquee-left ${speed || "60s"} linear infinite` }
    : { animation: `sp-marquee-right ${speed || "45s"} linear infinite` };

  return (
    <>
      <style>{`
        @keyframes sp-marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes sp-marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>
      <div className="overflow-hidden">
        <div className="flex w-max will-change-transform" style={animStyle}>
          {doubled.map((logo, i) => {
            const name = logo.replace(/\.[^.]+$/, "").replace(/^\d+_/, "");
            return (
              <div key={`${logo}-${i}`} className="flex-none flex items-center justify-center h-8 mx-[44px]">
                <Image src={`${basePath}/${logo}`} alt={name} width={120} height={48} className="h-7 w-auto object-contain" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
