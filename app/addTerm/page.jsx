"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTerm = () => {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  // Temporary fill in book
  const [book, setBook] = useState(
    "Developmental Psychology Childhood and Adolescence"
  );
  const [chapter, setChapter] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if fields filled
    if (!term || !definition || !book || !chapter) {
      alert("All fields are required for submission.");
      return;
    }

    try {
      const res = await fetch("/api/terms", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ term, definition, book, chapter }),
      });

      if (res.ok) {
        router.push("/terms");
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
          className="border-[1px] border-green-200/30 rounded-md px-4 py-1 w-[350px]"
          type="text"
          placeholder="Term"
        />
        <textarea
          onChange={(e) => setDefinition(e.target.value)}
          value={definition}
          className="border-[1px] border-green-200/30 rounded-md px-4 py-1 w-[350px] h-52"
          type="text"
          placeholder="Definition"
        />
        <textarea
          onChange={(e) => setBook(e.target.value)}
          value={book}
          className="border-[1px] border-green-200/30 rounded-md px-4 py-1 w-[350px] h-20"
          type="text"
          placeholder="Book"
        />
        <textarea
          onChange={(e) => setChapter(e.target.value)}
          value={chapter}
          className="border-[1px] border-green-200/30 rounded-md px-4 py-1 w-[350px] h-20"
          type="text"
          placeholder="Chapter"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-700 py-3 px-6 w-[350px] rounded-md"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddTerm;
