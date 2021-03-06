const webPush = require('web-push');

module.exports = config => {
  if(!config.gcmAPIKey) {
    return null;
  }
  webPush.setGCMAPIKey(config.gcmAPIKey);

  return {
    sendNotification({endpoint, key, authSecret}, payload, ttl = 10) {
      return webPush.sendNotification({
        endpoint,
        TTL: ttl,
        keys: {
          p256dh: key,
          auth: authSecret
        },
        payload
      });
    }
  };
};
