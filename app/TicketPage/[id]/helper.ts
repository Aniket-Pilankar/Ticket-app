import { notFound } from "next/navigation";

export const getTicketById = async (id: string) => {
  if (id === "new") return;
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const { foundTicket } = await res.json();
  return foundTicket;
};
