const User = require("../services/user");

const setupUserRoutes = (server) => {
    server.post("/user/create", async (req, res) => {
        const user = await User.create(req.body.email);
        res.json({ success: true, userId: user.id });
    });
}

module.exports = { setupUserRoutes };