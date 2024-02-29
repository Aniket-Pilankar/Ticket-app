import React from "react";
import DeleteIcon from "./DeleteIcon";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import { ITicket } from "../types/types";
// import { formatTimestamp } from "../utils/helper";
import Link from "next/link";

type Props = {
  ticket: ITicket;
};

const TicketCard = ({ ticket }: Props) => {
  function formatTimestamp(timestamp: Date) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(ticket.createdAt);

  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteIcon id={ticket._id} />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`}>
        <h4 className="mb-1">{ticket.title}</h4>
        <hr className="h-px  border-0 bg-page mb-2 "></hr>
        <p className="whitespace-pre-wrap">{ticket.description}</p>

        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">{createdDateTime}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto  flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
