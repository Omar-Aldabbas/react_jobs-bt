import clsx from "clsx";
import { TWmerge } from "tailwind-merge";

export const cn = (...inputs) => {
  TWmerge(clsx(...inputs));
};
