export async function getQuestions () {
  const response = await fetch('https://kevg1t.github.io/JavaScriptQuizz/questions.json')
  const data = await response.json()
  return data
}
