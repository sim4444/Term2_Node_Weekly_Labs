const wordPosition = (words) => {
    const wordPositions = {};
  
    words.forEach((word, index) => {
      if (wordPositions[word]) {
        wordPositions[word].push(index);
      } else {
        wordPositions[word] = [index];
      }
    });
  
    return wordPositions;
  };
  
  const input = [
    "buy",
    "it",
    "use",
    "it",
    "break",
    "it",
    "fix",
    "it",
    "trash",
    "it",
    "change",
    "it",
    "mail",
    "upgrade",
    "it",
  ];
  
  const output = wordPosition(input);
  console.log(output);
  