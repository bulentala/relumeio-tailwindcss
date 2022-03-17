const Index = () => {
  return (
    <div className="border border-red-500 flex gap-12 py-16 px-12 items-center">
      <div className="border border-red-500 space-y-3 w-1/2">
        <h1 className="text-5xl font-semibold">
          Medium length hero headline goes here
        </h1>
        <p className=" leading-relaxed ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div>
          <button className="border bg-gray-900 text-white border-gray-900 px-6 text-sm py-2.5">
            Button
          </button>
          <button className="border ml-3 border-gray-900 px-6 text-sm py-2.5">
            Button
          </button>
        </div>
        <div className="flex">
          <input
            className="border w-full border-gray-900 text-sm py-2.5 pl-3"
            placeholder="Enter your email "
          />
          <button className="border bg-gray-900 ml-3 text-white border-gray-900 px-6 text-sm py-2.5">
            Button
          </button>
        </div>
        <p className="text-sm">
          By clicking Sign Up you&apos;re confirming that you agree with our{" "}
          <span className="font-semibold">Terms and Conditions.</span>
        </p>
      </div>
      <div className="border border-red-500 w-1/2 aspect-1">picture</div>
    </div>
  );
};

export default Index;
