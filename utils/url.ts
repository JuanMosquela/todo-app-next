const isProduction = process.env.NODE_ENV === "production";

const BASE_URL = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : "http://localhost:3000";
