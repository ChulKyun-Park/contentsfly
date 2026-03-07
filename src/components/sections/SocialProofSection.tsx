import fs from "fs";
import path from "path";
import Image from "next/image";
import Section from "@/components/ui/Section";

function getImages(dir: string): string[] {
  const fullPath = path.join(process.cwd(), "public", dir);
  try {
    return fs
      .readdirSync(fullPath)
      .filter((f) => /\.(png|jpe?g|svg|webp)$/i.test(f))
      .sort();
  } catch {
    return [];
  }
}

export default function SocialProofSection() {
  const companyDir = "images/socialproof/company";
  const creatorDir = "images/socialproof/creator";
  const companyImages = getImages(companyDir);
  const creatorImages = getImages(creatorDir);

  const companyDoubled = [...companyImages, ...companyImages];
  const creatorDoubled = [...creatorImages, ...creatorImages];

  return (
    <Section className="overflow-hidden">
      <style>{`
        @keyframes sp-marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes sp-marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Impact stats */}
      <div className="mb-14 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
        <div className="text-center">
          <p className="text-3xl font-bold text-primary sm:text-4xl">1,300+</p>
          <p className="mt-1 text-sm text-muted">누적 고객</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-primary sm:text-4xl">100M+</p>
          <p className="mt-1 text-sm text-muted">작업 건수</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-primary sm:text-4xl">88%</p>
          <p className="mt-1 text-sm text-muted">재구매율</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-primary sm:text-4xl">10+</p>
          <p className="mt-1 text-sm text-muted">지원 언어</p>
        </div>
      </div>

      {/* Company logos */}
      <div className="mb-16">
        <p className="mb-8 text-center text-sm font-medium text-muted">
          국내외 선도 기업이 신뢰합니다
        </p>
        <div className="relative">
          <div
            className="flex w-max items-center"
            style={{ animation: "sp-marquee-left 60s linear infinite" }}
          >
            {companyDoubled.map((file, i) => (
              <div key={`company-${i}`} className="mx-[44px] shrink-0">
                <Image
                  src={`/${companyDir}/${file}`}
                  alt={file.replace(/\.[^.]+$/, "").replace(/^\d+_/, "")}
                  width={120}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Creator avatars */}
      <div>
        <p className="mb-8 text-center text-sm font-medium text-muted">
          크리에이터들도 함께합니다
        </p>
        <div className="relative">
          <div
            className="flex w-max items-center"
            style={{ animation: "sp-marquee-right 45s linear infinite" }}
          >
            {creatorDoubled.map((file, i) => (
              <div key={`creator-${i}`} className="mx-[36px] shrink-0">
                <Image
                  src={`/${creatorDir}/${file}`}
                  alt={file.replace(/\.[^.]+$/, "")}
                  width={72}
                  height={72}
                  className="h-[58px] w-[58px] rounded-full object-cover sm:h-[72px] sm:w-[72px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
