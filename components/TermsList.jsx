import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { FaPencilAlt } from "react-icons/fa";

const TermsList = () => {
  return (
    <>
      <div className="flex justify-between border-[1px] border-gray-500 rounded-md my-2 p-4 gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Term</h2>
          <div>Definition</div>
        </div>

        <div className="flex gap-4">
          <RemoveBtn />
          <Link href={"/editTerm/123"}>
            <FaPencilAlt size={20} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TermsList;
