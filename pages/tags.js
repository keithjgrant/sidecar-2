import { useContext } from "react";
import Context from "../src/AppContext";
import TagsList from "../src/components/TagsList";
import DrinkList from "../src/components/DrinkList";

export default () => {
  const store = useContext(Context);
  const tag = store.getCurrentTag();

  if (!tag) {
    return (
      <div>
        <h1>Tags</h1>
        <TagsList tags={store.getTags()} />
      </div>
    );
  }
  const drinks = store.drinks.filter(d => d.tags.includes(tag));
  return (
    <div>
      <h1>Drinks tagged {tag}</h1>
      <DrinkList drinks={drinks} />
    </div>
  );
};
