import { User } from "./User";
import { RoleSnowflake } from "./Snowflake";

export interface GuildMember {
  user: User;
  nick?: string;
  roles: RoleSnowflake[];
  joined_at: string;
  premium_since?: string;
  deaf: boolean;
  mute: boolean;
}
