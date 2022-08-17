# Lighthouse Labs | Ajax

* [X] What is Ajax?
* [ ] Using Ajax
    * [ ] Vanilla
    * [ ] jQuery

## Pros of Ajax?

* No refreshes, don't need to wait for a brand new page load!
* Easier / smoother user experience; convenient (for the user!)
* Smaller requests / responses—feels snappier, we can populate pieces at a time.
* More engagement from users.
* It often means fewer "pages" to click through for the user.
* We can queue multiple requests at once.
* Reduces the server-side load (the client might as well do some of the work!)
* Built-in to JavaScript!

## Cons of Ajax?

* If too much information is loaded it can become overwelming.
* There is not really a history, or repeatable address to find the same content again.
* (In extreme cases) backwards compatibility.
* You have to use an Async mindset.
* More complex / tricky to program - often involves DOM, form data, etc.

## AJAX - Asynchronous JavaScript and XML

```JSON
{
    "name": "JavaScript"
}
```

## How can we use Ajax?

* Vanilla:
    * `XMLHttpRequest`
    * `fetch()`
* Libraries:
    * `jQuery.ajax()`
    * `axios`
