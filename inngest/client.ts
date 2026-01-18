import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Code Reviewer.AI",
  eventKey: process.env.INNGEST_EVENT_KEY,
});
