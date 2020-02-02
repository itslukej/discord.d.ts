import { Snowflake } from "./Snowflake";

export interface Attachment {
  id: Snowflake<Attachment>;
  filename: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
}