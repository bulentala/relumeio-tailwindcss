import Logo from "@/components/navbars/Logo";
import BlackButton from "@/components/navbars/BlackButton";
import TopMenu_1 from "@/components/navbars/TopMenu_1";
const Navbar_2 = () => {
  return (
    <div className="flex items-center justify-between p-6">
      <TopMenu_1 />
      <Logo />
      <BlackButton />
    </div>
  );
};

export default Navbar_2;
