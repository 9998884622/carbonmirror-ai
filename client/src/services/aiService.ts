import api from "./api";

export const askAI =
  async (
    data: any,
    token: string
  ) => {

    const response =
      await api.post(
        "/carbon/calculate",
        data,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    return response.data;
  };
