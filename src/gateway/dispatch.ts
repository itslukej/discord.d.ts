import { AnyChannel, Channel } from '../Channel';
import {
  ChannelSnowflake,
  GuildSnowflake,
  MessageSnowflake,
  RoleSnowflake,
  Snowflake,
  UserSnowflake
  } from '../Snowflake';
import { DispatchEvent } from './events';
import { DispatchEventType as EventType, GatewayVersions } from './constants';
import { Emoji } from '../Emoji';
import { Guild, UnavailableGuild } from '../Guild';
import { GuildMember } from '../Member';
import { Message } from '../Message';
import { Presence } from '../Presence';
import { Role } from '../Role';
import { User } from '../User';
import { VoiceState } from '../Voice';

export type AllDispatchEvents = 
  | Ready
  | Resumed
  | ChannelCreate
  | ChannelUpdate
  | ChannelDelete
  | ChannelPinsUpdate
  | GuildCreate
  | GuildUpdate
  | GuildDelete
  | GuildBanAdd
  | GuildBanRemove
  | GuildIntegrationsUpdate
  | GuildMemberAdd
  | GuildMemberRemove
  | GuildMemberUpdate
  | GuildMembersChunk
  | GuildRoleCreate
  | GuildRoleDelete
  | GuildRoleUpdate
  | MessageCreate
  | MessageDelete
  | MessageUpdate
  | MessageDeleteBulk
  | MessageReactionAdd
  | MessageReactionRemove
  | MessageReactionRemoveAll
  | TypingStart
  | UserUpdate
  | VoiceStateUpdate
  | VoiceServerUpdate
  | WebhooksUpdate
  | PresenceUpdate;

export interface Ready extends DispatchEvent {
  t: EventType.READY;
  d: {
    v: GatewayVersions;
    user: User;
    private_channels: [];
    guilds: UnavailableGuild[];
    session_id: string;
    shard: [number, number];
  }
}

export interface Resumed extends DispatchEvent {
  t: EventType.RESUMED;
}

/* Channel Events */

export interface ChannelCreate extends DispatchEvent {
  t: EventType.CHANNEL_CREATE;
  d: AnyChannel;
}

export interface ChannelUpdate extends DispatchEvent {
  t: EventType.CHANNEL_UPDATE;
  d: AnyChannel;
}

export interface ChannelDelete extends DispatchEvent {
  t: EventType.CHANNEL_DELETE;
  d: AnyChannel;
}

export interface ChannelPinsUpdate extends DispatchEvent {
  t: EventType.CHANNEL_PINS_UPDATE;
  d: AnyChannel;
}

/* Guild Events */

export interface GuildCreate extends DispatchEvent {
  t: EventType.GUILD_CREATE;
  d: Guild & {
    joined_at?: string;
    large?: boolean;
    unavailable?: boolean;
    member_count: number;
    voice_states: Partial<VoiceState>[];
    members: GuildMember[];
    channels: Channel[];
    presences: Partial<Presence>[];
  };
}

export interface GuildUpdate extends DispatchEvent {
  t: EventType.GUILD_UPDATE;
  d: Guild;
}

export interface GuildDelete extends DispatchEvent {
  t: EventType.GUILD_DELETE;
  d: UnavailableGuild;
}

export interface GuildBanAdd extends DispatchEvent {
  t: EventType.GUILD_BAN_ADD;
  d: {
    guild_id: GuildSnowflake;
    user: User;
  };
}

export interface GuildBanRemove extends DispatchEvent {
  t: EventType.GUILD_BAN_REMOVE;
  d: {
    guild_id: GuildSnowflake;
    user: User;
  };
}

export interface GuildIntegrationsUpdate extends DispatchEvent {
  t: EventType.GUILD_INTEGRATIONS_UPDATE;
  d: {
    guild_id: GuildSnowflake;
  };
}

export interface GuildMemberAdd extends DispatchEvent {
  t: EventType.GUILD_MEMBER_ADD;
  d: GuildMember & { guild_id: GuildSnowflake };
}

export interface GuildMemberRemove extends DispatchEvent {
  t: EventType.GUILD_MEMBER_REMOVE;
  d: {
    guild_id: GuildSnowflake;
    user: User;
  };
}

export interface GuildMemberUpdate extends DispatchEvent {
  t: EventType.GUILD_MEMBER_UPDATE;
  d: {
    guild_id: GuildSnowflake;
    roles: RoleSnowflake[];
    user: User;
    nick: string;
  };
}

export interface GuildMembersChunk extends DispatchEvent {
  t: EventType.GUILD_MEMBERS_CHUNK;
  d: {
    chunk_count: number;
    chunk_index: number;
    guild_id: GuildSnowflake;
    members: GuildMember[];
    not_found?: any[];
    presences?: Presence[];
  };
}

export interface GuildRoleCreate extends DispatchEvent {
  t: EventType.GUILD_ROLE_CREATE;
  d: {
    guild_id: GuildSnowflake;
    role: Role;
  };
}

export interface GuildRoleUpdate extends DispatchEvent {
  t: EventType.GUILD_ROLE_UPDATE;
  d: {
    guild_id: GuildSnowflake;
    role: Role;
  };
}

export interface GuildRoleDelete extends DispatchEvent {
  t: EventType.GUILD_ROLE_DELETE;
  d: {
    guild_id: GuildSnowflake;
    role_id: RoleSnowflake;
  };
}

export interface MessageCreate extends DispatchEvent {
  t: EventType.MESSAGE_CREATE;
  d: Message;
}

export interface MessageUpdate extends DispatchEvent {
  t: EventType.MESSAGE_UPDATE;
  d: Message | Partial<Message>;
}

export interface MessageDelete extends DispatchEvent {
  t: EventType.MESSAGE_DELETE;
  d: {
    id: MessageSnowflake;
    channel_id: ChannelSnowflake;
    guild_id?: GuildSnowflake;
  };
}

export interface MessageDeleteBulk extends DispatchEvent {
  t: EventType.MESSAGE_DELETE_BULK;
  d: {
    ids: MessageSnowflake[];
    channel_id: ChannelSnowflake;
    guild_id?: GuildSnowflake;
  };
}

export interface MessageReactionAdd extends DispatchEvent {
  t: EventType.MESSAGE_REACTION_ADD;
  d: {
    user_id: UserSnowflake;
    channel_id: ChannelSnowflake;
    message_id: MessageSnowflake;
    guild_id?: GuildSnowflake;
    member?: GuildMember;
    emoji: Partial<Emoji>;
  };
}

export interface MessageReactionRemove extends DispatchEvent {
  t: EventType.MESSAGE_REACTION_REMOVE;
  d: {
    user_id: UserSnowflake;
    channel_id: ChannelSnowflake;
    message_id: MessageSnowflake;
    guild_id?: GuildSnowflake;
    emoji: Partial<Emoji>;
  };
}

export interface MessageReactionRemoveAll extends DispatchEvent {
  t: EventType.MESSAGE_REACTION_REMOVE_ALL;
  d: {
    channel_id: ChannelSnowflake;
    message_id: MessageSnowflake;
    guild_id?: GuildSnowflake;
  };
}

export interface PresenceUpdate extends DispatchEvent {
  t: EventType.PRESENCE_UPDATE;
  d: Presence;
}

export interface TypingStart extends DispatchEvent {
  t: EventType.TYPING_START;
  d: {
    channel_id: ChannelSnowflake;
    guild_id?: GuildSnowflake;
    user_id: UserSnowflake;
    timestamp: string;
    member?: GuildMember;
  };
}

export interface UserUpdate extends DispatchEvent {
  t: EventType.USER_UPDATE;
  d: User;
}

export interface VoiceStateUpdate extends DispatchEvent {
  t: EventType.VOICE_STATE_UPDATE;
  d: VoiceState & { guild_id: GuildSnowflake };
}

export interface VoiceServerUpdate extends DispatchEvent {
  t: EventType.VOICE_SERVER_UPDATE;
  d: {
    token: string;
    guild_id: GuildSnowflake;
    endpoint: string;
  };
}

export interface WebhooksUpdate extends DispatchEvent {
  t: EventType.WEBHOOKS_UPDATE;
  d: {
    guild_id: GuildSnowflake;
    channel_id: ChannelSnowflake;
  };
}
