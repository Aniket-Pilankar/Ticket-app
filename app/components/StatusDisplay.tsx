import React from "react";
import { TicketStatus } from "../TicketPage/types";
import { getColor } from "../TicketPage/helper";

type Props = {
  status: TicketStatus;
};

const StatusDisplay = ({ status }: Props) => {
  const color = getColor(status);
  return (
    <span
      className={`inline-block  rounded-full px-2 py-1 text-xs font-semibold ${color} text-gray-700`}
    >
      {status.toUpperCase()}
    </span>
  );
};

export default StatusDisplay;
