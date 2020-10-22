const TwitterService = require("../services/twitter");

const setupTwitterRoutes = (server) => {
    server.get("/twitter/request-token", async (req, res) => {
        const response = await TwitterService.getRequestToken();
        res.json(response);
    });

    server.post("/twitter/access-token", async (req, res) => {
        const response = await TwitterService.getAccessToken(req.body);
        res.json(response);
    });

    server.post("/twitter/follow", async (req, res) => {
        const response = await TwitterService.follow(req.body);
        res.json(response);
    });
}

module.exports = { setupTwitterRoutes };