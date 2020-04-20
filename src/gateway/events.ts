import * as Dispatch from './dispatch';
import { Activity, Status } from '../Presence';
import { ChannelSnowflake, GuildSnowflake, UserSnowflake } from '../Snowflake';
import { DispatchEventType, ReceivableOp, SendableOp } from './constants';

/* Base */

export interface BaseEvent {
  op: ReceivableOp | SendableOp;
  d: any;
}

/* Receivable */

export type AllReceivableEvents = 
  | HelloEvent
  | RHeartbeatEvent
  | HeartbeatACKEvent
  | InvalidSessionEvent
  | ReconnectEvent
  | Dispatch.AllDispatchEvents;

export interface ReceivableEvent extends BaseEvent {
  op: ReceivableOp;
}

export interface HelloEvent extends ReceivableEvent {
  op: ReceivableOp.HELLO;
  d: {
    heartbeat_interval: number;
  }
}

export interface RHeartbeatEvent extends ReceivableEvent {
  op: ReceivableOp.HEARTBEAT;
  d: number | null;
}

export interface HeartbeatACKEvent extends ReceivableEvent {
  op: ReceivableOp.HEARTBEAT_ACK;
}

export interface InvalidSessionEvent extends ReceivableEvent {
  op: ReceivableOp.INVALID_SESSION;
  d: boolean;
}

export interface ReconnectEvent extends ReceivableEvent {
  op: ReceivableOp.RECONNECT;
}

export interface DispatchEvent extends ReceivableEvent {
  op: ReceivableOp.DISPATCH;
  s: number;
  t: DispatchEventType;
}

export { Dispatch };

/* Sendable */

export type AllSendableEvents = 
  | SHeartbeatEvent
  | IdentifyEvent
  | ResumeEvent
  | RequestGuildMembersEvent
  | UpdateVoiceStateEvent
  | UpdateStatusEvent;

export interface StatusUpdate {
  since: number | null;
  game: Activity | null;
  status: Status;
  afk: boolean;
}

export interface SendableEvent extends BaseEvent {
  op: SendableOp;
}

export interface SHeartbeatEvent extends SendableEvent {
  op: SendableOp.HEARTBEAT;
  d: number | null;
}

export interface IdentifyEvent extends SendableEvent {
  op: SendableOp.IDENTIFY;
  d: {
    token: string;
    properties: {
      $os: string;
      $browser: string;
      $device: string;
    };
    compress?: boolean;
    large_threshold?: number;
    shard?: [number, number],
    presence?: StatusUpdate;
  }
}

export interface ResumeEvent extends SendableEvent {
  op: SendableOp.RESUME;
  d: {
    token: string;
    session_id: string;
    seq: number;
  }
}

export interface RequestGuildMembersEvent extends SendableEvent {
  op: SendableOp.REQUEST_GUILD_MEMBERS;
  d: {
    guild_id: GuildSnowflake | Array<GuildSnowflake>;
    query?: string;
    limit: number;
    presences?: boolean;
    user_ids?: UserSnowflake | Array<UserSnowflake>;
  }
}

export interface UpdateVoiceStateEvent extends SendableEvent {
  op: SendableOp.VOICE_STATE_UPDATE;
  d: {
    guild_id: GuildSnowflake;
    channel_id: ChannelSnowflake | null;
    self_mute: boolean;
    self_deaf: boolean;
  }
}

export interface UpdateStatusEvent extends SendableEvent {
  op: SendableOp.STATUS_UPDATE;
  d: StatusUpdate;
}