'use strict';

module.exports = (Sequelize, config) => {
  const options = { host: config.db.host,
    dialect: config.db.dialect,
    //dialectOptions: { ssl: true } 
  };

  const sequelize = new Sequelize(config.db.name,
    config.db.user, config.db.password, options);

  const User = require('../models/user')(Sequelize, sequelize);
  const Chat = require('../models/chat')(Sequelize, sequelize);
  const Message = require('../models/message')(Sequelize, sequelize);
  const UserChat = require('../models/user_chat')(Sequelize, sequelize);

  User.hasMany(UserChat, {foreignKey: 'userId'});
  UserChat.belongsTo(User, {constraints: false, foreignKey: 'userId'});  
  Chat.hasMany(UserChat, {foreignKey: 'chatId'});
  UserChat.belongsTo(Chat, {constraints: false, foreignKey: 'chatId'});
  Chat.hasMany(Message, {foreignKey: 'chatId'});
  Message.belongsTo(Chat, {constraints: false, foreignKey: 'chatId'});
  User.hasMany(Message, {foreignKey: 'userId'});
  Message.belongsTo(User, {constraints: false, foreignKey: 'userId'});

  return { 
    user: User,
    chat: Chat,
    message: Message,
    userChat: UserChat,
    
    sequelize: sequelize,
  };
};