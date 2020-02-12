import { RoleSnowflake } from "./Snowflake";

export interface Role {
  id: RoleSnowflake;
  name: string;
  color: number;
  hoist: boolean;
  position: number;
  permissions: number;
  managed: boolean;
  mentionable: boolean;
}