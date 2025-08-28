# JavaScript Answers

## Ans-01: Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll

- `getElementById('id')`  
  Selects a **single element** with the given ID. Returns a single element.

- `getElementsByClassName('class')`  
  Selects **all elements** with the given class. Returns an **HTMLCollection** (live collection).

- `querySelector('selector')`  
  Selects the **first element** that matches a CSS selector.

- `querySelectorAll('selector')`  
  Selects **all elements** matching the CSS selector. Returns a **NodeList**.

---

## Ans-02: create and insert a new element into the DOM

```html
<body>
  <div id="parent"></div>

  <script>
    const newDiv = document.createElement("div");
    newDiv.className = "html-container";
    newDiv.innerHTML = `
            <h1 style="text-align: center; font-weight: bold;">Hello World</h1>
        `;
    const addHtml = document.getElementById("parent");
    addHtml.appendChild(newDiv);
  </script>
</body>
```

## Ans-03: Event Bubbling:

`When an event occurs on an element, it bubbles up from the target element to its ancestors.`
Example: _Button click_ করলে প্রথমে _button_ এর _handler_ চলে _parent grandparent_ শেষ পর্যন্ত `<body>` বা `<html>` এ পৌঁছায়।

## Ans-04: Event Delegation:

অনেক **child element** এ listener দেয়ার পরিবর্তে, **parent element** এ একটি **listener** বসানো হয় এবং **event.target** ব্যবহার করে **child handle** করা হয়। এর উপকারিতা হলো **Memory** কম লাগে এবং **Dynamic element** এর জন্যও কাজ করে

## Ans-5: Difference between preventDefault() and stopPropagation()-

1. `preventDefault(): Event এর default behavior আচরণ বন্ধ করে।`
   যেমন: <a> link click করলে normally page navigate করে, কিন্তু preventDefault() দিলে navigate বন্ধ হবে।

2. `stopPropagation(): Event bubbling বন্ধ করে।`
   যেমন: **Child element click** করলে parent handler fire হবে না যদি **stopPropagation()** use করা হয়।
