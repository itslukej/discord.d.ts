import { AttachmentSnowflake } from "./Snowflake";

export interface Attachment {
  id: AttachmentSnowflake;
  filename: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
}