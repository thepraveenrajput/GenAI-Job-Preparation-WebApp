import axios from "axios";

// * To avoid repetition of base URL, we can create an instance of axios with the base URL set to our backend server. This way, we can simply use this instance for all our API calls without having to specify the base URL each time.

const api = axios.create({
   baseURL: "http://localhost:3000",
   withCredentials: true,
})

//* Register function
export async function register({ username, email, password }) {
  try {
    const response = await api.post(
      "/api/auth/register",
      {
        username,
        email,
        password,
      });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

//* Login function
export async function login({ email, password }) {
   try{
      const response = await api.post("/api/auth/login",{
         email,
         password
      });
      return response.data;
   } catch(err){
      console.log(err);
   }
}

//* Logout function
export async function logout() {
   try{
      const response = await api.get("/api/auth/logout");
      return response.data;
   } catch(err){
      console.log(err);
   }
}

//* Get Me function
export async function getMe() {
   try{
      const response = await api.get("/api/auth/get-me");
      return response.data;
   } catch(err){
      console.log(err);
   }
}