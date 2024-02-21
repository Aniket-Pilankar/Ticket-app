import { Category, TicketStatus } from "../TicketPage/types";

export type ITickets = {
  tickets: ITicket[];
};

export interface ITicket {
  _id: string;
  title: string;
  description: string;
  priority: number;
  progress: number;
  status: TicketStatus;
  category: Category;
}
