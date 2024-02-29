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
  createdAt: Date;
}

export enum TicketStatus {
  NOT_STARTED = "not started",
  STARTED = "started",
  DONE = "done",
}

export enum Category {
  HARDWARE_PROBLEM = "Hardware Problem",
  SOFTWARE_PROBLEM = "Software Problem",
  APPLICATION_DEVEOPMENT = "Application Deveopment",
  PROJECT = "Project",
}
