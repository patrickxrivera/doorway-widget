const TwitterService = require("../services/twitter");

const setupTwitterRoutes = (server) => {
    server.get("/twitter/request-token", async (req, res, next) => {
        try {
            const response = await TwitterService.getRequestToken();
            res.json(response);
        } catch (e) {
            next(e);
        }
    });

    server.post("/twitter/access-token", async (req, res) => {
        try {
            const response = await TwitterService.getAccessToken(req.body);
            res.json(response);
        } catch (e) {
            next(e);
        }
    });

    server.post("/twitter/follow", async (req, res) => {
        try {
            const response = await TwitterService.follow(req.body);
            res.json(response);
        } catch (e) {
            next(e);
        }
    });
}

module.exports = { setupTwitterRoutes };