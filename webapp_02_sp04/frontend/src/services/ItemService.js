import axios from "axios";

const API_URL = "http://localhost:8081/api/items";

export default {
  getItems() {
    return axios.get(API_URL);
  },
  async createItem(item) {
    try {
      return await axios
        .post(API_URL, item);
    } catch (error) {
      console.error("Error creating item:", error);
      throw error; // 必要に応じてエラーを再スロー
    }
  },
  async deleteItem(itemId) {
    try {
      return await axios
        .delete(`${API_URL}/${itemId}`);
    } catch (error) {
      console.error("Error deleting item:", error);
      throw error; // 必要に応じてエラーを再スロー
    }
 },
};
