interface hasOrderProperty {
  id: string;
  order: number
}

export const updateOrdersInArr = (arr: hasOrderProperty[]) => {
  const updatesNeeded : hasOrderProperty[] = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].order !== i + 1) {
      arr[i].order = i + 1
      updatesNeeded.push({
        id: arr[i].id,
        order: i + 1
      })
    }
  }
  return updatesNeeded
  // this return value only contains the values that need to be updated. This data will be used to send data to the api
}