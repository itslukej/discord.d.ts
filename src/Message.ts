import { Channel, ChannelType } from "./Channel";
import { Snowflake } from "./Snowflake";
import { Guild } from "./Guild";
import { Webhook } from "./Webhook";
import { User } from "./User";
import { GuildMember } from "./Member";
import { Role } from "./Role";
import { Reaction } from "./Reaction";
import { Attachment } from "./Attachment";
import { Embed } from "./Embed";

export const enum MessageFlags {
  CROSSPOSTED = 1 << 0,
  IS_CROSSPOST = 1 << 1,
  SUPPRESS_EMBEDS = 1 << 2,
  SOURCE_MESSAGE_DELETED = 1 << 3,
  URGENT = 1 << 4,
}

export const enum MessageType {
  DEFAULT = 0,
  RECIPIENT_ADD = 1,
  RECIPIENT_REMOVE = 2,
  CALL = 3,
  CHANNEL_NAME_CHANGE = 4,
  CHANNEL_ICON_CHANGE = 5,
  CHANNEL_PINNED_MESSAGE = 6,
  GUILD_MEMBER_JOIN = 7,
  USER_PREMIUM_GUILD_SUBSCRIPTION = 8,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1 = 9,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2 = 10,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3 = 11,
  CHANNEL_FOLLOW_ADD = 12
}

export interface ChannelMention {
  id: Snowflake<Channel>;
  guild_id: Snowflake<Guild>;
  type: ChannelType;
  name: string;
}

export interface MessageActivity {
  type: number;
  party_id?: string;
}

export interface MessageApplication {
  id: Snowflake<void>;
  cover_image?: string;
  description: string;
  icon?: string;
  name: string;
}

export interface MessageReference {
  message_id?: Snowflake<Message>;
  channel_id: Snowflake<Channel>;
  guild_id?: Snowflake<Guild>;
}

export type Message = 
  | GuildWebhookMessage
  | GuildMemberMessage
  | UserMessage;

export type GuildWebhookMessage = GuildMessage & WebhookMessage;
export type GuildMemberMessage = GuildMessage & UserMessage & MemberMessage;

export interface GuildMessage extends BaseMessage {
  guild_id: Snowflake<Guild>;
  mentions: Array<User & { member: Partial<GuildMember> }>;
}

export interface MemberMessage extends UserMessage {
  member: GuildMember;
}

export interface UserMessage extends BaseMessage {
  author: User;
}

export interface WebhookMessage extends BaseMessage {
  webhook_id: Snowflake<Webhook>;
  author: Webhook;
}

export interface BaseMessage {
  id: Snowflake<Message>;
  channel_id: Snowflake<Channel>;
  content: string;
  timestamp: string;
  edited_timestamp: string;
  tts: boolean;
  mention_everyone: boolean;
  mentions: Array<User>;
  mention_roles: Snowflake<Role>[];
  mention_channels?: ChannelMention[];
  attachments: Attachment[];
  embeds: Embed[];
  reactions?: Reaction[];
  nonce?: number | string;
  pinned: boolean;
  type: MessageType;
  activity?: MessageActivity;
  application?: MessageApplication;
  message_refrence?: MessageReference;
  flags?: number;
}