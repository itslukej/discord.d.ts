import { Snowflake } from "./Snowflake";
import { Role } from "./Role";
import { User } from "./User";

export interface IntegrationAccount {
  id: string;
  name: string;
}

export interface Integration {
  id: Snowflake<Integration>;
  name: string;
  type: string;
  enabled: boolean;
  syncing: boolean;
  role_id: Snowflake<Role>;
  expire_behaviour: number;
  expire_grace_period: number;
  user: User;
  account: IntegrationAccount;
  synced_at: string;
}