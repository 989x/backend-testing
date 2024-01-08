function getQuestionPart(phrases: string[]): string[] {
  // console.log('Start');
  // console.log('phrases ->', phrases);

  // Check every letter in the phrases and find duplicates
  const allLetters = phrases.join('').split('');
  const duplicates = new Set<string>();
  const uniqueLetters = new Set<string>();

  allLetters.forEach((letter, index) => {
    if (allLetters.indexOf(letter) !== index) {
      // Letter is a duplicate
      duplicates.add(letter);
    }
    uniqueLetters.add(letter);
  });

  // Convert duplicates set to an array
  const duplicateArray = Array.from(duplicates);
  // console.log('duplicateArray ->', duplicateArray);

  // Create phrases from the duplicates
  const duplicateWord = duplicateArray.join('');
  // console.log('duplicateWord ->', duplicateWord);

  // Ensure that the duplicate letters are present in all phrases
  const validDuplicateLetters = duplicateArray.filter((letter) =>
    phrases.every((word) => word.includes(letter))
  );
  // console.log('Valid Duplicate Letters ->', validDuplicateLetters);

  // Rearrange letters to find other possible phrases
  const possiblePhrases: string[] = [];
  function rearrange(remaining: string, current: string) {
    if (remaining.length === 0) {
      possiblePhrases.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const nextChar = remaining[i];
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      rearrange(newRemaining, current + nextChar);
    }
  }

  rearrange(validDuplicateLetters.join(''), '');

  // Remove duplicate word and other possible phrases from all phrases
  const updatedPhrases = phrases.map((word) => {
    let updatedWord = word;
    possiblePhrases.forEach((possible) => {
      updatedWord = updatedWord.replace(new RegExp(possible, 'g'), '');
    });
    return updatedWord.trim(); // Trim spaces from the beginning and end of the word
  });

  // console.log('updatedPhrases ->', updatedPhrases);

  return updatedPhrases;
}

// Examples
const result1 = getQuestionPart(['BATHROOM', 'BATH SALTS', 'BLOODBATH']);
console.log('Result1', result1); // Output: ['ROOM', 'SALTS', 'BLOOD']

const result2 = getQuestionPart(['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP']);
console.log('Result2', result2); // Output: [ 'BE', 'GIRL', 'SHIP' ]
