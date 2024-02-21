import { ITickets } from "../types/types";

export const getTickets = async () => {
  const res = await fetch("http://localhost:3000/api/Tickets", {
    cache: "no-store",
  });

  // throw new Error("Errorrrr");
  const data: ITickets = await res.json();
  console.log("data:", data);
  const tickets = data.tickets;
  return tickets;
};
