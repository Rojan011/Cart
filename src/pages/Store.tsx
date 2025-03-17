import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  return (
    <>
      <div className="text-2xl mb-6">Available Items</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
        {storeItems.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
}
