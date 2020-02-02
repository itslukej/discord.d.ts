import { User } from "./User";

export interface Ban {
  reason?: string;
  user: User;
}