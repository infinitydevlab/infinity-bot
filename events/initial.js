const Main = require('../index.js');

const version = require('../package.json').version;

module.exports = {
  name: 'initial',
  description:
    'this command runs automatically when starting the bot, can be used to configure status and other things.',

  execute(client) {
    client.user.setActivity(`🏗️ em desenvolvimento...`);
  },
};
