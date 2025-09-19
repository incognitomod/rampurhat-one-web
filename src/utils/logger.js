export function safeAsync(fn, context = '') {
  return async (...args) => {
    try {
      return await fn(...args)
    } catch (err) {
      console.error(`❌ [${context}]`, err)
      alert(`Error in ${context}: ${err.message}`)
      throw err
    }
  }
}
