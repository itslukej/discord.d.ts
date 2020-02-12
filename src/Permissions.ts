import { UserSnowflake, RoleSnowflake } from "./Snowflake";

export const enum Permissions {
  CREATE_INSTANT_INVITE = 1,
  KICK_MEMBERS = 1 << 1,
  BAN_MEMBERS = 1 << 2,
  ADMINISTRATOR = 1 << 3,
  MANAGE_CHANNELS = 1 << 4,
  MANAGE_GUILD =  1 << 5,
  ADD_REACTIONS = 1 << 6,
  VIEW_AUDIT_LOGS = 1 << 7,
  VOICE_PRIORITY_SPEAKER = 1 << 8,
  STREAM = 1 << 9,
  READ_MESSAGES = 1 << 10,
  SEND_MESSAGES = 1 << 11,
  SEND_TTS_MESSAGES = 1 << 12,
  MANAGE_MESSAGES = 1 << 13,
  EMBED_LINKS = 1 << 14,
  ATTACH_FILES = 1 << 15,
  READ_MESSAGE_HISTORY = 1 << 16,
  MENTION_EVERYONE = 1 << 17,
  EXTERNAL_EMOJIS = 1 << 18,
  VIEW_GUILD_ANALYTICS = 1 << 19,
  VOICE_CONNECT = 1 << 20,
  VOICE_SPEAK = 1 << 21,
  VOICE_MUTE_MEMBERS = 1 << 22,
  VOICE_DEAFEN_MEMBERS = 1 << 23,
  VOICE_MOVE_MEMBERS = 1 << 24,
  VOICE_USE_VAD = 1 << 25,
  CHANGE_NICKNAME = 1 << 26,
  MANAGE_NICKNAMES = 1 << 27,
  MANAGE_ROLES = 1 << 28,
  MANAGE_WEBHOOKS = 1 << 29,
  MANAGE_EMOJIS = 1 << 30,
  ALL = 0b1111111111111111111111111111111,
  ALL_GUILD = 0b1111100000010000000000010111111,
  ALL_TEXT = 0b0110000000001111111110001010001,
  ALL_VOICE = 0b0110011111100000000001100010001,
}

export const enum PermissionOverwriteType {
  ROLE = "role",
  MEMBER = "member"
}

export interface PermissionOverwrite {
  id: UserSnowflake | RoleSnowflake;
  type: PermissionOverwriteType;
  allow: number;
  deny: number;
}