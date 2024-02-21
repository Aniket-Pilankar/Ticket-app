import React from "react";
import DeleteIcon from "./DeleteIcon";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import { ITicket } from "../types/types";

type Props = ITicket;

const TicketCard = ({
  _id,
  description,
  priority,
  progress,
  status,
  title,
}: Props) => {
  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={priority} />
        <div className="ml-auto">
          <DeleteIcon />
        </div>
      </div>
      <h4 className="mb-1">{title}</h4>
      <hr className="h-px  border-0 bg-page mb-2 "></hr>
      <p className="whitespace-pre-wrap">{description}</p>

      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs  my-1">00/00/00</p>
          <ProgressDisplay progress={progress} />
        </div>
        <div className="ml-auto  flex items-end">
          <StatusDisplay status={status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
