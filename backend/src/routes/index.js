const { setupHealthChecks } = require("./health-checks");
const { setupWebhooks } = require("./webhooks");
const { setupUserRoutes } = require("./user")

const setupRoutes = (server) => {
    setupHealthChecks(server);
    setupWebhooks(server);
    setupUserRoutes(server);
}

module.exports = { setupRoutes };