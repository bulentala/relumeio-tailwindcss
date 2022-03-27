const BreakPoints = () => {
  return (
    <div className="flex justify-center text-xl font-bold sm:bg-red-500 md:bg-green-500 lg:bg-blue-500 xl:bg-yellow-500 2xl:bg-fuchsia-500">
      <div className=" hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        SMALL
      </div>
      <div className=" hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
        MEDIUM
      </div>
      <div className=" hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
        LARGE
      </div>
      <div className=" hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
        X-LARGE
      </div>
      <div className=" sm:hiddden hidden md:hidden lg:hidden xl:hidden 2xl:block ">
        2X-LARGE
      </div>
    </div>
  );
};

export default BreakPoints;
