const typewriter = function(sentence) {
  let delayTime = 0;
  for (const char of sentence) {
    setTimeout(() => process.stdout.write(char), delayTime);
    delayTime += 100;
  }
  setTimeout(() => console.log('\n'), delayTime);
};

const sentence = "Hello there from lighthouse labs";
typewriter(sentence);