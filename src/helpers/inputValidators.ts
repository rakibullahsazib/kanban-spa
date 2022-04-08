export const validateEmailAddress = (value: string): boolean => {
  if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
    return true
  }
  return false
}

export const findPasswordError = (value: string, min: number, max?: number, badWords?: string[]): string => {
  // min, max are integers for password length
  // badWords is an array of strings which the password can not contain
  // Check for minimum length
  if (min && value.length < min) {
    return `Password must contain at least ${min} characters`
  }
  // Must contain at least one lowercase
  if (!/(?=.*[a-z]).+$/.test(value)) {
    return 'Password must contain at least one lowercase(a-z) character, one uppercase(A-Z) character and one number (0-9) and one symbol.'
  }
  // Must contain at least one uppercase
  if (!/(?=.*[A-Z]).+$/.test(value)) {
    return 'Password must contain at least one uppercase(A-Z) character and one number (0-9) and one symbol.'
  }
  // Must contain at least one number
  if (!/(?=.*[0-9]).+$/.test(value)) {
    return 'Password must contain at least one number (0-9) and one symbol.'
  }
  // Must contain at least one symbol
  const format = /[!@#$%^&*()_+\-={}[/\];':"\\|,.<>?]+/
  if (!format.test(value)) {
    return 'Password must contain at least one symbol.'
  }
  // Check for badWords
  if (badWords && badWords.length) {
    for (const badWord of badWords) {
      if (value.indexOf(badWord) > -1) {
        return 'Password cannot contain part of username or email address'
      }
    }
  }
  // Check for max length
  if (max && value.length > max) {
    return `Password can not contain more than ${max} characters`
  }
  return ''
}