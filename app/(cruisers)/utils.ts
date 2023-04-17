export function chunkArray(arr: any[], chunkCount: number) {
  const result = arr.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/chunkCount)
  
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }
  
    resultArray[chunkIndex].push(item)
  
    return resultArray
  }, [])
  return result;
}