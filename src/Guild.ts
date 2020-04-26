import { Channel } from './Channel';
import { ChannelSnowflake, GuildSnowflake, UserSnowflake } from './Snowflake';
import { Emoji } from './Emoji';
import { GuildMember } from './Member';
import { Permissions } from './Permissions';
import { Presence } from './Presence';
import { Regions, VoiceState } from './Voice';
import { Role } from './Role';

export enum VerificationLevel {
  NONE,
  LOW,
  MEDIUM,
  HIGH,
  VERY_HIGH
}

export enum PremiumTier {
  NONE,
  TIER_1,
  TIER_2,
  TIER_3
}

export enum MFALevel {
  NONE,
  ELEVATED
}

export enum MessageNotificationsLevel {
  ALL_MESSAGES,
  ONLY_MENTIONS
}

export enum ExplicitContentFilterLevel {
  DISABLED,
  MEMBERS_WITHOUT_ROLES,
  ALL_MEMBERS
}

export enum Feature {
  INVITE_SPLASH = "INVITE_SPLASH",
  VIP_REGIONS = "VIP_REGIONS",
  VANITY_URL = "VANITY_URL",
  VERIFIED = "VERIFIED",
  PARTNERED = "PARTNERED",
  PUBLIC = "PUBLIC",
  COMMERCE = "COMMERCE",
  NEWS = "NEWS",
  DISCOVERABLE = "DISCOVERABLE",
  FEATURABLE = "FEATURABLE",
  ANIMATED_ICON = "ANIMATED_ICON",
  BANNER = "BANNER"
}

export interface UnavailableGuild {
  id: GuildSnowflake;
  unavailable: true;
}

export interface AvailableGuild {
  id: GuildSnowflake;
  name: string;
  icon?: string;
  splash?: string;
  owner_id: UserSnowflake;
  permissions?: Permissions;
  region: Regions;
  afk_channel_id: ChannelSnowflake;
  afk_timeout: number;
  embed_enabled?: boolean;
  embed_channel_id: ChannelSnowflake;
  verification_level: VerificationLevel;
  default_message_notifications: MessageNotificationsLevel;
  explicit_content_filter: ExplicitContentFilterLevel;
  roles: Role[];
  emojis: Emoji[];
  features: Feature[];
  mfa_level: MFALevel;
  application_id?: UserSnowflake;
  widget_enabled: boolean;
  widget_channel_id?: ChannelSnowflake;
  system_channel_id: ChannelSnowflake;
  max_presences?: number;
  max_members?: number;
  vanity_url_code: string;
  description: string;
  banner: string;
  premium_tier: PremiumTier;
  premium_subscription_count?: number;
  preferred_locale: string;
}

export interface WebsocketGuild extends AvailableGuild {
  joined_at?: string;
  large?: boolean;
  unavailable?: boolean;
  member_count: number;
  voice_states: Partial<VoiceState>[];
  members: GuildMember[];
  channels: Channel[];
  presences: Partial<Presence>[];
}

export type Guild = UnavailableGuild & (AvailableGuild | WebsocketGuild)
