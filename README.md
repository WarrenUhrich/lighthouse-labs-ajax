# Lighthouse Labs | Ajax

* [X] What is Ajax?
* [ ] Using Ajax
    * [ ] Vanilla
        * `XMLHttpRequest`
        * `fetch`
    * [ ] jQuery
    * `axios`

## Pros of Ajax?

* Faster UX (no need for a full page reload)
* Initial pageload can be quicker, other stuff can be loaded after
* Infinite scrolling can keep a user on the site longer
* Multiple animations / different can be viewed without page reload
* Less data transfer from server to client (reduced server load)
* All major browsers have Ajax implemented!
* Asynchronous... we could have many requests queued and dealt with at once!
* Ajax / client-side JS is back-end agnostic

## Cons of Ajax?

* Won't be able to share or bookmark the dynamic content (without a lot of additional considerations from the developer) / history not updated by default
* Backwards compatibility concerns could arise if  we're going aways back
* There could be security concerns (look into CORS)
* Async mindset
* Additional work / planning involved (added complexity)
* Can be harder to debug
* Might result in more JS code and/or files