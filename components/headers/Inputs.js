const Inputs = () => {
  return (
    <>
      <div className="flex">
        <input
          className="w-full border border-gray-900 py-2.5 pl-3 text-sm"
          type="text"
          placeholder="Enter your email"
        />
        <button className="ml-3 w-max whitespace-nowrap border border-gray-900 bg-gray-900 px-5 py-2.5 text-sm text-white">
          Sign Up
        </button>
      </div>
      <p className="text-sm">
        By clicking Sign Up you&apos;re confirming that you agree with our Terms
        and Conditions.
      </p>
    </>
  );
};

export default Inputs;
