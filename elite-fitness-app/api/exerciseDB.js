import axios from "axios";
import { rapidApiKey } from "../constants";

const baseUrl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params) => {
  try {
    const option = {
      method: "GET",
      url,
      params,
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(option);
    return response.data;
  } catch (error) {
    console.log("error:", error.message);
  }
};

export const fetchExerciseByBodyPart = async (bodyPart) => {
  try {
    const res = await apiCall(`${baseUrl}/exercises/bodyPart/${bodyPart}`);
    return res;
  } catch (error) {
    console.log("error:", error.message);
  }
};
