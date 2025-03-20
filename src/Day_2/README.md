### Santa 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must meet specific rules. Your task is to help the elves to generate this magical frame.

---

**Rules**:

- Given an array of names, you must create a rectangular frame containing them all.
- Each name must be on one line, left-aligned.
- The frame is constructed with a one-line wide border.
- The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.

---

**Example:**

`createFrame(['fizz', 'fizzbuzz', 'fizzbuzzzzz'])`

```
***************
* fizz        *
* fizzbuzz    *
* fizzbuzzzzz *
***************
```

---

`createFrame(['fizz'])`

```
********
* fizz *
********
```

---

`createFrame(['buzz', 'bb', 'fizzbuzz'])`

```
************
* buzz     *
* bb       *
* fizzbuzz *
************
```
