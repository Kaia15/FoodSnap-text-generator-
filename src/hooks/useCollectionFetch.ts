import { useEffect, useContext } from "react";
import { fetchLastWeekDishes } from "../utils/requests";
import { AuthContext } from "../context/context";

export function useCollectionFetch() {
  const {collection,setCollection} = useContext(AuthContext);

  useEffect(() => {

    const tdata = async function () {
      try {
        const data = await fetchLastWeekDishes();
        setCollection(data);
      } catch (err) {
        console.log(err);
      }
    }

    tdata();

  }, [setCollection])

  return {collection,setCollection};
}
