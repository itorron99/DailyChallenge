### Santa 🎅 has received a list of magic numbers representing gifts 🎁, but some of them are duplicated and should be remove to avoid confusion. Also, the gifts should be sorted ascending order before giving them to the elves.

---

**Rules**:

- Given an array of gifts, you must sorted ascending order before giving them to the elves.
- Each gift could be a number, undefined, string... However, you must return an array of numbers or an empty array.

---

**Example:**

`prepareGifts([3, 1, 2, 3, 4, 2, 5])`

```
[1, 2, 3, 4, 5]
```

---

`prepareGifts([6, 5, 5, 5, 5])`

```
[5, 6]
```

---

`prepareGifts([])`

```
[]
```

---

`prepareGifts(["fizz", 4, undefined, null, 2, "1", NaN, -1, 0 / 0])`

```
[-1, 2, 4]
```
