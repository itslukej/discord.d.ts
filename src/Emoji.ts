import { Snowflake } from "./Snowflake";
import { Role } from "./Role";
import { User } from "./User";

export interface Emoji {
  id?: Snowflake<Emoji>;
  name?: string;
  roles?: Snowflake<Role>[];
  user?: User;
  require_colons?: boolean;
  managed?: boolean;
  animated?: boolean;
}