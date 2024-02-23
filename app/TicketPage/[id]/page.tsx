import TicketForm from "@/app/components/TicketForm";
import React from "react";
import { getTicketById } from "./helper";

type Props = {
  params: {
    id: string;
  };
};

const TicketFormComp = async ({ params: { id } }: Props) => {
  const isEditing = id === "new" ? false : true;
  const ticket = await getTicketById(id);
  // console.log("ticket:", ticket);

  return <TicketForm isEditing={isEditing} ticket={ticket} />;
};

export default TicketFormComp;
