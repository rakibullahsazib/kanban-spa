export const checkStringLimit = (str: string, limit: number): string => {
  let output = str.trim() 
  if (output.length > limit) {
    output = output.substring(0, limit)
  }
  return output
}