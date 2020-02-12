import { WebhookSnowflake } from './Snowflake';

export interface Webhook {
  id: WebhookSnowflake;
  username: string;
  avatar?: string;
}