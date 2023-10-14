// алгоритм бинарного поиска. 
let mas = [1,2,3,4,5,14,7,8,9,10];
function BinarySearch(arr, value){
    //границы поиска
    let start = -1;
    let end = arr.length;
    //цикл
    while(end - start > 1){
        const mid = Math.floor((start+end)/2);
        if(value === arr[mid]){
            //возвращаем индекс нужного элемента.
            return mid; 
        }
        else if(value < arr[mid]){
            end = mid;
        }
        else{
            start = mid;
        }
        
    }
    return -1;
} 
console.log(BinarySearch(mas, 2));
//
//
//
//
//
//
//
//