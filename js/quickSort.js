let arr = [87,64,32,12,1,-324,0]
quickSort(0,arr.length-1,arr);
console.log(arr);

function quickSort(low,high,array) {
    if (low>=high) {
        return;
    }
        let pivot = Math.floor(low + (high-low)/2)
        let start = low;
        let end = high;

        while (start <= end) {
            while (array[start]<array[pivot]) {
                start++;
            }
            while (array[end]>array[pivot]) {
                end--;
            }
            if (start<=end) {
                swap(start,end,array)
                start++
                end--
            }
        }
        quickSort(low,end,array)
        quickSort(start,high,array)
    }

function swap(a,b,arr) {
    let temp = arr[a]
    arr[a] = arr[b];
    arr[b] = temp;
}