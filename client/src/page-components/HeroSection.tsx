import Link from "next/link";
import { ArrowRight } from "lucide-react";

const heroFeatures = [
  {
    title: "Upload Your Book",
    iconClassName: "from-[#ff8a1d] to-[#ffb341]",
  },
  {
    title: "AI Magic",
    iconClassName: "from-[#ffc15b] to-[#ff9f35]",
  },
  {
    title: "Start Conversing",
    iconClassName: "from-[#ff7a4f] to-[#ec4f37]",
  },
];

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center pt-(--navbar-height)">
      <div className="max-w-full text-center">
        <div className="font-serif text-4xl font-bold text-[#07142d] sm:text-5xl lg:text-[58px] flex justify-center items-center">
          <p>
            Talk to your books.
            <span className="mt-1 block text-[#f25a09]">
              Learn like never before.
            </span>
          </p>
        </div>
        <p className="mt-7 max-w-full text-base leading-7 text-[#303a4a] sm:text-lg">
          AI-powered voice conversations that turn your books into interactive
          learning experiences.
        </p>
      </div>

      <div className="flex gap-7 w-full sm:flex-col lg:flex-row lg:justify-center lg:items-center mt-3">
        {heroFeatures.map((feature, idx) => {
          return (
            <div className="flex items-center justify-start gap-3">
              <div className="w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-400 flex items-center justify-center font-medium text-lg">
                {idx + 1}
              </div>
              <div
                key={feature.title}
                className={`w-auto p-2 max-h-10 flex size-14 items-center justify-center rounded-sm bg-linear-to-br  shadow-[0_12px_24px_rgba(238,100,22,0.2)] ${feature.iconClassName}`}
              >
                <span className="text-[#141821] text-lg font-semibold">
                  {feature.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8  flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
        <Link
          href="/books/new"
          className="inline-flex h-10 min-w-44 items-center justify-center gap-3 rounded-lg bg-[#07142d] px-7 text-base font-semibold text-white shadow-[0_14px_30px_rgba(7,20,45,0.18)] transition-colors hover:bg-[#15233f]"
        >
          Get Started
          <ArrowRight className="size-5" strokeWidth={1.8} />
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
