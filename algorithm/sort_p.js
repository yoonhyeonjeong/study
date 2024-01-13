// bubble sort


var arr = [5, 3, 8, 2, 1];
function bubble(arr){
    var len = arr.length;
    // arr-length-1 만큼 순회
    for(let i = 0; i < len-1; i++){
        // 원소, 그옆에원소 비교
        for(let j = 0; j < len-1; j++){
            // 현재원소가 그 다음원소보다 크면 자리바꿈
            if(arr[j] > arr[j+1]){
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

// console.log(bubble(arr))

// selection sort
// 최솟값 찾아서 그 원소와 위치 교환 

function selection(arr){
    var len = arr.length;
    //마지막 숫자는 자동정렬
    for(let i = 0; i < len -1; i++){
        var minIndex = i;
        for(let j = i+1; j < len; j++){
            console.log(arr[j],arr[minIndex])
            // 현재 값이 최소값보다 작으면
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
            // 최소값과 현재 위치의 원소 교환
            const temp = arr[j]
            arr[j] = arr[minIndex]
            arr[minIndex] = temp;
        }
        
    }
    return arr;
}

console.log(selection(arr))

function insertSort(arr){
    var len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] >= arr[j - 1]) break
            const temp = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temp
        }
    }

    return arr
}