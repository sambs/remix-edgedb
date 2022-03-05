import { useLoaderData } from "remix";
import { $infer, e, client } from "~/database";

const loaderQuery = e.select(e.Movie, () => ({
  id: true,
  title: true,
}));

type LoaderData = $infer<typeof loaderQuery>;

export async function loader() {
  return loaderQuery.run(client);
}

export default function Index() {
  const movies = useLoaderData<LoaderData>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix + EdgeDB</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
