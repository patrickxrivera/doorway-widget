const setupWebhooks = (server) => {
    server.post("webhooks/stripe", (req, res) => {
        console.log(req.body)
        res.json({ text: "Received Stripe webhook" })
    })
}

module.exports = { setupWebhooks };
