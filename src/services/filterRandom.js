export default function filterRandom(characters, randomCharacter) {
  const randomNumber = Math.random() * characters.length
  if (randomCharacter) return (character, index) => randomNumber === index
}
