import client from "./client";

export const signUp = async (fields) => {
  console.log(fields);
  return await client.post("/signup", {
    email: "name@rq.wrw",
    password: "1234567wrwr",
  });
};
