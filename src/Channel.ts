import { ChannelSnowflake, MessageSnowflake, GuildSnowflake } from './Snowflake';
import { User } from './User';
import { PermissionOverwrite } from './Permissions';

export const enum ChannelType {
  GUILD_TEXT = 0,
  DM = 1,
  GUILD_VOICE = 2,
  GROUP_DM = 3,
  GUILD_CATEGORY = 4,
  GUILD_NEWS = 5,
  GUILD_STORE = 6,
}

export type AnyChannel = DmChannel | AnyGuildChannel;
export type AnyGuildChannel = GuildTextChannel | GuildVoiceChannel | GuildCategoryChannel | GuildNewsChannel | GuildStoreChannel;

export interface Channel { 
  id: ChannelSnowflake;
  type: ChannelType;
}

export interface TextChannel extends Channel {
  last_pin_timestamp: string;
  last_message_id: MessageSnowflake;
}

export interface DmChannel extends TextChannel {
  type: ChannelType.DM;
  recipients: User[];
}

export interface GuildTextChannel extends TextChannel {
  type: ChannelType.GUILD_TEXT;
  name: string;
  guild_id: GuildSnowflake;
  position: number;
  permission_overwrites: PermissionOverwrite[];
  parent_id?: ChannelSnowflake;
  topic?: string;
  nsfw: boolean;
  rate_limit_per_user?: number;
}

export interface GuildVoiceChannel extends Channel {
  type: ChannelType.GUILD_VOICE;
  name: string;
  guild_id: GuildSnowflake;
  position: number;
  permission_overwrites: PermissionOverwrite[];
  parent_id?: ChannelSnowflake;
  bitrate?: number;
  user_limit?: number;
}

export interface GuildCategoryChannel extends Channel {
  guild_id: GuildSnowflake;
  position: number;
  permission_overwrites: PermissionOverwrite[];
  type: ChannelType.GUILD_CATEGORY;
  name: string;
}

export interface GuildNewsChannel extends Channel {
  guild_id: GuildSnowflake;
  type: ChannelType.GUILD_NEWS;
  name: string;
  topic?: string;
  nsfw?: boolean;
  position: number;
  permission_overwrites: PermissionOverwrite[];
  parent_id?: ChannelSnowflake;
}

export interface GuildStoreChannel extends Channel {
  guild_id: GuildSnowflake;
  type: ChannelType.GUILD_STORE;
  parent_id?: ChannelSnowflake;
  position: number;
  name: string;
}