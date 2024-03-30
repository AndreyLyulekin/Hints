// Оценка сложности по скорости/операциям
// O(1) константная - не важно сколько данных на входе ПРИМЕР: получить последний эл массива
// O(n) линейная - 10 вход данных = 10 операций
// O(log n) логарифмическая - 100 вход данных - 7 операций || 10_000 = 14 (бинарный поиск)
// O(n"2) - квадратичная - 10_000 = 100_000_000 || 10 = 100, цикл в цикле
// O(n"3) - кубическая - 10_000 = 1_000_000_000_000 || 10 = 1_000, три вложенных цикла
// O(2"n) - экспонинциальная - дохера
// O(n!) - факториал 3 * 2 * 1 = 6 || 5 * 4 * 3 * 2 * 1 = 120

// Оценка сложности по памяти
// O(1) константная - не важно сколько данных на входе ПРИМЕР: получить последний эл массива
// O(n) линейная - 10 вход данных = 10 операций - копирование массива

//Вопросы,
// какие крайние кейсы?
// какие требования по памяти или скорости?

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

// Палиндром

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

// создаем СЛОВАРИК + АНАГРАМ
function buildDictionary(str) {
  let dictionary = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (dictionary[letter]) {
      dictionary[letter]++;
    } else {
      dictionary[letter] = 1;
    }
  }
  return dictionary;
}

//сам АНАГРАМ
let s = 'anagram';
let t = 'naGaram';

let isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  s = s.toLowerCase();
  t = t.toLowerCase();

  let sDictionary = buildDictionary(s);
  let tDictionary = buildDictionary(t);

  for (let letter in sDictionary) {
    if (sDictionary[letter] != tDictionary[letter]) {
      return false;
    }
  }

  return true;
};

// ИЛИ В ОДНУ СТРОКУ

let isAnagram2 = (s, t) => [...s.toLowerCase()].sort().toString() === [...t.toLowerCase()].sort().toString();
