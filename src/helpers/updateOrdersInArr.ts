import { HasOrderAndId } from "../store/interface/common.interface"

// We need to arrange the orders in such a way so that when a new item is added we don't need to change orders to all of them. Therfore, we are considering higher order number to be higher priority.
export const updateOrdersInArr = (arr: HasOrderAndId[]) => {
  const updatesNeeded : HasOrderAndId[] = []
  const l = arr.length
  for (let i = 0; i < l; i++) {
    if (arr[i].order !== l - i) {
      arr[i].order = l - i
      updatesNeeded.push({
        id: arr[i].id,
        order: l - i
      })
    }
  }
  return updatesNeeded
  // this return value only contains the values that need to be updated. This data will be used to send data to the api
}