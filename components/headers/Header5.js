import Image from "next/image";
import Title from "@/components/headers/Title";
import Description from "@/components/headers/Description";
import Buttons from "@/components/headers/Buttons";
const Header5 = () => {
  return (
    <div className="flex h-screen flex-col items-center lg:flex-row">
      <div className="space-y-6 p-3 lg:w-1/2 lg:p-16">
        <Title />
        <Description />
        <Buttons />
      </div>
      <div className="relative aspect-1  lg:aspect-none lg:w-1/2">
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

export default Header5;
