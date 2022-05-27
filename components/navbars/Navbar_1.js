import Logo from "@/components/navbars/Logo";
import BlackButton from "@/components/navbars/BlackButton";
import TopMenu_1 from "@/components/navbars/TopMenu_1";
const Navbar_1 = () => {
  return (
    <div className="flex items-center justify-between p-6">
      <Logo />
      <div className="flex items-center">
        <span className="mr-6">
          <TopMenu_1 />
        </span>
        <BlackButton />
      </div>
    </div>
  );
};

export default Navbar_1;
