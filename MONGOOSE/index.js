const mongoose = require('mongoose');

//Connect to MongoDB (returns a Promise)
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => console.log("Connection successful"))
.catch(err => console.log("Connection error:", err));

//  Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

//  Models
const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);

//  Create users
const user1 = new User({
    name: "Annu",
    email: "annumathur003@gmail.com",
    age: 21,
});

const user2 = new User({
    name: "Ana",
    email: "annumathur004@gmail.com",
    age: 22,
});

//  Save one user
user2.save()
.then(res => console.log("Saved:", res))
.catch(err => console.log(err));

//  Insert many
User.insertMany([
    { name: "Anu", email: "anu23@gmail.com", age: 20 },
    { name: "Anshi", email: "anshi123@gmail.com", age: 22 },
    { name: "Anamika", email: "anamika443@gmail.com", age: 23 },
])
.then(res => console.log("Inserted many:", res))
.catch(err => console.log(err));

//  Find
User.find({ age: { $gt: 21 } })
.then(res => {
    if (res.length > 0) {
        console.log("Found:", res[0].name);
    }
})
.catch(err => console.log(err));

//  Update one
User.updateOne({ name: "Ana" }, { age: 43 })
.then(res => console.log("Update one:", res))
.catch(err => console.log(err));

//  Update many
User.updateMany({ age: { $gt: 22 } }, { age: 55 })
.then(res => console.log("Update many:", res))
.catch(err => console.log(err));

//  Find and update
User.findOneAndUpdate({ name: "Annu" }, { age: 42 }, { new: true })
.then(res => console.log("Updated user:", res))
.catch(err => console.log(err));

//  Delete
User.deleteOne({ name: "Anamika" })
.then(res => console.log("Deleted:", res))
.catch(err => console.log(err));