const Redis = require('ioredis');

module.exports = config => {
  if(!config.redisURL){
    return null;
  }

  const redis = new Redis(config.redisURL, {
    keyPrefix: 'user:'
  });

  return {
    set(userId, data) {
      return redis.set(userId, JSON.stringify(data));
    },
    get(userId) {
      return redis.get(userId)
        .then(JSON.parse);
    }
  };
};
