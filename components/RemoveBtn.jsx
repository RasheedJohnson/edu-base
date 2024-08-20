import { FaTrashAlt } from "react-icons/fa";

const RemoveBtn = () => {
  return (
    <>
      <button className="text-red-600">
        <FaTrashAlt size={20} />
      </button>
    </>
  );
};

export default RemoveBtn;
