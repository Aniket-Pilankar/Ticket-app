import { TicketStatus } from "../types/types";

enum Categories {
  HARDWARE_PROBLEM = "Hardware Problem",
  SOFTWARE_PROBLEM = "Software Problem",
  APPLICATION_DEVEOPMENT = "Application Development",
  PROJECT = "Project",
}

export const categoriesOptions = [
  {
    value: Categories.HARDWARE_PROBLEM,
    label: Categories.HARDWARE_PROBLEM,
  },
  {
    value: Categories.SOFTWARE_PROBLEM,
    label: Categories.SOFTWARE_PROBLEM,
  },
  {
    value: Categories.APPLICATION_DEVEOPMENT,
    label: Categories.APPLICATION_DEVEOPMENT,
  },
  {
    value: Categories.PROJECT,
    label: Categories.PROJECT,
  },
];

export const ticketingStatusOptions = [
  {
    value: TicketStatus.NOT_STARTED,
    label: TicketStatus.NOT_STARTED,
  },
  {
    value: TicketStatus.STARTED,
    label: TicketStatus.STARTED,
  },
  {
    value: TicketStatus.DONE,
    label: TicketStatus.DONE,
  },
];
