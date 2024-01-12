import TicketForm from "@/app/components/TicketForm";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const TicketFormComp = ({ params: { id } }: Props) => {
  console.log("id:", id);
  return <TicketForm />;
};

export default TicketFormComp;
