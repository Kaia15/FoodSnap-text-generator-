import { useEffect, useContext } from "react";
import { fetchAllDishes, fetchLastWeekDishes, fetchRandomDishes } from "../utils/requests";
import { AuthContext } from "../context/context";

export function useCollectionFetch() {
  const {collection,setCollection,randomDishes,setRandomDishes} = useContext(AuthContext);

  useEffect(() => {

    const tdata = async function () {
      try {
        const data = await fetchAllDishes();
        console.log(data)
        setCollection(data);
      } catch (err) {
        console.log(err);
      }
    }

    const randomData = async function () {
      try {
        const data = await fetchRandomDishes();
        setRandomDishes(data);
      } catch (err) {
        console.log(err);
      }
    }

    tdata();
    randomData();

  }, [setCollection,setRandomDishes])

  return {collection,setCollection,randomDishes,setRandomDishes};
}
