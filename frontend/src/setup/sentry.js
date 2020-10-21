import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

export const setupSentry = () => {
    Sentry.init({
        // TODO: move to config file
        dsn: "https://9c860a9e112b4c05882d295583f236ec@o464689.ingest.sentry.io/5477495",
        integrations: [
          new Integrations.BrowserTracing(),
        ],
        tracesSampleRate: 1.0,
      });
}