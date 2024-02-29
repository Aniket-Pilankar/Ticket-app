import { TicketStatus } from "../types/types";

export const getColor = (status: TicketStatus) => {
  let color;
  switch (status) {
    case TicketStatus.DONE:
      color = "bg-green-200";
      return color;

    case TicketStatus.STARTED:
      color = "bg-yellow-200";
      return color;

    case TicketStatus.NOT_STARTED:
      color = "bg-red-200";
      return color;
    default:
      color = "bg-slate-700";
  }
  return color;
};
