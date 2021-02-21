export default function filterRandom(characters, randomCharacter) {
  const randomNumber = Math.random() * characters.length
  if (randomCharacter === true)
    return (character, index) => randomNumber === index
}
