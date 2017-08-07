# Website Performance Optimization Portfolio Project.

*This repo is for the Udacity Front End Web Developer Nanodegree Web Perf project. For this project, my goal is to reduce jank as much as physically possible, keep FPS >60, and hit 90+ on PageSpeed. And we've done so!*
___

## Main Site Optimization.
We used a specific set of optimizations for each of the four main pages.
___

##### 1. Image Optim.
Every image on the page was scaled down and compressed appropriately using tinyJPG. Certain images were shrunk down as well, as they wouldn't be displaying at any higher resolution. This includes one of the pizza pictures - duplicated and shrunk down the image in PS to match scale of the rest of the home page images.

##### 2. CSS Optim.
For the main pages, as they consistently used the same CSS, we ran the main css through a minifier and attached it in the header, allowing us to avoid render blocking without inflating the size of the document. We also gave the second print.css document a media tag for print, to avoid loading in the file with standard browsing.

##### 3. Script Movement / Async.
Any external JS files were given the async tag. Google Analytics JS was migrated down to the footer of each page, as it's not a crucial resource from the get-go.

___
## Pizza Site Optimization.
___

##### 1. CSS Optim. (repaint)
In order to keep the page from having to repaint on every scroll, we moved a few elements to new layers using `transform:translateZ(0);`. Specifically, these are the elements we've modified:

- `.mover`
- `.randomPizzaContainer`
- `#locations`
- `#ingredients`
- `#callToAction`

Adding this property to these elements keeps the page from having to repaint on a scroll. Now, the only time these elements will repaint is during the sizeSlider switch.

Similar to our main pages, as this is a single static page, we've minified the finalized CSS and inserted it into the header of the HTML document. Considering this is a single page site I believe that's the best choice.

##### 2. JS Optim.
Quick things out of the way first - ran the source main.js through a minifier then beautified it to clean up spacing as well as abstract out function parameters. (Helps me see think through it better.) Final JS is in a minified file to improve loading times.

Performance optimizations on the code itself include refactoring the `resizePizzas();` function, which was throwing multiple forced synchronous layouts over and over. We refactored the code along Cam's lines to A, reduce repetition, and B, only force one layout change.

This, combined with the CSS layers fix, brings it to a silky smooth 120FPS during testing.

##### 3. Image Optim.
Using tinyPNG/tinyJPG we've reduced all images down to the smallest lossless file possible.

___

###### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework.
