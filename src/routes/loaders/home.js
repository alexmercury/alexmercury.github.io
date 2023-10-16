export default async function homeLoader () {
  const response = await fetch("data/home.json")
  const data = await response.json()

  return data
}