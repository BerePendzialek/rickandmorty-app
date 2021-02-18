export default async function getAllCharacters({ url, setCharacters }) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // data is this object: {info: ..., results: ...}
      setCharacters(oldState => [...oldState, ...data.results])

      const nextUrl = data.info.next // contains the next url, if it exists
      nextUrl && getAllCharacters(nextUrl) // if nextUrl exists, fetch it
    })
}
