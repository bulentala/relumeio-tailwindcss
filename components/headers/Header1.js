import Image from "next/image";
import Title from "@/components/headers/Title";
import Description from "@/components/headers/Description";
import Buttons from "@/components/headers/Buttons";
const Header1 = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-3 lg:flex-row lg:gap-12 lg:px-12 lg:py-16">
      <div className="space-y-3 lg:w-1/2 lg:space-y-6">
        <Title />
        <Description />
        <Buttons />
      </div>
      <div className="relative aspect-1 w-full lg:w-1/2">
        <Image
          className="absolute object-cover"
          alt="hero"
          src="/image.svg"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Header1;
