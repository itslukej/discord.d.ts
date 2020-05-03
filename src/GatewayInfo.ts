export interface GatewayInfo {
  url: string;
}

export interface BotGatewayInfo extends GatewayInfo {
  shards: number;
  session_start_limit: {
    total: number;
    remaining: number;
    reset_after: number;
  }
}