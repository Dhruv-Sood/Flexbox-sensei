function Option({ value, checkAns }) {
  return (
    <div
      className={`bg-white text-gray-800 w-[400px] p-3 text-center rounded-lg text-xl font-semibold shadow-md hover:bg-black hover:text-white hover:opacity-80 hover:cursor-pointer transform transition-transform duration-200 $`}
      onClick={() => checkAns(value)}
    >
      {value}
    </div>
  );
}
export default Option;
