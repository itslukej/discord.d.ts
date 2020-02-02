import { Snowflake } from './Snowflake';
import { GuildTextChannel, Channel } from './Channel';
import { User } from './User';
import { Regions, VoiceState } from './Voice';
import { Role } from './Role';
import { Emoji } from './Emoji';
import { Permissions } from './Permissions';
import { GuildMember } from './Member';
import { Presence } from './Presence';

export const enum VerificationLevel {
  NONE = 0,
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  VERY_HIGH = 4,
}

export const enum PremiumTier {
  NONE = 0,
  TIER_1 = 1,
  TIER_2 = 2,
  TIER_3 = 3,
}

export const enum MFALevel {
  NONE = 0,
  ELEVATED = 1,
}

export const enum MessageNotificationsLevel {
  ALL_MESSAGES = 0,
  ONLY_MENTIONS = 1,
}

export const enum ExplicitContentFilterLevel {
  DISABLED = 0,
  MEMBERS_WITHOUT_ROLES = 1,
  ALL_MEMBERS = 2,
}

export const enum Feature {
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
  id: Snowflake<Guild>;
  unavailable: true;
}

export interface AvailableGuild {
  id: Snowflake<Guild>;
  name: string;
  icon?: string;
  splash?: string;
  owner_id: Snowflake<User>;
  permissions?: Permissions;
  region: Regions;
  afk_channel_id: Snowflake<GuildTextChannel>;
  afk_timeout: number;
  embed_enabled?: boolean;
  embed_channel_id: Snowflake<GuildTextChannel>;
  verification_level: VerificationLevel;
  default_message_notifications: MessageNotificationsLevel;
  explicit_content_filter: ExplicitContentFilterLevel;
  roles: Role[];
  emojis: Emoji[];
  features: Feature[];
  mfa_level: MFALevel;
  application_id?: Snowflake<User>;
  widget_enabled: boolean;
  widget_channel_id?: Snowflake<GuildTextChannel>;
  system_channel_id: Snowflake<GuildTextChannel>;
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