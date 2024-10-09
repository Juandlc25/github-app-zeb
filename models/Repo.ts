import { User } from "./User";

export interface Repo {
  id: number;
  name: string;
  fullName: string;
  html_url: string;
  description: string;
  forks: number;
  watchers: number;
  owner: User;
}
