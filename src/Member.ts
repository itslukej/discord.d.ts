import { User } from "./User";
import { Snowflake } from "./Snowflake";
import { Role } from "./Role";

export interface GuildMember {
  user: User;
  nick?: string;
  roles: Snowflake<Role>[];
  joined_at: string;
  premium_since?: string;
  deaf: boolean;
  mute: boolean;
}
