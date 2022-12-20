
function bubbleSort(arr) {

    // Iterate through the array
    let swaps = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i+1]){
        [arr[i+1], arr[i]] = [arr[i],arr[i+1]];
        console.log(arr.join(","));
        swaps++;
      }
    }
    if(swaps == 0){
      return;
    }
    else{
      bubbleSort(arr);
    }

      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;