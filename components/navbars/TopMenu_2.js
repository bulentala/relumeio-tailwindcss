import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
const TopMenu_2 = () => {
  return (
    <div className="flex items-center space-x-6">
      <Link href="#">
        <a>Link One</a>
      </Link>
      <Link href="#">
        <a>Link Two</a>
      </Link>
      <Link href="#">
        <a className="flex items-center">
          <span>Link Three</span>
          <ChevronDownIcon className="ml-1 h-5 w-5" />
        </a>
      </Link>
    </div>
  );
};

export default TopMenu_2;
