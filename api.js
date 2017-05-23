const API_URL = 'http://localhost:8080'
const TESTING_ARRAY = [ 0, 1, 2, 3, 4, 5 ]

export const getArray = () => fetch(`${API_URL}/numbers`)

export const getArrayForTesting = () => new Promise(resolve =>
  setTimeout(() => resolve(TESTING_ARRAY)), 1000)
