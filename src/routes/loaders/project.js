import { redirect } from "react-router-dom"

export default async function projectLoader ({ params }) {
  const response = await fetch(`data/projects/${params.projectId}.json`)
  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    return redirect("/")
  }
}