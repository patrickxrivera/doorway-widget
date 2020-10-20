const Twitter = require("twitter-lite");

class TwitterService {
  static async getRequestToken() {
    const svc = new TwitterService();
    return svc.getRequestToken();
  }

  constructor() {
      this.client = new Twitter({
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET
      })
  }

  async getRequestToken() {
      const callbackUrl = "oob";
      return this.client.getRequestToken(callbackUrl);
  }
}

module.exports = TwitterService;