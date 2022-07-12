# Lighthouse Labs | Ajax

* [ ] What is Ajax?
* [ ] Using Ajax
    * [ ] Vanilla
    * [ ] jQuery

## What is Ajax?

* Asynchronous JavaScript And XML
* Update data in a web page without hitting "refresh"

### Pros to using Ajax?

* Can cut down on load times (just data or part of a page, opposed to a WHOLE page)
* Snappier / more interactive user experience
* No need for timely reload operations
* Page can feel more dynamic, with DOM we can update, create, and delete HTML page elements
* Can submit form fields via Ajax instead of a traditional form submission
* Offload efforts to client devices (focus on data for faster load times instead)

### Cons to using Ajax?

* Makes it much more difficult to debug your code
* Adds complexity (async harder write; dynamic content in general is trickier)
* Potential for more security holes if you're not careful
* Search Engine Optimization impacted (dynamic elements)
* History is not kept track of (doesn't appear in the address bar)
* Might have to configure CORS for security

### Methods of Ajax

* XMLHttpRequest
* fetch
* jQuery.ajax()
