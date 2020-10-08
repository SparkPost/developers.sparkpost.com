import { last, get } from 'lodash'
import fury from '@apielements/core'

export default function mergeDuplicateTransactions(transactions) {
  const transactionsArray = transactions.map(transition => transition.clone())

  // get all the unique transactions based on their request.
  // For every identical transaction after, add its response to the first one
  const uniqueTransactions = transactionsArray.reduce((arr, transaction) => {
    // first element will always be unique
    if (arr.length === 0) return [transaction]

    const lastTransaction = last(arr)

    // TODO: also check against the method and headers
    if (
      get(lastTransaction.request.messageBody, 'content') ===
      get(transaction.request.messageBody, 'content')
    ) {
      // we are setting up a responses array since we are adding this response onto the last request
      lastTransaction.responses = lastTransaction.responses || [
        lastTransaction.response,
      ]

      lastTransaction.responses.push(transaction.response)

      return arr
    }

    return [...arr, transaction]
  }, [])

  return fury.minim.toElement(uniqueTransactions)
}
