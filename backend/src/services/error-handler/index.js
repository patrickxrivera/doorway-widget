const Sentry = require("../sentry");

class ErrorHandler {
    static async run(err, req, res, next) {
        const message = err.message ? err.message : err.errors[0].message;
      
        Sentry.captureMessage(message);
      
        res.status(500).json({ message });
      }
}

module.exports = ErrorHandler;