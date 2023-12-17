import { handlers } from "./handlers";
import { setupWorker } from "msw/browser";

// This configures a Service Worker with the given request handlers.
const worker = setupWorker(...handlers);

export default worker;
