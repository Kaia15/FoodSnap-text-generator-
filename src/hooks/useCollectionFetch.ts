import { useState, useEffect, useContext } from "react";
import { fetchAllDishes, getDishDescription } from "../utils/requests";
import { dishT } from "../utils/types";
import { AuthContext } from "../context/context";

export function useCollectionFetch() {
  // const [collection, setCollection] = useState<dishT[] | null[]>([]);
  const {collection,setCollection} = useContext(AuthContext);

  useEffect(() => {

    const tdata = async function () {
      try {
        const data = await fetchAllDishes();
        setCollection(data);
      } catch (err) {
        console.log(err);
      }
    }

    tdata();

  }, [])

  return {collection,setCollection};
}
