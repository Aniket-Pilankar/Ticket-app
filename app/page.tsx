import TicketCard from "./components/TicketCard";
import { getTickets } from "./utils/helper";

export default async function Dashboard() {
  const tickets = await getTickets();
  console.log("tickets:", tickets);

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  console.log("uniqueCategories:", uniqueCategories);

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
                    <TicketCard key={ticket._id} {...ticket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
