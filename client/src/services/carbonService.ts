import api from "./api";

export const calculateCarbon =
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
