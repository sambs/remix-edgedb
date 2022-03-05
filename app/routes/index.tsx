import { useLoaderData } from "remix";
import { client } from "~/database";
import { LoaderData, loaderQuery } from "~/queries";

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
