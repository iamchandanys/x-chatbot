import axios from "axios";
import { apiUrl } from "./parameters";

export const initChat = async () => {
  try {
    const response = await axios.get(`${apiUrl}XChatBot/InitChat`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const chatCompletion = async (body: {
  chatId?: string;
  message?: string;
}) => {
  try {
    const response = await axios.post(`${apiUrl}XChatBot/ChatCompletion`, body);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllArticles = async () => {
  try {
    const response = await axios.get(`${apiUrl}XChatBot/GetAllArticles`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
