declare namespace Discord {
  const enum EventTypes {
    READY = "READY",
    CHANNEL_CREATE = "CHANNEL_CREATE",
    CHANNEL_UPDATE = "CHANNEL_UPDATE",
    CHANNEL_DELETE = "CHANNEL_DELETE",
    CHANNEL_PINS_UPDATE = "CHANNEL_PINS_UPDATE",
    GUILD_CREATE = "GUILD_CREATE",
    GUILD_UPDATE = "GUILD_UPDATE",
    GUILD_DELETE = "GUILD_DELETE",
    GUILD_BAN_ADD = "GUILD_BAN_ADD",
    GUILD_BAN_REMOVE = "GUILD_BAN_REMOVE",
    GUILD_EMOJIS_UPDATE = "GUILD_EMOJIS_UPDATE",
    GUILD_INTEGRATIONS_UPDATE = "GUILD_INTEGRATIONS_UPDATE",
    GUILD_MEMBER_ADD = "GUILD_MEMBER_ADD",
    GUILD_MEMBER_UPDATE = "GUILD_MEMBER_UPDATE",
    GUILD_MEMBER_REMOVE = "GUILD_MEMBER_REMOVE",
    GUILD_MEMBERS_CHUNK = "GUILD_MEMBERS_CHUNK",
    GUILD_ROLE_CREATE = "GUILD_ROLE_CREATE",
    GUILD_ROLE_UPDATE = "GUILD_ROLE_UPDATE",
    GUILD_ROLE_DELETE = "GUILD_ROLE_DELETE",
    MESSAGE_CREATE = "MESSAGE_CREATE",
    MESSAGE_UPDATE = "MESSAGE_UPDATE",
    MESSAGE_DELETE = "MESSAGE_DELETE",
    MESSAGE_DELETE_BULK = "MESSAGE_DELETE_BULK",
    MESSAGE_REACTION_ADD = "MESSAGE_REACTION_ADD",
    MESSAGE_REACTION_REMOVE = "MESSAGE_REACTION_REMOVE",
    MESSAGE_REACTION_REMOVE_ALL = "MESSAGE_REACTION_REMOVE_ALL",
    TYPING_START = "TYPING_START",
    USER_UPDATE = "USER_UPDATE",
    VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE",
    VOICE_SERVER_UPDATE = "VOICE_SERVER_UPDATE",
    WEBHOOKS_UPDATE = "WEBHOOKS_UPDATE",
    PRESENCE_UPDATE = "PRESENCE_UPDATE"
  }

  const enum Op {
    DISPATCH = 0,
    HEARTBEAT = 1,
    IDENTIFY = 2,
    STATUS_UPDATE = 3,
    VOICE_STATE_UPDATE = 4,
    RESUME = 6,
    RECONNECT = 7,
    REQUEST_GUILD_MEMBERS = 8,
    INVALID_SESSION = 9,
    HELLO = 10,
    HEARTBEAT_ACK = 11
  }

  /* Events */

  namespace Events {
    type InboundEvent = Events.Dispatch;

    interface Base {
      op: Op;
    }
  
    interface Dispatch extends Base {
      s: number;
      t: EventTypes;
    }

    type AllDispatchEvents = 
      | Ready
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
  
    interface Ready extends Dispatch {
      t: EventTypes.READY;
      d: {
        v: GatewayVersions;
        user: User;
        private_channels: [];
        guilds: UnavailableGuild[];
        session_id: string;
        shard: number[];
      };
    }

    /* Channel Events */

    interface ChannelCreate extends Dispatch {
      t: EventTypes.CHANNEL_CREATE;
      d: AnyChannel;
    }

    interface ChannelUpdate extends Dispatch {
      t: EventTypes.CHANNEL_UPDATE;
      d: AnyChannel;
    }

    interface ChannelDelete extends Dispatch {
      t: EventTypes.CHANNEL_DELETE;
      d: AnyChannel;
    }

    interface ChannelPinsUpdate extends Dispatch {
      t: EventTypes.CHANNEL_PINS_UPDATE;
      d: {
        guild_id: Snowflake<Guild>;
        channel_id: Snowflake<Channel>;
        last_pin_timestamp: string;
      };
    }

    /* Guild Events */

    interface GuildCreate extends Dispatch {
      t: EventTypes.GUILD_CREATE;
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

    interface GuildUpdate extends Dispatch {
      t: EventTypes.GUILD_UPDATE;
      d: Guild;
    }

    interface GuildDelete extends Dispatch {
      t: EventTypes.GUILD_DELETE;
      d: UnavailableGuild;
    }

    interface GuildBanAdd extends Dispatch {
      t: EventTypes.GUILD_BAN_ADD;
      d: {
        guild_id: Snowflake<Guild>;
        user: User;
      };
    }

    interface GuildBanRemove extends Dispatch {
      t: EventTypes.GUILD_BAN_REMOVE;
      d: {
        guild_id: Snowflake<Guild>;
        user: User;
      };
    }

    interface GuildIntegrationsUpdate extends Dispatch {
      t: EventTypes.GUILD_INTEGRATIONS_UPDATE;
      d: {
        guild_id: Snowflake<Guild>;
      };
    }

    interface GuildMemberAdd extends Dispatch {
      t: EventTypes.GUILD_MEMBER_ADD;
      d: GuildMember & { guild_id: Snowflake<Guild> };
    }

    interface GuildMemberRemove extends Dispatch {
      t: EventTypes.GUILD_MEMBER_REMOVE;
      d: {
        guild_id: Snowflake<Guild>;
        user: User;
      };
    }

    interface GuildMemberUpdate extends Dispatch {
      t: EventTypes.GUILD_MEMBER_UPDATE;
      d: {
        guild_id: Snowflake<Guild>;
        roles: Snowflake<Role>[];
        user: User;
        nick: string;
      };
    }

    interface GuildMembersChunk extends Dispatch {
      t: EventTypes.GUILD_MEMBERS_CHUNK;
      d: {
        guild_id: Snowflake<Guild>;
        members: GuildMember[];
        not_found?: any[];
        presences?: Presence[];
      };
    }

    interface GuildRoleCreate extends Dispatch {
      t: EventTypes.GUILD_ROLE_CREATE;
      d: {
        guild_id: Snowflake<Guild>;
        role: Role;
      };
    }

    interface GuildRoleUpdate extends Dispatch {
      t: EventTypes.GUILD_ROLE_UPDATE;
      d: {
        guild_id: Snowflake<Guild>;
        role: Role;
      };
    }

    interface GuildRoleDelete extends Dispatch {
      t: EventTypes.GUILD_ROLE_DELETE;
      d: {
        guild_id: Snowflake<Guild>;
        role_id: Snowflake<Role>;
      };
    }

    interface MessageCreate extends Dispatch {
      t: EventTypes.MESSAGE_CREATE;
      d: Message;
    }

    interface MessageUpdate extends Dispatch {
      t: EventTypes.MESSAGE_UPDATE;
      d: Message | Partial<Message>;
    }

    interface MessageDelete extends Dispatch {
      t: EventTypes.MESSAGE_DELETE;
      d: {
        id: Snowflake<Message>;
        channel_id: Snowflake<Channel>;
        guild_id?: Snowflake<Guild>;
      };
    }

    interface MessageDeleteBulk extends Dispatch {
      t: EventTypes.MESSAGE_DELETE_BULK;
      d: {
        ids: Snowflake<Message>[];
        channel_id: Snowflake<Channel>;
        guild_id?: Snowflake<Guild>;
      };
    }

    interface MessageReactionAdd extends Dispatch {
      t: EventTypes.MESSAGE_REACTION_ADD;
      d: {
        user_id: Snowflake<User>;
        channel_id: Snowflake<Channel>;
        message_id: Snowflake<Message>;
        guild_id?: Snowflake<Guild>;
        member?: GuildMember;
        emoji: Partial<Emoji>;
      };
    }

    interface MessageReactionRemove extends Dispatch {
      t: EventTypes.MESSAGE_REACTION_REMOVE;
      d: {
        user_id: Snowflake<User>;
        channel_id: Snowflake<Channel>;
        message_id: Snowflake<Message>;
        guild_id?: Snowflake<Guild>;
        emoji: Partial<Emoji>;
      };
    }

    interface MessageReactionRemoveAll extends Dispatch {
      t: EventTypes.MESSAGE_REACTION_REMOVE_ALL;
      d: {
        channel_id: Snowflake<Channel>;
        message_id: Snowflake<Message>;
        guild_id?: Snowflake<Guild>;
      };
    }

    interface PresenceUpdate extends Dispatch {
      t: EventTypes.PRESENCE_UPDATE;
      d: Presence;
    }

    interface TypingStart extends Dispatch {
      t: EventTypes.TYPING_START;
      d: {
        channel_id: Snowflake<Channel>;
        guild_id?: Snowflake<Guild>;
        user_id: Snowflake<User>;
        timestamp: number;
        member?: GuildMember;
      };
    }

    interface UserUpdate extends Dispatch {
      t: EventTypes.USER_UPDATE;
      d: User;
    }

    interface VoiceStateUpdate extends Dispatch {
      t: EventTypes.VOICE_STATE_UPDATE;
      d: VoiceState;
    }

    interface VoiceServerUpdate extends Dispatch {
      t: EventTypes.VOICE_SERVER_UPDATE;
      d: {
        token: string;
        guild_id: Snowflake<Guild>;
        endpoint: string;
      };
    }

    interface WebhooksUpdate extends Dispatch {
      t: EventTypes.WEBHOOKS_UPDATE;
      d: {
        guild_id: Snowflake<Guild>;
        channel_id: Snowflake<Channel>;
      };
    }
  }

  /* Flags and other Enums */

  type GatewayVersions = 6;

  const enum UserFlags {
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

  const enum PremiumType {
    NITRO_CLASSIC = 1,
    NITRO = 2,
  }

  const enum Permissions {
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

  const enum Regions {
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

  const enum VerificationLevel {
    NONE = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    VERY_HIGH = 4,
  }

  const enum PremiumTier {
    NONE = 0,
    TIER_1 = 1,
    TIER_2 = 2,
    TIER_3 = 3,
  }

  const enum MFALevel {
    NONE = 0,
    ELEVATED = 1,
  }

  const enum MessageNotificationsLevel {
    ALL_MESSAGES = 0,
    ONLY_MENTIONS = 1,
  }

  const enum ExplicitContentFilterLevel {
    DISABLED = 0,
    MEMBERS_WITHOUT_ROLES = 1,
    ALL_MEMBERS = 2,
  }

  const enum PermissionOverwriteType {
    ROLE = "role",
    MEMBER = "member"
  }

  const enum ChannelType {
    GUILD_TEXT = 0,
    DM = 1,
    GUILD_VOICE = 2,
    GROUP_DM = 3,
    GUILD_CATEGORY = 4,
    GUILD_NEWS = 5,
    GUILD_STORE = 6,
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

  export enum ActivityType {
    GAME = 0,
    STREAMING = 1,
    LISTENING = 2,
    CUSTOM = 4,
  }

  export enum ActivityFlags {
    INSTANCE = 1 << 0,
    JOIN = 1 << 1,
    SPECTATE = 1 << 2,
    JOIN_REQUEST = 1 << 3,
    SYNC = 1 << 4,
    PLAY = 1 << 5,
  }

  export enum MessageFlags {
    CROSSPOSTED = 1 << 0,
    IS_CROSSPOST = 1 << 1,
    SUPPRESS_EMBEDS = 1 << 2,
    SOURCE_MESSAGE_DELETED = 1 << 3,
    URGENT = 1 << 4,
  }

  export enum MessageType {
    DEFAULT = 0,
    RECIPIENT_ADD = 1,
    RECIPIENT_REMOVE = 2,
    CALL = 3,
    CHANNEL_NAME_CHANGE = 4,
    CHANNEL_ICON_CHANGE = 5,
    CHANNEL_PINNED_MESSAGE = 6,
    GUILD_MEMBER_JOIN = 7,
    USER_PREMIUM_GUILD_SUBSCRIPTION = 8,
    USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1 = 9,
    USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2 = 10,
    USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3 = 11,
    CHANNEL_FOLLOW_ADD = 12
  }

  /* Objects */
  type Snowflake<T = any> = string & { type?: T };

  class User {
    id: Snowflake<User>;
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

  class Webhook {
    id: Snowflake<Webhook>;
    username: string;
    avatar?: string;
  }

  class Guild {
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

  interface UnavailableGuild {
    id: Snowflake<Guild>;
    unavailable: true;
  }

  interface PermissionOverwrite {
    id: Snowflake<User | Role>;
    type: PermissionOverwriteType;
    allow: number;
    deny: number;
  }

  type AnyChannel = DmChannel | AnyGuildChannel;
  type AnyGuildChannel = GuildTextChannel | GuildVoiceChannel | GuildCategoryChannel | GuildNewsChannel | GuildStoreChannel;

  class Channel { 
    id: Snowflake<Channel>;
    type: ChannelType;
  }

  class TextChannel extends Channel {
    last_pin_timestamp: string;
    last_message_id: Snowflake<Message>;
  }

  class DmChannel extends TextChannel {
    type: ChannelType.DM;
    recipients: User[];
  }

  class GuildTextChannel extends TextChannel {
    type: ChannelType.GUILD_TEXT;
    name: string;
    guild_id: Snowflake<Guild>;
    position: number;
    permission_overwrites: PermissionOverwrite[];
    parent_id?: Snowflake<GuildCategoryChannel>;
    topic?: string;
    nsfw: boolean;
    rate_limit_per_user?: number;
  }

  class GuildVoiceChannel extends Channel {
    type: ChannelType.GUILD_VOICE;
    name: string;
    guild_id: Snowflake<Guild>;
    position: number;
    permission_overwrites: PermissionOverwrite[];
    parent_id?: Snowflake<GuildCategoryChannel>;
    bitrate?: number;
    user_limit?: number;
  }

  class GuildCategoryChannel extends Channel {
    guild_id: Snowflake<Guild>;
    position: number;
    permission_overwrites: PermissionOverwrite[];
    type: ChannelType.GUILD_CATEGORY;
    name: string;
  }

  class GuildNewsChannel extends Channel {
    guild_id: Snowflake<Guild>;
    type: ChannelType.GUILD_NEWS;
    name: string;
    topic?: string;
    nsfw?: boolean;
    position: number;
    permission_overwrites: PermissionOverwrite[];
    parent_id?: Snowflake<GuildCategoryChannel>;
  }

  class GuildStoreChannel extends Channel {
    guild_id: Snowflake<Guild>;
    type: ChannelType.GUILD_STORE;
    parent_id?: Snowflake<GuildCategoryChannel>;
    position: number;
    name: string;
  }

  /* Presence */

  class ClientStatus {
    desktop?: string;
    mobile?: string;
    web?: string;
  }

  class Activity {
    name: string;
    type: ActivityType;
    url?: string;
    created_at: number;
    timestamps?: ActivityTimestamp;
    application_id?: Snowflake<void>;
    details?: string;
    state?: string;
    emoji?: ActivityEmoji;
    party?: ActivityParty;
    assets?: ActivityAssets;
    secrets?: ActivitySecrets;
    instance?: boolean;
    flags?: number;
  }

  class ActivityTimestamp {
    start?: number;
    end?: number;
  }

  class ActivityEmoji {
    name: string;
    id?: Snowflake<ActivityEmoji>;
    animated?: boolean;
  }

  class ActivityParty {
    id?: string;
    size?: number[];
  }

  class ActivityAssets {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  }

  class ActivitySecrets {
    join?: string;
    spectate?: string;
    match?: string;
  }

  class VoiceState {
    guild_id?: Snowflake<Guild>;
    channel_id: Snowflake<Channel>;
    user_id: Snowflake<User>;
    member?: GuildMember;
    session_id: string;
    deaf: boolean;
    mute: boolean;
    self_deaf: boolean;
    self_mute: boolean;
    self_stream?: boolean;
    suppress: boolean;
  }

  class GuildMember {
    user: User;
    nick?: string;
    roles: Snowflake<Role>[];
    joined_at: string;
    premium_since?: string;
    deaf: boolean;
    mute: boolean;
  }

  class Role {
    id: Snowflake<Role>;
    name: string;
    color: number;
    hoist: boolean;
    position: number;
    permissions: number;
    managed: boolean;
    mentionable: boolean;
  }

  class ChannelMention {
    id: Snowflake<Channel>;
    guild_id: Snowflake<Guild>;
    type: ChannelType;
    name: string;
  }

  class MessageActivity {
    type: number;
    party_id?: string;
  }

  class MessageApplication {
    id: Snowflake<void>;
    cover_image?: string;
    description: string;
    icon?: string;
    name: string;
  }

  class MessageReference {
    message_id?: Snowflake<Message>;
    channel_id: Snowflake<Channel>;
    guild_id?: Snowflake<Guild>;
  }

  class Reaction {
    count: number;
    me: boolean;
    emoji: Partial<Emoji>;
  }

  class Attachment {
    id: Snowflake<Attachment>;
    filename: string;
    size: number;
    url: string;
    proxy_url: string;
    height?: number;
    width?: number;
  }

  class Message {
    id: Snowflake<Message>;
    channel_id: Snowflake<Channel>;
    guild_id?: Snowflake<Guild>;
    author: User | Webhook;
    member?: GuildMember;
    content: string;
    timestamp: string;
    edited_timestamp: string;
    tts: boolean;
    mention_everyone: boolean;
    mentions: Array<User & { member: Partial<GuildMember> }>;
    mention_roles: Snowflake<Role>[];
    mention_channels?: ChannelMention[];
    attachments: Attachment[];
    embeds: Embed[];
    reactions?: Reaction[];
    nonce?: number | string;
    pinned: boolean;
    webhook_id?: Snowflake<Webhook>;
    type: MessageType;
    activity?: MessageActivity;
    application?: MessageApplication;
    message_refrence?: MessageReference;
    flags?: number;
  }

  class Presence {
    user: User | { id: Snowflake<User> };
    roles: Snowflake<Role>[];
    game: Activity;
    guild_id: Snowflake<Guild>;
    status: "idle" | "dnd" | "online" | "offline";
    activities: Activity[];
    client_status: ClientStatus;
    premium_since?: string;
    nick?: string;
  }

  namespace Embed {
    class Footer {
      text: string;
      icon_url?: string;
      proxy_icon_url?: string;
    }

    class Image {
      url?: string;
      proxy_url?: string;
      height?: number;
      width?: number;
    }

    class Thumbnail {
      url?: string;
      proxy_url?: string;
      height?: number;
      width?: number;
    }

    class Video {
      url?: string;
      height?: number;
      width?: number;
    }

    class Provider {
      name?: string;
      url?: string;
    }

    class Author {
      name?: string;
      url?: string;
      icon_url?: string;
      proxy_icon_url?: string;
    }

    class Field {
      name: string;
      value: string;
      inline?: boolean;
    }
  }

  class Embed {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: number;
    footer?: Embed.Footer;
    image?: Embed.Image;
    thumbnail?: Embed.Thumbnail;
    video?: Embed.Video;
    provider?: Embed.Provider;
    author?: Embed.Author;
    fields?: Embed.Field[]; 
  }

  class Emoji {
    id?: Snowflake<Emoji>;
    name?: string;
    roles?: Snowflake<Role>[];
    user?: User;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
  }
}
