var botgram = require("botgram");
var bot = botgram("310243342:AAFPreg-o20SgyO4-txB3XOzdZJiJO8vD6I");
var publicBase = "https://lupita-tinchou.c9users.io:" + process.env.PORT;
var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');

console.log("listening on " + publicBase);

bot.command("start", function (msg, reply, next) {
  reply.game("lupita");
});


bot.command("play", function (msg, reply, next) {
  console.log("lupita");
  reply.text("puto");
});

bot.command(function (msg, reply, next) {
  reply.text("Invalid command.");
});

bot.callback(function (query, next) {
  query.answer({
    url: url.resolve(publicBase, "/index.html")
  });
});

bot.text(function (msg, reply, next) {
  reply.text(msg.text + " you");
});

http.createServer(function(req, res) {
  var readStream = fs.createReadStream("./index.html");
  // We replaced all the event handlers with a simple call to readStream.pipe()
  readStream.pipe(res);
}).listen(process.env.PORT);
