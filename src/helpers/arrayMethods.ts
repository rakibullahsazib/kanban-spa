import { HasOrderAndId } from "../store/interface/common.interface";

export const getMaxOrder = (arr: HasOrderAndId[]) : number => {
  let maxOrder = 1
  for (const item of arr) {
    if (item.order > maxOrder) {
      maxOrder = item.order
    }
  }
  return maxOrder;
}
export const isNameDuplicatedCaseInsensitive = (name: string, arr: {name: string}[]): boolean => {
  for (const item of arr) {
    if (item.name.toLowerCase() === name.toLowerCase()) {
      return true
    }
  }
  return false
}