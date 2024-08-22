"use client";

import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const removeTerm = async () => {
    const confirmed = confirm("Are you sure you want to delete this term?");

    if (confirmed) {
      const res = await fetch(`/api/terms/?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <>
      <button onClick={removeTerm} className="text-red-600">
        <FaTrashAlt size={20} />
      </button>
    </>
  );
};

export default RemoveBtn;
