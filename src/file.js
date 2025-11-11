// const index = require("../index.js");

const greeting = () => {
  console.log("Hello World From File");
};

const myNumber = 100;

// module.exports = {
//   //   greeting: greeting,
//   greeting,
//   //   myNumber: myNumber,
//   myNumber,
// };

const myObject = {
  //   greeting: greeting,
  greeting,
  //   myNumber: myNumber,
  myNumber,
};
// default export
export default myObject;
// named export
export const isMarried = false;
