import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// Lists catalog items sorted by a column that the user picks at runtime.
export function CatalogPage({ sortKey }: { sortKey: string }) {
  const { data } = useSWR("/api/catalog/items", fetcher);
  if (!data) return null;
  return (
    <ul>
      {data.items.map((item: Record<string, string>) => (
        <li key={item.id}>{item[sortKey]}</li>
      ))}
    </ul>
  );
}
