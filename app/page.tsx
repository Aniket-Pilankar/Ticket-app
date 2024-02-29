import TicketCard from "./components/TicketCard";
import { ITickets } from "./types/types";

const getTickets = async () => {
  try {
    const res = await fetch("/api/Tickets", {
      // const res = await fetch("/api/Tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    // throw new Error("Errorrrr");
    const data: ITickets = await res.json();
    const tickets = data.tickets;
    return tickets;
  } catch (error) {
    console.log("error: getTickets", error);
  }
};

export default async function Dashboard() {
  const tickets = await getTickets();
  console.log("tickets:", tickets);

  if (!tickets) {
    return <p>No tickets.</p>;
  }

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories.map((uniqueCategory, _index) => (
            <div key={_index} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((ticket) => (
                    <TicketCard key={ticket._id} ticket={ticket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
