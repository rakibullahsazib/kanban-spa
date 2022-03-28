export const checkStringLimit = (str: string, limit: number): string => {
  let output = str.trimStart() 
  if (output.length > limit) {
    output = output.substring(0, limit)
  }
  return output
}

export const getInitials = (name: string) => {
  // input: 'John Doe' output: 'JD'
  // input: 'John' output: 'J'
  // input: 'John Doe Walker' output: 'JD'
  const splittedName = name.split(' ')
  let initials = ''
  if (splittedName[0]) initials += splittedName[0][0]
  if (splittedName[1]) initials += splittedName[1][0]
  return initials
}