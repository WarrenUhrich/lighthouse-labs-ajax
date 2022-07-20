# Lighthouse Labs | Ajax

* [X] What is Ajax?
* [ ] Using Ajax
    * [ ] Vanilla
    * [ ] jQuery

## What is Ajax?

* Asynchronous JavaScript and XML

### Pros

* Smaller requests are faster (improved response times)
* Snappier user experience (no page reload)
* Less URLs to click through, more dynamic
* Async allows for multiple requests to queue at once
* Reduces server load (the client can format and display the response)

### Cons

* It can be trickier / require more planning to implement
* We have to use an Async mindset
* You have to know, or experiment, to understand the format of the response data
* History is not updated on its own
* Method of Ajax may matter for backwards compatibility purposes

## How can we use Ajax?

* Vanilla:
    * `XMLHttpRequest`
    * `fetch()`
* Libraries:
    * `jQuery.ajax()`
    * `axios`
