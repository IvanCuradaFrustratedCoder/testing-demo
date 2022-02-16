import axios from "axios";
export class HttpService {
  baseUri = "https://jsonplaceholder.typicode.com";

  public async get() {
    try {
      const response = await axios.get(this.baseUri + "/users");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
