import { ITicket } from "@/app/types/types";

export const getTicketById = async (id: string) => {
  if (id === "new") return;
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });
    const { foundTicket } = await res.json();
    // console.log("response:", response);
    return foundTicket;
  } catch (error) {
    console.error("error:", error);
  }
};
