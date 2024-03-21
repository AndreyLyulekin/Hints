// Debounce
// для того, что-бы функция была вызвана только после
// определенной паузы. Предыдущие вызовы будут отменены, и функция будет вызвана только один раз.
const debounce = () => {
  let timerID;
  return function () {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      //logic
    }, 1000);
  };
};

// Throttle
// что-бы функция вызывалась не чаще,
// чем в какой-то интервал времени.
function throttle(func, delay) {
  let timeoutId;

  return function () {
    if (!timeoutId) {
      // вызываем функцию сразу
      func.apply(this, arguments);

      // задержка перед следующим вызовом
      timeoutId = setTimeout(() => {
        timeoutId = undefined;
      }, delay);
    }
  };
}

// Двойной указатель
// линейная сложность O(n)
function findTwoSum(arr, target) {
  const result = [];
  //если результатов больше одного

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      result.push([arr[left], arr[right]]);
      right--;
      left++;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return result;
}
