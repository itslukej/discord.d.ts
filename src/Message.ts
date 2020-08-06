import { Attachment } from './Attachment';
import {
  ChannelSnowflake,
  GuildSnowflake,
  MessageSnowflake,
  RoleSnowflake,
  Snowflake,
  WebhookSnowflake
  } from './Snowflake';
import { ChannelType } from './Channel';
import { Embed } from './Embed';
import { GuildMember } from './Member';
import { Reaction } from './Reaction';
import { User } from './User';
import { Webhook } from './Webhook';

export enum MessageFlags {
  CROSSPOSTED = 1 << 0,
  IS_CROSSPOST = 1 << 1,
  SUPPRESS_EMBEDS = 1 << 2,
  SOURCE_MESSAGE_DELETED = 1 << 3,
  URGENT = 1 << 4,
}

export enum MessageType {
  DEFAULT,
  RECIPIENT_ADD,
  RECIPIENT_REMOVE,
  CALL,
  CHANNEL_NAME_CHANGE,
  CHANNEL_ICON_CHANGE,
  CHANNEL_PINNED_MESSAGE,
  GUILD_MEMBER_JOIN,
  USER_PREMIUM_GUILD_SUBSCRIPTION,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3,
  CHANNEL_FOLLOW_ADD
}

export interface ChannelMention {
  id: ChannelSnowflake;
  guild_id: GuildSnowflake;
  type: ChannelType;
  name: string;
}

export interface MessageActivity {
  type: number;
  party_id?: string;
}

export interface MessageApplication {
  id: Snowflake;
  cover_image?: string;
  description: string;
  icon?: string;
  name: string;
}

export interface MessageReference {
  message_id?: MessageSnowflake;
  channel_id: ChannelSnowflake;
  guild_id?: GuildSnowflake;
}

export type Message = 
  | GuildWebhookMessage
  | GuildMemberMessage
  | UserMessage;

export type GuildWebhookMessage = GuildMessage & WebhookMessage;
export type GuildMemberMessage = GuildMessage & UserMessage & MemberMessage;

export interface GuildMessage extends BaseMessage {
  guild_id: GuildSnowflake;
  mentions: Array<User & { member: Partial<GuildMember> }>;
}

export interface MemberMessage extends UserMessage {
  member: GuildMember;
}

export interface UserMessage extends BaseMessage {
  author: User;
}

export interface WebhookMessage extends BaseMessage {
  webhook_id: WebhookSnowflake;
  author: Webhook;
}

export interface BaseMessage {
  id: MessageSnowflake;
  channel_id: ChannelSnowflake;
  content: string;
  timestamp: string;
  edited_timestamp: string;
  tts: boolean;
  mention_everyone: boolean;
  mentions: Array<User>;
  mention_roles: RoleSnowflake[];
  mention_channels?: ChannelMention[];
  attachments: Attachment[];
  embeds: Embed[];
  reactions?: Reaction[];
  nonce?: number | string;
  pinned: boolean;
  type: MessageType;
  activity?: MessageActivity;
  application?: MessageApplication;
  message_reference?: MessageReference;
  flags?: number;
}
