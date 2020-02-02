import { Snowflake } from './Snowflake';

export interface Webhook {
  id: Snowflake<Webhook>;
  username: string;
  avatar?: string;
}