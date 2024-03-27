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

const str1 = '12321';
const str2 = '123321';
const str3 = '123';

function isPalindrome(string) {
  let isPalindrome = false;

  let left = 0;
  let right = string.length - 1;

  while (left <= right) {
    if (string[left] === string[right]) {
      isPalindrome = true;
    } else {
      break;
    }
    right--;
    left++;
  }
  return isPalindrome;
}

console.log(isPalindrome(str1));

//поиск дубликатов
var containsDuplicate = function (nums) {
  const newNums = Array.from(new Set(nums));
  return nums.length === newNums.length ? false : true;
};
