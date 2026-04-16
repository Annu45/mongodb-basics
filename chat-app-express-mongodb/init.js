const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
  .then(() => console.log("connection successful"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChats=[
  {
    from: "Annu",
    to: "Aarzoo",
    msg: "Send me your exam sheets",
    created_at: new Date()
  },
  {
    from: "Aarzoo",
    to: "Annu",
    msg: "Okay, I’ll send in 5 minutes",
    created_at: new Date()
  },
  {
    from: "Annu",
    to: "Sandhya",
    msg: "Are you coming to class today?",
    created_at: new Date()
  },
  {
    from: "Sandhya",
    to: "Annu",
    msg: "No, I’m not feeling well",
    created_at: new Date()
  },
  {
    from: "Annu",
    to: "Anshi",
    msg: "Did you complete the assignment?",
    created_at: new Date()
  }
];
Chat.insertMany(allChats);