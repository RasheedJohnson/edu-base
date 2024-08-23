import EditTermForm from "@/components/EditTermForm";

const getTermById = async (id) => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/terms/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch term");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditTerm = async ({ params }) => {
  const { id } = params;
  const { foundTerm } = await getTermById(id);
  const { term, definition, book, chapter } = foundTerm;

  return (
    <div>
      <EditTermForm
        id={id}
        term={term}
        definition={definition}
        book={book}
        chapter={chapter}
      />
    </div>
  );
};

export default EditTerm;
