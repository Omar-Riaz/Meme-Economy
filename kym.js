const nodeyourmeme = require('nodeyourmeme');

//add 10 random memes to the db
for(let i = 0; i < 10; i++){
  nodeyourmeme.random().then((value) => {
    console.log("added following meme to DB: " + value);
  }, (err) => {
    console.log("what the fucc");
    console.log(err);
  });
}
