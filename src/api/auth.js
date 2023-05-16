import client from "./client";

export const signUp = async (fields) => {
  return await client.post("/com.bimiboo.learning.games/signup", {
    fields,
  });
};
