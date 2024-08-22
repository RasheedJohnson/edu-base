import TermsList from "@/components/TermsList";
import Link from "next/link";

const Terms = () => {
  return (
    <>
      <div className="pl-24 pr-6 flex flex-col ">
        <div className="flex justify-between py-8 items-center">
          <h2 className="text-xl flex justify-center items-center">
            Terminology
          </h2>
          <Link
            className="border-green-500 border-[1px] rounded-md px-6 py-2 hover:border-green-300 hover:bg-green-400/50 hover:text-gray-950 transition-all ease-in-out duration-300 button-shadow-main hover:button-shadow-main-hover"
            href={"/addTerm"}
          >
            Add Term
          </Link>
        </div>
        <TermsList />
      </div>
    </>
  );
};

export default Terms;
