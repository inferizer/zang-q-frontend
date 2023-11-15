const ACCESS_TOKEN = "ACCESS_TOKEN";
export const addAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

const LINE_TOKEN = "LIFF_STORE:2001390459-y9GRwgp7:accessToken";
export const getLineToken = () => localStorage.getItem(LINE_TOKEN);

export const getCurrentQueue = () => {
  const currentQueue = localStorage.getItem("currentQueue");
  if (currentQueue) {
    return currentQueue;
  } else {
    localStorage.setItem("currentQueue", 1);
    return 1;
  }
};
