import axios, { isAxiosError } from "axios";

export const getBaseUrl = axios.create({
  baseURL:
    "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464",
});

export const parseApiError = (error) => {
  let message = "Unknown network error";

  if (isAxiosError(error)) {
    message = error.message;
  }
  return { message };
};

export const getEmployees = async (dep = "all") => {
  const params = new URLSearchParams();

  if (typeof dep === "string") {
    params.append("__example", dep);
  }
  const { data } = await getBaseUrl.get("/users", {
    params,
  });

  return data.items;
};
