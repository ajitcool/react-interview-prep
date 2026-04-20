# Infosys Frontend Interview Questions with Answers

## 1. Sort words by length
### Question
Write a function that accepts a string and returns the words sorted from longest to shortest.

### Answer
```js
function arrangeStringByLength(text) {
  return text
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .join(" ");
}

const data = "React is a javascript library";
console.log(arrangeStringByLength(data));
// Output: "javascript library React is"
```

### Explanation
- `split(" ")` converts the string into an array of words.
- `sort((a, b) => b.length - a.length)` sorts words in descending order by length.
- `join(" ")` creates a string again.
- Useful for problems requiring ordering by string length.

---

## 2. Count duplicate elements in an array
### Question
Write a function that counts how many times each element appears in an array.

### Answer
```js
function countDuplicates(items) {
  const result = {};
  for (const item of items) {
    result[item] = (result[item] || 0) + 1;
  }
  return result;
}

const data = ["a", "b", "a", "c", "b", "b"];
console.log(countDuplicates(data));
// Output: { a: 2, b: 3, c: 1 }
```

### Explanation
- Use an object as a frequency map.
- `result[item] || 0` gives `0` when the key does not exist.
- Add `1` for each occurrence.
- This is common in interview questions about counting frequencies.

---

## 3. Flatten a nested array recursively
### Question
Write a recursive function to flatten a nested array of unknown depth.

### Answer
```js
function flatten(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flatten(curr));
    }
    return acc.concat(curr);
  }, []);
}

const input = [1, 2, [3, 4], [5, [6, 7]], 8];
console.log(flatten(input));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

### Explanation
- `reduce()` processes every element.
- If the current element is an array, call `flatten()` on it.
- Otherwise, add the element directly to the accumulator.
- Recursive solutions are great for nested structures.

---

## 4. Find intersection of two arrays
### Question
Write a function that returns common elements between two arrays.

### Answer
```js
function intersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(item => set2.has(item)))];
}

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
console.log(intersection(a, b));
// Output: [3, 4]
```

### Explanation
- Use a `Set` for fast lookup from the second array.
- Filter the first array by membership in the `Set`.
- Wrap with `new Set(...)` and spread to remove duplicates.
- This is a common technique for array intersection problems.

---

## 5. Check palindrome
### Question
Write a function to check if a string is a palindrome.

### Answer
```js
function isPalindrome(text) {
  const normalized = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}

console.log(isPalindrome("Madam"));
// Output: true
```

### Explanation
- Normalize the string by lowercasing and removing non-alphanumeric characters.
- Reverse the string and compare with the original normalized string.
- Palindromes read the same forwards and backwards.

---

## 6. Mask the last 4 characters
### Question
Write a function that masks the last 4 characters of a string with `#`.

### Answer
```js
function maskLast4(str) {
  if (str.length <= 4) return str;
  return str.slice(0, str.length - 4) + "#".repeat(4);
}

console.log(maskLast4("1234567890"));
// Output: "123456####"
```

### Explanation
- `slice(0, str.length - 4)` keeps the initial part.
- `"#".repeat(4)` creates four mask characters.
- This is useful for hiding sensitive data like card numbers.

---

## 7. Conditional sum using reduce
### Question
Write a function to sum only values greater than a threshold.

### Answer
```js
function sumGreaterThan(arr, threshold) {
  return arr.reduce((sum, value) => {
    return value > threshold ? sum + value : sum;
  }, 0);
}

console.log(sumGreaterThan([1, 2, 3, 5, 8], 4));
// Output: 13
```

### Explanation
- `reduce()` accumulates a total.
- Add the current value only if it passes the condition.
- Useful for filtering and summing in one pass.

---

## 8. Reverse words of a sentence
### Question
Write a function that reverses each word in a sentence but keeps word order.

### Answer
```js
function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("My name is Ajit"));
// Output: "yM eman si tija"
```

### Explanation
- Split sentence into words.
- Reverse each word individually.
- Join words back into a sentence.
- Great for string manipulation practice.

---

## 9. Debounce function
### Question
Implement a debounce function to delay callback execution.

### Answer
```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const save = debounce(() => console.log("Saved!"), 300);
window.addEventListener("resize", save);
```

### Explanation
- Debounce delays the function until user stops triggering events.
- Clear the previous timer on each call.
- Useful for scroll, resize, and search input handlers.

---

## 10. React state + effect example
### Question
Build a simple React component that fetches user data and displays a loader.

### Answer
```jsx
import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

### Explanation
- `useState` stores `users`, `loading`, and `error`.
- `useEffect` performs the API fetch once on mount.
- Manage loading and error states separately.
- This shows React lifecycle, async data fetching, and conditional rendering.
