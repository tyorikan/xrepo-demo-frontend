import { useEffect, useState } from "react";

type CatalogItemView = {
  id: string;
  displayPrice: string;
};

function useCatalogItem(itemId: string) {
  const [data, setData] = useState<CatalogItemView | null>(null);
  useEffect(() => {
    fetch(`/api/catalog/items/${itemId}`)
      .then((res) => res.json())
      .then(setData);
  }, [itemId]);
  return { data };
}

// Renders displayPrice directly in the product buy box.
export function ProductPage({ itemId }: { itemId: string }) {
  const { data } = useCatalogItem(itemId);
  if (!data) {
    return <p>Loading</p>;
  }
  return (
    <div className="price" data-item={data.id}>
      JPY {data.displayPrice}
    </div>
  );
}
