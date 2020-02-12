import { Webhook } from "./Webhook";
import { User } from "./User";
import { Integration } from "./Integration";
import { Snowflake, UserSnowflake, AuditLogEntrySnowflake, ChannelSnowflake, MessageSnowflake, RoleSnowflake } from "./Snowflake";
import { Role } from "./Role";
import { MessageNotificationsLevel, ExplicitContentFilterLevel, VerificationLevel, MFALevel } from "./Guild";
import { PermissionOverwrite } from "./Permissions";
import { ChannelType } from "./Channel";

export const enum AuditLogEvent {
	GUILD_UPDATE = 1,
	CHANNEL_CREATE = 10,
	CHANNEL_UPDATE = 11,
	CHANNEL_DELETE = 12,
	CHANNEL_OVERWRITE_CREATE = 13,
	CHANNEL_OVERWRITE_UPDATE = 14,
	CHANNEL_OVERWRITE_DELETE = 15,
	MEMBER_KICK = 20,
	MEMBER_PRUNE = 21,
	MEMBER_BAN_ADD = 22,
	MEMBER_BAN_REMOVE = 23,
	MEMBER_UPDATE = 24,
	MEMBER_ROLE_UPDATE = 25,
	MEMBER_MOVE = 26,
	MEMBER_DISCONNECT = 27,
	BOT_ADD = 28,
	ROLE_CREATE = 30,
	ROLE_UPDATE = 31,
	ROLE_DELETE = 32,
	INVITE_CREATE = 40,
	INVITE_UPDATE = 41,
	INVITE_DELETE = 42,
	WEBHOOK_CREATE = 50,
	WEBHOOK_UPDATE = 51,
	WEBHOOK_DELETE = 52,
	EMOJI_CREATE = 60,
	EMOJI_UPDATE = 61,
	EMOJI_DELETE = 62,
	MESSAGE_DELETE = 72,
	MESSAGE_BULK_DELETE = 73,
	MESSAGE_PIN = 74,
	MESSAGE_UNPIN = 75,
	INTEGRATION_CREATE = 80,
	INTEGRATION_UPDATE = 81,
	INTEGRATION_DELETE = 82,
}

export interface AuditLog {
  webhooks: Webhook[];
  users: User[];
  audit_log_entries: AuditLogEntry[];
  integrations: Partial<Integration>[];
}

export interface AuditLogEntry {
  target_id: Snowflake | null;
  changes?: AuditLogChange[];
  user_id: UserSnowflake;
  id: AuditLogEntrySnowflake;
  action_type: AuditLogEvent;
  options?: Partial<AuditEntryInfo>;
  reason?: string;
}

export interface AuditEntryInfo {
  delete_member_days: string;
	members_removed: string;
	channel_id: ChannelSnowflake;
	message_id: MessageSnowflake;
	count: string;
	id: UserSnowflake | RoleSnowflake;
	type: 'member' | 'role';
	role_name: string;
}

export type AuditLogChange =
	& AuditLogChangeInfo<'name', string>
	& AuditLogChangeInfo<'icon_hash', string>
	& AuditLogChangeInfo<'splash_hash', string>
	& AuditLogChangeInfo<'owner_id', string>
	& AuditLogChangeInfo<'region', string>
	& AuditLogChangeInfo<'afk_channel_id', string>
	& AuditLogChangeInfo<'afk_timeout', string>
	& AuditLogChangeInfo<'mfa_level', MFALevel>
	& AuditLogChangeInfo<'verification_level', VerificationLevel>
	& AuditLogChangeInfo<'explicit_content_filter', ExplicitContentFilterLevel>
	& AuditLogChangeInfo<'default_message_notifications', MessageNotificationsLevel>
	& AuditLogChangeInfo<'vanity_url_code', string>
	& AuditLogChangeInfo<'$add', Partial<Role>[]>
	& AuditLogChangeInfo<'$remove', Partial<Role>[]>
	& AuditLogChangeInfo<'prune_delete_days', number>
	& AuditLogChangeInfo<'widget_enabled', boolean>
	& AuditLogChangeInfo<'widget_channel_id', string>
	& AuditLogChangeInfo<'system_channel_id', string>
	& AuditLogChangeInfo<'position', number>
	& AuditLogChangeInfo<'topic', string>
	& AuditLogChangeInfo<'bitrate', number>
	& AuditLogChangeInfo<'permission_overwrites', Partial<PermissionOverwrite>[]>
	& AuditLogChangeInfo<'nsfw', boolean>
	& AuditLogChangeInfo<'application_id', string>
	& AuditLogChangeInfo<'rate_limit_per_user', number>
	& AuditLogChangeInfo<'permissions', number>
	& AuditLogChangeInfo<'color', number>
	& AuditLogChangeInfo<'hoist', boolean>
	& AuditLogChangeInfo<'mentionable', boolean>
	& AuditLogChangeInfo<'allow', number>
	& AuditLogChangeInfo<'deny', number>
	& AuditLogChangeInfo<'code', number>
	& AuditLogChangeInfo<'channel_id', string>
	& AuditLogChangeInfo<'inviter_id', string>
	& AuditLogChangeInfo<'max_uses', number>
	& AuditLogChangeInfo<'uses', number>
	& AuditLogChangeInfo<'max_age', null>
	& AuditLogChangeInfo<'temporary', boolean>
	& AuditLogChangeInfo<'deaf', boolean>
	& AuditLogChangeInfo<'mute', boolean>
	& AuditLogChangeInfo<'nick', string>
	& AuditLogChangeInfo<'avatar_hash', string>
	& AuditLogChangeInfo<'id', string>
	& AuditLogChangeInfo<'type', ChannelType | string>
	& AuditLogChangeInfo<'enable_emoticons', boolean>
	& AuditLogChangeInfo<'expire_behavior', number>
	& AuditLogChangeInfo<'expire_grace_period', number>;

export interface AuditLogChangeInfo<K extends string, T> {
	key: K;
	old_value?: T;
	new_value?: T;
}