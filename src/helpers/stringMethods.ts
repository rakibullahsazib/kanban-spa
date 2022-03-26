export const checkStringLimit = (str: string, limit: number): string => {
  let output = str.trimStart() 
  if (output.length > limit) {
    output = output.substring(0, limit)
  }
  return output
}