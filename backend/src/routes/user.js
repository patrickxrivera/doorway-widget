const User = require("../services/user");

const setupUserRoutes = (server) => {
    server.post("/user/create", async (req, res) => {
        try {
            const user = await User.create(req.body.email);
            res.json({ success: true, userId: user.id });
        } catch (e) {
            res.status(500);
            res.json({ success: false, errorMessage: e.message });
        }
    });
}

module.exports = { setupUserRoutes };