import { ChannelSnowflake, GuildSnowflake, UserSnowflake } from './Snowflake';
import { GuildMember } from './Member';

export const enum Regions {
  BRAZIL = "brazil",
  EUROPE = "europe",
  HONG_KONG = "hong-kong",
  INDIA = "india",
  JAPAN = "japan",
  RUSSIA = "russia",
  SINGAPORE = "singapore",
  SOUTH_AFRICA = "south-africa",
  SYDNEY = "sydney",
  US_CENTRAL = "us-central",
  US_EAST = "us-east",
  US_SOUTH = "us-south",
  US_WEST = "us-west",
  EU_CENTRAL = "eu-central",
  EU_WEST = "eu-west",
  AMSTERDAM = "amsterdam",
  FRANKFURT = "frankfurt",
  LONDON = "london",
  DUBAI = "dubai",
  SOUTH_KOREA = "south-korea",

  VIP_AMSTERDAM = "vip-amsterdam",
  VIP_BRAZIL = "vip-brazil",
  VIP_EU_CENTRAL = "vip-eu-central",
  VIP_EU_WEST = "vip-eu-west",
  VIP_FRANKFURT = "vip-frankfurt",
  VIP_JAPAN = "vip-japan",
  VIP_LONDON = "vip-london",
  VIP_SINGAPORE = "vip-singapore",
  VIP_SOUTH_AFRICA = "vip-southafrica",
  VIP_SYDNEY = "vip-sydney",
  VIP_US_CENTRAL = "vip-us-central",
  VIP_US_EAST = "vip-us-east",
  VIP_US_SOUTH = "vip-us-south",
  VIP_US_WEST = "vip-us-west"
}

export interface VoiceState {
  guild_id?: GuildSnowflake;
  channel_id: ChannelSnowflake;
  user_id: UserSnowflake;
  member?: GuildMember;
  session_id: string;
  deaf: boolean;
  mute: boolean;
  self_deaf: boolean;
  self_mute: boolean;
  self_stream?: boolean;
  suppress: boolean;
}