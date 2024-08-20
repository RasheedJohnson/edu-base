import TermsList from "@/components/TermsList";
import Link from "next/link";

const Terms = () => {
  return (
    <>
      <div className="pl-24 pr-6 flex flex-col ">
        <div className="flex justify-between py-3 items-center">
          <h2 className="text-xl flex justify-center items-center">
            Terminology
          </h2>
          <Link className="btn btn-primary" href={"/addTerm"}>
            Add Term
          </Link>
        </div>
        <TermsList />
      </div>
    </>
  );
};

export default Terms;
