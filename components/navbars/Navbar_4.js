import Logo from "@/components/navbars/Logo";
import BlackButton from "@/components/navbars/BlackButton";
import { MenuIcon } from "@heroicons/react/solid";
const Navbar_4 = () => {
  return (
    <>
      <div className="flex items-center justify-between p-6">
        <Logo />
        <div className="flex items-center">
          <BlackButton />
          <MenuIcon className="ml-6 h-5 w-5" />
        </div>
      </div>
    </>
  );
};

export default Navbar_4;
