import { ReceivableOp, SendableOp, DispatchEventType } from './constants';
import * as Dispatch from './dispatch';
import { Snowflake } from '../Snowflake';
import { Guild } from '../Guild';
import { User } from '../User';
import { Channel } from '../Channel';
import { Activity, Status } from '../Presence';

/* Base */

export interface BaseEvent {
  op: ReceivableOp | SendableOp;
  d: any;
}

/* Receivable */

export type AllReceivableEvents = 
  | HelloEvent
  | Dispatch.AllDispatchEvents;

export interface ReceivableEvent extends BaseEvent {
  op: ReceivableOp;
}

export interface HelloEvent extends BaseEvent {
  op: ReceivableOp.HELLO;
  d: {
    heartbeat_interval: number;
  }
}

export interface HeartbeatACKEvent extends BaseEvent {
  op: ReceivableOp.HEARTBEAT_ACK;
}

export interface DispatchEvent extends ReceivableEvent {
  op: ReceivableOp.DISPATCH;
  s: number;
  t: DispatchEventType;
}

export { Dispatch };

/* Sendable */

export type AllSendableEvents = 
  | HeartbeatEvent
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

export interface HeartbeatEvent extends SendableEvent {
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
    guild_id: Snowflake<Guild> | Array<Snowflake<Guild>>;
    query?: string;
    limit: number;
    presences?: boolean;
    user_ids?: Snowflake<User> | Array<Snowflake<User>>;
  }
}

export interface UpdateVoiceStateEvent extends SendableEvent {
  op: SendableOp.VOICE_STATE_UPDATE;
  d: {
    guild_id: Snowflake<Guild>;
    channel_id: Snowflake<Channel> | null;
    self_mute: boolean;
    self_deaf: boolean;
  }
}

export interface UpdateStatusEvent extends SendableEvent {
  op: SendableOp.STATUS_UPDATE;
  d: StatusUpdate;
}