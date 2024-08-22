"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditTermForm = ({ id, term, definition, book, chapter }) => {
  console.log(id, term, definition, book, chapter);
  const [newTerm, setNewTerm] = useState(term);
  const [newDefinition, setNewDefinition] = useState(definition);
  const [newBook, setNewBook] = useState(book);
  const [newChapter, setNewChapter] = useState(chapter);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/terms/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTerm, newDefinition, newBook, newChapter }),
      });

      if (!res.ok) {
        throw new Error("Failed to update term");
      }

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pl-24 flex justify-between items-center">
        <h1 className="font-bold py-10 text-2xl">Edit Term</h1>
      </div>
      <form onSubmit={handleSubmit} className="ml-24 flex flex-col gap-3">
        {/* Input */}
        <input
          onChange={(e) => setNewTerm(e.target.value)}
          value={newTerm}
          className="border-[1px] border-green-200/30 rounded-md px-4 py-1 w-[350px]"
          type="text"
          placeholder="Term"
        />
        <textarea
          onChange={(e) => setNewDefinition(e.target.value)}
          value={newDefinition}
          className="border-[1px] border-green-200/30 rounded-md px-4 py-1 w-[350px] h-52"
          type="text"
          placeholder="Definition"
        />
        <textarea
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
          className="border-[1px] border-green-200/30 rounded-md px-4 py-1 w-[350px] h-20"
          type="text"
          placeholder="Book"
        />
        <textarea
          onChange={(e) => setNewChapter(e.target.value)}
          value={newChapter}
          className="border-[1px] border-green-200/30 rounded-md px-4 py-1 w-[350px] h-20"
          type="text"
          placeholder="Chapter"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-700 py-3 px-6 w-[350px] rounded-md"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default EditTermForm;
