# useState

## Ek Line Mein
Component mein local state store karne ka sabse basic hook.

## Syntax
```tsx
const [state, setState] = useState<Type>(initialValue);
```

## Kab Use Karun?
- Component ka apna local data ho
- UI toggle (open/close, show/hide)
- Form input values
- Counter, timer

## Simple Examples

### Basic Counter
```tsx
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};
```

### Object State
```tsx
const [user, setUser] = useState<{name: string; age: number}>({
  name: "",
  age: 0,
});

// ✅ Sahi tarika — spread operator use karo
setUser(prev => ({ ...prev, name: "Rahul" }));

// ❌ Galat — pura object replace ho jaayega
setUser({ name: "Rahul" });
```

### Toggle Example
```tsx
const [isOpen, setIsOpen] = useState<boolean>(false);

// ✅ Best practice — functional update
const toggle = () => setIsOpen(prev => !prev);
```

## Common Mistakes

### Mistake 1: Direct State Mutate Karna
```tsx
// ❌ Galat
const [items, setItems] = useState([1, 2, 3]);
items.push(4); // React ko pata nahi chalega!

// ✅ Sahi
setItems(prev => [...prev, 4]);
```

### Mistake 2: Stale State
```tsx
// ❌ Galat — stale value
setCount(count + 1);
setCount(count + 1); // dono same value use karenge!

// ✅ Sahi — functional update
setCount(prev => prev + 1);
setCount(prev => prev + 1); // correctly 2 baar badhega
```

### Mistake 3: Object State Merge Bhool Jana
```tsx
// ❌ Galat
setUser({ name: "Rahul" }); // age gone!

// ✅ Sahi
setUser(prev => ({ ...prev, name: "Rahul" }));
```

## Interviewer Ko Impress Karne Wali Line
"useState mein functional update isliye use karta hun
kyunki jab multiple setState calls ek saath hoti hain,
React unhe batch karta hai — stale state ka
risk functional update se khatam ho jaata hai."

## Follow-up Questions
1. useState vs useReducer kab use karein?
2. State batching kya hai React 18 mein?
3. Lazy initialization kya hoti hai useState mein?

## Lazy Initialization (Bonus Point)
```tsx
// ❌ Har render pe expensive function chalega
const [data, setData] = useState(expensiveFunction());

// ✅ Sirf pehli baar chalega
const [data, setData] = useState(() => expensiveFunction());
```

## Quick Revision
| Concept | Yaad Rakho |
|---|---|
| Basic syntax | const [val, setVal] = useState(init) |
| Object update | spread operator use karo |
| Safe update | functional form use karo |
| Performance | lazy initialization use karo |