import { ITickets } from "../types/types";

export const getTickets = async () => {
  const res = await fetch("http://localhost:3000/api/Tickets", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topics");
  }

  // throw new Error("Errorrrr");
  const data: ITickets = await res.json();
  const tickets = data.tickets;
  return tickets;
};

export function formatTimestamp(timestamp: Date) {
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
