export function chunkArray(arr: any[], chunkCount: number) {
  const result = arr.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/chunkCount)
  
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }
  
    resultArray[chunkIndex].push(item)
  
    return resultArray
  }, [])
  return result;
}
