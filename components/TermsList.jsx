import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { FaPencilAlt } from "react-icons/fa";

// Get topics to display
const getAllTerms = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/terms", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch terms");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading terms");
  }
};

const TermsList = async () => {
  const { terms } = await getAllTerms();

  return (
    <ul>
      {terms.map((item, index) => (
        <li
          key={index}
          className="flex flex-col md:flex-row justify-between border-[1px] border-gray-500/50 rounded-md my-2 p-4 gap-5 items-start"
        >
          <div className="capitalize">
            <div className="my-2">
              <h2 className="font-bold text-lg text-gray-200">{item.term}</h2>
              <p className="text-sm text-gray-200/80 font-light">
                {item.definition}
              </p>
            </div>
            <div className="text-xs text-gray-200/50 font-light">
              <p>{item.book}</p>
              <p>{item.chapter}</p>
            </div>
          </div>

          <div className="flex flex-row justify-between w-full md:w-auto gap-4">
            <RemoveBtn />
            <Link href={"/editTerm/123"}>
              <FaPencilAlt size={20} />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TermsList;
