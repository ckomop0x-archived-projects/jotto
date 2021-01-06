import fs from 'fs'
import path from 'path'

export default (req, res) => {
  const dirRelativeToPublicFolder = 'data'

  const dir = path.resolve('./', dirRelativeToPublicFolder);

  const fileContents = fs.readFileSync(path.join(dir, './five-letter-words.json'), 'utf-8');

  // read words from json file
  const words = JSON.parse(fileContents);
  const { fiveLetterWords } = words;
  const word = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)]

  res.statusCode = 200
  res.send(word);
}
