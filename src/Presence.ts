import {
  ActivityEmojiSnowflake,
  GuildSnowflake,
  RoleSnowflake,
  Snowflake,
  UserSnowflake
  } from './Snowflake';
import { User } from './User';

export type Status = "idle" | "dnd" | "online" | "offline";

export const enum ActivityType {
  GAME = 0,
  STREAMING = 1,
  LISTENING = 2,
  CUSTOM = 4,
}

export const enum ActivityFlags {
  INSTANCE = 1 << 0,
  JOIN = 1 << 1,
  SPECTATE = 1 << 2,
  JOIN_REQUEST = 1 << 3,
  SYNC = 1 << 4,
  PLAY = 1 << 5,
}

export interface ClientStatus {
  desktop?: string;
  mobile?: string;
  web?: string;
}

export interface Activity {
  name: string;
  type: ActivityType;
  url?: string;
  created_at: number;
  timestamps?: ActivityTimestamp;
  application_id?: Snowflake;
  details?: string;
  state?: string;
  emoji?: ActivityEmoji;
  party?: ActivityParty;
  assets?: ActivityAssets;
  secrets?: ActivitySecrets;
  instance?: boolean;
  flags?: number;
}

export interface ActivityTimestamp {
  start?: number;
  end?: number;
}

export interface ActivityEmoji {
  name: string;
  id?: ActivityEmojiSnowflake;
  animated?: boolean;
}

export interface ActivityParty {
  id?: string;
  size?: number[];
}

export interface ActivityAssets {
  large_image?: string;
  large_text?: string;
  small_image?: string;
  small_text?: string;
}

export interface ActivitySecrets {
  join?: string;
  spectate?: string;
  match?: string;
}

export interface Presence {
  user: User | { id: UserSnowflake };
  roles: RoleSnowflake[];
  game: Activity;
  guild_id: GuildSnowflake;
  status: Status;
  activities: Activity[];
  client_status: ClientStatus;
  premium_since?: string;
  nick?: string;
}