import { Snowflake } from './Snowflake';
import { User } from './User';
import { Guild } from './Guild';
import { PermissionOverwrite } from './Permissions';
import { Message } from './Message';

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
  id: Snowflake<Channel>;
  type: ChannelType;
}

export interface TextChannel extends Channel {
  last_pin_timestamp: string;
  last_message_id: Snowflake<Message>;
}

export interface DmChannel extends TextChannel {
  type: ChannelType.DM;
  recipients: User[];
}

export interface GuildTextChannel extends TextChannel {
  type: ChannelType.GUILD_TEXT;
  name: string;
  guild_id: Snowflake<Guild>;
  position: number;
  permission_overwrites: PermissionOverwrite[];
  parent_id?: Snowflake<GuildCategoryChannel>;
  topic?: string;
  nsfw: boolean;
  rate_limit_per_user?: number;
}

export interface GuildVoiceChannel extends Channel {
  type: ChannelType.GUILD_VOICE;
  name: string;
  guild_id: Snowflake<Guild>;
  position: number;
  permission_overwrites: PermissionOverwrite[];
  parent_id?: Snowflake<GuildCategoryChannel>;
  bitrate?: number;
  user_limit?: number;
}

export interface GuildCategoryChannel extends Channel {
  guild_id: Snowflake<Guild>;
  position: number;
  permission_overwrites: PermissionOverwrite[];
  type: ChannelType.GUILD_CATEGORY;
  name: string;
}

export interface GuildNewsChannel extends Channel {
  guild_id: Snowflake<Guild>;
  type: ChannelType.GUILD_NEWS;
  name: string;
  topic?: string;
  nsfw?: boolean;
  position: number;
  permission_overwrites: PermissionOverwrite[];
  parent_id?: Snowflake<GuildCategoryChannel>;
}

export interface GuildStoreChannel extends Channel {
  guild_id: Snowflake<Guild>;
  type: ChannelType.GUILD_STORE;
  parent_id?: Snowflake<GuildCategoryChannel>;
  position: number;
  name: string;
}