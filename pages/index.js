const Index = () => {
  return (
    <div className="space-y-3">
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
      <div>
        <input
          className="border border-gray-900 text-sm py-2.5 pl-3"
          placeholder="Enter your email "
        />
        <button className="border bg-gray-900 ml-3 text-white border-gray-900 px-6 text-sm py-2.5">
          Button
        </button>
        <p>
          By clicking Sign Up you&apos;re confirming that you agree with our
          Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default Index;
