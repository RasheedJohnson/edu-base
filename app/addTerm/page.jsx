"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTerm = () => {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if fields filled
    if (!term || !definition || !book || !chapter) {
      alert("All fields are required for submission.");
      return;
    }

    // Create Term
    const term = { term, definition, book, chapter };

    try {
      const res = await fetch("http://localhost:3000/api/terms", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ term, definition, book, chapter }),
      });

      if (res.ok) {
        router.push("/terminology");
      } else {
        throw new Error("Failed to create a Term");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pl-24 flex justify-between items-center">
        <h1 className="font-bold py-10 text-2xl">Add New Term</h1>
      </div>
      <form onSubmit={handleSubmit} className="ml-24 flex flex-col gap-3">
        {/* Input */}
        <input
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          className="border-[1px] border-green-200/30 rounded-md px-4 py-1 w-[290px]"
          type="text"
          placeholder="Term"
        />
        <textarea
          onChange={(e) => setDefinition(e.target.value)}
          value={definition}
          className="border-[1px] border-green-200/30 rounded-md px-4 py-1 w-[290px] h-32"
          type="text"
          placeholder="Definition"
        />
        <input
          onChange={(e) => setBook(e.target.value)}
          value={book}
          className="border-[1px] border-green-200/30 rounded-md px-4 py-1 w-[290px]"
          type="text"
          placeholder="Book"
        />
        <input
          onChange={(e) => setChapter(e.target.value)}
          value={chapter}
          className="border-[1px] border-green-200/30 rounded-md px-4 py-1 w-[290px]"
          type="text"
          placeholder="Chapter"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-700 py-3 px-6 w-[290px] rounded-md"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddTerm;
