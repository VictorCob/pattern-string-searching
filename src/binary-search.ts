export = function binarySearch(arr:Array<any>, elem:number) {
    return new Promise((resolve,reject)=>{
        let start = 0;
        let end = arr.length - 1;
        let middle = Math.floor((start + end) / 2);
        while (arr[middle] !== elem && start <= end) {
            if (elem < arr[middle]) {
                end = middle - 1;
            }
            else {
                start = middle + 1;
            }
            middle = Math.floor((start + end) / 2);
        }
        if (arr[middle] === elem){
            resolve(middle);
        }else{
            resolve(-1);
        }
    })
}