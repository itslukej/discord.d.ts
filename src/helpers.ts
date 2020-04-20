import { SendableOp, AllSendableEvents } from "./gateway";

// Used like:
// function sendMessage<O extends Discord.SendableOp>(op: O, d: D<O>)
export type D<O extends SendableOp, E extends AllSendableEvents = AllSendableEvents> = E extends { op: O } ? E['d'] : never;