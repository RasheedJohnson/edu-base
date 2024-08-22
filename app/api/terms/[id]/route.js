import connectToMongoDB from "@/libs/connectToMongoDB";
import Term from "@/models/term.model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Update Term Id
export async function PUT(request, { params }) {
  try {
    const { id } = params;

    // Connect to DB
    await connectToMongoDB();

    // Check if id is valid mongodb id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Id is invalid" }, { status: 400 });
    }

    // Grab title and description
    const {
      newTerm: term,
      newDefinition: definition,
      newBook: book,
      newChapter: chapter,
    } = await request.json();

    const termToUpdate = await Term.findByIdAndUpdate(id, {
      term,
      definition,
      book,
      chapter,
    });
    // Check if Term exists to be updated
    if (!termToUpdate) {
      return NextResponse.json(
        { message: "Term does not exist" },
        { status: 404 }
      );
    }

    // Return updated Term
    const updatedTerm = await Term.findById(id);
    return NextResponse.json({
      message: "Term updated",
      currentVersion: updatedTerm,
    });
  } catch (error) {
    return NextResponse.json(
      { message: `Internal Server Error - ${error.message}` },
      { status: 500 }
    );
  }
}

// Get Term by Id
export async function GET(request, { params }) {
  try {
    const { id } = params;

    // Connect to Mongodb
    await connectToMongoDB();

    // Check if id is valid mongodb id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Id invalid" }, { status: 400 });
    }

    // Check if term exists
    const foundTerm = await Term.findById(id);
    if (!foundTerm) {
      return NextResponse.json({ message: "No such term exists" });
    }

    // Return success response
    return NextResponse.json(
      { message: "Term found", foundTerm },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Internal Server Error - ${error.message}` },
      { status: 500 }
    );
  }
}
