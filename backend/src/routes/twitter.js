const TwitterService = require("../services/twitter");

const setupTwitterRoutes = (server) => {
    server.get("/twitter/request-token", async (req, res) => {
        try {
            const response = await TwitterService.getRequestToken();
            res.json(response);
        } catch (e) {
            const errorMessage = typeof(e.message) === "string" ? e.message : e.errors[0].message;
            res.status(500).json({ message: errorMessage });
        }
    });
}

module.exports = { setupTwitterRoutes };