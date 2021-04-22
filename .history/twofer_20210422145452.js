// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

// 1. Complete the function in [`twofer.js`](./twofer.js) so that it returns "Two for me and one for you" when no arguments are passed\
// e.g\
// `console.log(twofer("Fran")) ---> "Two for me and one for Fran" ` \
// `console.log(twofer()) ---> "Two for me and one for you" `

const twofer = (who) => {
  if (who == "") {
    who = who.push("you");
  }
  return `Two for me and one for ${who}`;
};

console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"
