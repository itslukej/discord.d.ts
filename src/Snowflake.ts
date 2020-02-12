import { Attachment } from "./Attachment";
import { AuditLogEntry } from "./AuditLog";
import { Channel } from "./Channel";
import { Emoji } from "./Emoji";
import { Guild } from "./Guild";
import { Integration } from "./Integration";
import { Message } from "./Message";
import { ActivityEmoji } from "./Presence";
import { Role } from "./Role";
import { User } from "./User";
import { Webhook } from "./Webhook";

export type Snowflake<T = any> = string & { type?: T };

// Helpers
export type AttachmentSnowflake = Snowflake<Attachment>;
export type AuditLogEntrySnowflake = Snowflake<AuditLogEntry>;
export type ChannelSnowflake = Snowflake<Channel>;
export type EmojiSnowflake = Snowflake<Emoji>;
export type GuildSnowflake = Snowflake<Guild>;
export type IntegrationSnowflake = Snowflake<Integration>;
export type MessageSnowflake = Snowflake<Message>;
export type ActivityEmojiSnowflake = Snowflake<ActivityEmoji>;
export type RoleSnowflake = Snowflake<Role>;
export type UserSnowflake = Snowflake<User>;
export type WebhookSnowflake = Snowflake<Webhook>;