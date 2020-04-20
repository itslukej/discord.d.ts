import { IntegrationSnowflake, RoleSnowflake } from './Snowflake';
import { User } from './User';

export interface IntegrationAccount {
  id: string;
  name: string;
}

export interface Integration {
  id: IntegrationSnowflake;
  name: string;
  type: string;
  enabled: boolean;
  syncing: boolean;
  role_id: RoleSnowflake;
  expire_behaviour: number;
  expire_grace_period: number;
  user: User;
  account: IntegrationAccount;
  synced_at: string;
}