import axios from "axios";
import { apiUrl } from "./parameters";

export const initChat = async (clientId: string, productId: string) => {
  try {
    const response = await axios.get(
      `${apiUrl}XChatBot/InitChat/${clientId}/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const chatCompletion = async (body: {
  chatId: string;
  message: string;
  clientId: string;
  productId: string;
}) => {
  try {
    const response = await axios.post(`${apiUrl}XChatBot/ChatCompletion`, body);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllArticles = async (clientId: string, productId: string) => {
  try {
    const response = await axios.get(
      `${apiUrl}XChatBot/GetAllDocuments/${clientId}/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSuggestions = async (clientId: string, productId: string) => {
  try {
    const response = await axios.get(
      `${apiUrl}XChatBot/GetSuggestions/${clientId}/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
