// const dev = "http://localhost:4000";
// const prod = "https://mern-todo.surge.sh";
// const API_URL = process.env.API_URL
// export const baseURL =
//   window.location.hostname.split(":")[0] === "localhost" ||
//   window.location.hostname.includes("192")
//     ? API_URL
//     : API_URL;

console.log('URL', process.env.REACT_APP_API_URL)
export const baseURL = process.env.REACT_APP_API_URL || "http://localhost:4000"