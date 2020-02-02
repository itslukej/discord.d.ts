import { Snowflake } from "./Snowflake";

export interface Role {
  id: Snowflake<Role>;
  name: string;
  color: number;
  hoist: boolean;
  position: number;
  permissions: number;
  managed: boolean;
  mentionable: boolean;
}