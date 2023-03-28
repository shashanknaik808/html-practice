// getting-started.js
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shashankKart');
    //   We are connected 
    // console.log("We are connected bro/sis")
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const kittySchema = new mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

const kittens = mongoose.model('kittens', kittySchema);

const silence = new kittens({ name: 'Silence' });
const silence2 = new kittens({ name: 'Silence2' });
// console.log(silence.name); // 'Silence'
// silence.speak();

// const fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"

silence.save();
// silence.speak();
silence2.save();
// silence2.speak();

kittens.find( {name: "Silence2"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens)
})