import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { FaPencilAlt } from "react-icons/fa";
import "dotenv/config";

// Get topics to display
const getAllTerms = async () => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/terms`, {
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
          {/* Term and Definition */}
          <div className="capitalize">
            <div className="my-2">
              <h2 className="font-semibold text-lg text-gray-200">
                {item.term}
              </h2>
              <p className="text-sm text-gray-200/80 font-extralight">
                {item.definition}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-row justify-between w-full md:w-auto gap-4">
            <RemoveBtn id={item._id} />
            <Link href={`/editTerm/${item._id}`}>
              <FaPencilAlt size={20} className="text-green-400/80" />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TermsList;
