import Ticket from "@/app/_modals/Ticket";
import { NextResponse } from "next/server";
import { ITicketParams } from "../types";

export async function GET(request: Request, { params }: ITicketParams) {
  console.log("first");
  const { id } = params;

  const foundTicket = await Ticket.findOne({ _id: id });
  console.log("foundTicket:", foundTicket);
  return NextResponse.json({ foundTicket }, { status: 200 });
}

export async function DELETE(request: Request, { params }: ITicketParams) {
  try {
    const { id } = params;

    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: ITicketParams) {
  try {
    const { id } = params;

    const body = await request.json();
    const ticketData = body.formData;
    const updatedTicketDate = await Ticket.findByIdAndUpdate(
      id,
      {
        ...ticketData,
      },
      {
        new: true,
      }
    );
    return NextResponse.json(
      { message: "Ticket updated", updatedTicketDate },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
