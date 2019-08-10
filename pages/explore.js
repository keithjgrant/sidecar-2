import { useContext } from "react";
import Context from "../src/AppContext";
import TagsList from "../src/components/TagsList";

export default () => {
  const store = useContext(Context);
  // TODO filter by active tags

  return <TagsList tags={store.getTags()} />;
};
