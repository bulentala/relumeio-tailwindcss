import Logo from "@/components/navbars/Logo";
import BlackButton from "@/components/navbars/BlackButton";
import WhiteButton from "@/components/navbars/WhiteButton";
import TopMenu_1 from "@/components/navbars/TopMenu_1";
import { CubeTransparentIcon } from "@heroicons/react/solid";
const Navbar_5 = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-900 p-6">
        <div className="flex items-center">
          <Logo />
          <div className="ml-6">
            <TopMenu_1 />
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-6">
            <WhiteButton />
          </div>
          <BlackButton />
        </div>
      </div>
      <div className="flex">
        <div className="mr-4 flex flex-col space-y-6">
          <div>Page group one</div>
          <div>
            <div className="flex items-center">
              <CubeTransparentIcon className="h-4 w-4" />
              <div className="ml-1">Page One</div>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur elit.</div>
          </div>
          <div>
            <div className="flex items-center">
              <CubeTransparentIcon className="h-4 w-4" />
              <div className="ml-1">Page Two</div>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur elit.</div>
          </div>
          <div>
            <div className="flex items-center">
              <CubeTransparentIcon className="h-4 w-4" />
              <div className="ml-1">Page Three</div>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur elit.</div>
          </div>
          <div>
            <div className="flex items-center">
              <CubeTransparentIcon className="h-4 w-4" />
              <div className="ml-1">Page Four</div>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur elit.</div>
          </div>
        </div>{" "}
        <div className="flex flex-col space-y-6">
          <div>Page group one</div>
          <div>
            <div className="flex items-center">
              <CubeTransparentIcon className="h-4 w-4" />
              <div className="ml-1">Page One</div>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur elit.</div>
          </div>
          <div>
            <div className="flex items-center">
              <CubeTransparentIcon className="h-4 w-4" />
              <div className="ml-1">Page Two</div>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur elit.</div>
          </div>
          <div>
            <div className="flex items-center">
              <CubeTransparentIcon className="h-4 w-4" />
              <div className="ml-1">Page Three</div>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur elit.</div>
          </div>
          <div>
            <div className="flex items-center">
              <CubeTransparentIcon className="h-4 w-4" />
              <div className="ml-1">Page Four</div>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur elit.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar_5;
