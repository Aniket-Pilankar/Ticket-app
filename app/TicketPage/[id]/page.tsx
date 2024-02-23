import TicketForm from "@/app/components/TicketForm";
import React, { Suspense } from "react";
import { getTicketById } from "./helper";

type Props = {
  params: {
    id: string;
  };
};

const TicketFormComp = async ({ params: { id } }: Props) => {
  const isEditing = id === "new" ? false : true;
  const ticket = await getTicketById(id);

  return (
    <>
      <h1 className="text-center">
        {isEditing ? "Update Ticket" : "Create Ticket"}
      </h1>
      <TicketForm isEditing={isEditing} ticket={ticket} />;
    </>
  );
};

export default TicketFormComp;
