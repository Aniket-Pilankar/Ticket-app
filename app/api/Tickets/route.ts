import Ticket from "@/app/_models/Tickets";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tickets = await Ticket.find();

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const ticketData = body.formData;

    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
