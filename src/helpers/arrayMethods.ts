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