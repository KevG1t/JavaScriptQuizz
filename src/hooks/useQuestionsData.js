import { useQuestionsStore } from '../store/questions'

export const useQuestionsData = () => {
  const questions = useQuestionsStore(state => state.questions)

  let correct = 0
  let incorrect = 0
  let unanswered = 0

  questions.forEach(question => {
    const { userSelectedOption, correctOption } = question
    if (userSelectedOption == null) unanswered++
    else if (userSelectedOption === correctOption) correct++
    else incorrect++
  })
  return { correct, incorrect, unanswered }
}
