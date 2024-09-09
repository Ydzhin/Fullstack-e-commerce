import { routeName as home } from "./routes/home";
import { routeName as login } from "./routes/login";
import { routeName as news } from "./routes/news";
import { routeName as notFound } from "./routes/not-found";
import { routeName as profile } from "./routes/profile";
import { routeName as register } from "./routes/register";

export const pages = {
  home,
  login,
  news,
  notFound,
  profile,
  register,
} as const;
