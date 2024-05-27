import { fetchAllDailyIntakes } from "../utils/requests";
import { AuthContext } from "../context/context";
import { useContext, useEffect } from "react";

export function useDailyIntake() {
    const {dailyintake, setDailyIntake} = useContext(AuthContext);

    useEffect(() => {

    const ddata = async function () {
      try {
        const data = await fetchAllDailyIntakes();
        console.log(data)
        setDailyIntake(data);
      } catch (err) {
        console.log(err);
      }
    }
        ddata();
    }, [setDailyIntake]);

    return {dailyintake, setDailyIntake};
}