import { Emoji } from "./Emoji";

export interface Reaction {
  count: number;
  me: boolean;
  emoji: Partial<Emoji>;
}