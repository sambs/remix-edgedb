import { $infer, e } from "~/database";

export const loaderQuery = e.select(e.Movie, () => ({
  id: true,
  title: true,
}));

export type LoaderData = $infer<typeof loaderQuery>;
