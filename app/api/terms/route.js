import connectToMongoDB from "@/libs/connectToMongoDB";
import Term from "@/models/term.model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Create Term
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { term, definition } = reqBody;

    await connectToMongoDB();

    // Check if term exists
    const currentTerm = await Term.findOne({ term });
    if (currentTerm) {
      return NextResponse.json(
        { error: "Term already exists" },
        { status: 400 }
      );
    }

    // Create new term
    await Term.create({ term, definition });

    // Return status
    return NextResponse.json(
      { message: "Term created successfully", success: true },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get all terms
export async function GET(request) {
  try {
    // Connect to DB
    await connectToMongoDB();

    // Find and return all Terms
    const terms = await Term.find();
    return NextResponse.json({ terms });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Delete term by id
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectToMongoDB();

    // Check if id is valid mongodb id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "No such term" });
    }
    const term = await Term.findByIdAndDelete(id);

    // Check if term exists
    if (!term) {
      return res.status(404).json({ error: "No such term exists" });
    }

    // Return notification that term was deleted
    return NextResponse.json(
      { message: `term \#${id} deleted` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Internal Server Error - error: ${error}` },
      { status: 500 }
    );
  }
}
