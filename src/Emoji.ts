import { EmojiSnowflake, RoleSnowflake } from "./Snowflake";
import { User } from "./User";

export interface Emoji {
  id?: EmojiSnowflake;
  name?: string;
  roles?: RoleSnowflake[];
  user?: User;
  require_colons?: boolean;
  managed?: boolean;
  animated?: boolean;
}