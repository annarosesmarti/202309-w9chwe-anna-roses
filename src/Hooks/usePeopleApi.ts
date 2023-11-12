import axios from "axios";
import { useCallback } from "react";
import { PersonStructure } from "../store/types";

const usePeopleApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getPeople = useCallback(async () => {
    const { data: people } = await axios.get<PersonStructure[]>("/characters");

    return people;
  }, []);

  return { getPeople };
};

export default usePeopleApi;
