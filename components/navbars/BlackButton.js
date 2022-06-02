import Link from "next/link";
const BlackButton = () => {
  return (
    <Link href="#">
      <a>
        <button className="border border-gray-900 bg-gray-900 px-4 py-2 text-white">
          Button
        </button>
      </a>
    </Link>
  );
};

export default BlackButton;
