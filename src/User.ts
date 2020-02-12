import { UserSnowflake } from './Snowflake';

export const enum PremiumType {
  NITRO_CLASSIC = 1,
  NITRO = 2,
}

export const enum UserFlags {
  NONE = 0,
  DISCORD_EMPLOYEE = 1 << 0,
  DISCORD_PARTNER = 1 << 1,
  HYPESQUAD_EVENTS = 1 << 2,
  BUG_HUNTER = 1 << 3,
  HOUSE_BRAVERY = 1 << 6,
  HOUSE_BRILLIANCE = 1 << 7,
  HOUSE_BALANCE = 1 << 8,
  EARLY_SUPPORTER = 1 << 9,
  TEAM_USER = 1 << 10,
  SYSTEM = 1 << 12,
}

export interface User {
  id: UserSnowflake;
  username: string;
  discriminator: string;
  avatar?: string;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  locale?: boolean;
  verified?: boolean;
  email?: boolean;
  flags?: number;
  premium_type?: PremiumType;
}