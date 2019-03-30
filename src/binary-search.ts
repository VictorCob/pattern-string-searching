function binSearch(sortedArray:[], element:any) {
    return new Promise((resolve,reject)=>{
        let start = 0;
        let end = sortedArray.length - 1;
        let middle = Math.floor((start + end) / 2);
        while (sortedArray[middle] !== element && start <= end) {
            if (element < sortedArray[middle]) {
                end = middle - 1;
            }
            else {
                start = middle + 1;
            }
            middle = Math.floor((start + end) / 2);
        }
        if (sortedArray[middle] === element){
            resolve(middle);
        }else{
            resolve(-1);
        }
    })
}

export {binSearch}