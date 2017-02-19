---
title:  "Responsive Images Meetup: Coming together is a beginning"
date:   2013-09-13
category: design
permalink: /blog/responsive-images-meetup-coming-together-is-a-beginning.html
image: responsive-images-meetup.jpg
---
Last time I talked about responsive images, I did mention I was due to go to the responsive images meetup in Paris, and as the long-awaited event happened a couple of days ago, I thought it would be nice to write a quick recap for the folks unable to make it.

### SIDE NOTE

Before we get to the the nitty gritty, let me start this blog post with a quick line on the venue. The meetup took place in Mozilla’s Paris headquarters, a superb office located boulevard Montmartre, in Paris’ 9th arrondissement. What a place this is! Two snaps for your eyes.

Mozilla really know how to welcome guests. Just saying.

### HIGH HOPES

Having received a teasing email from [Yoav](https://twitter.com/yoavweiss) a couple of days prior to the get-together, and seen a number of known representatives from Apple, Google, Mozilla, Microsoft and Adobe inked on the presence sheet (unfortunately Bruce Lawson from Opera was unable to make it), I was very much looking forward to this event. After all, the web community (especially the developers) had been waiting over two years for some clear stand on the subject of responsive images from the big players, while, in the mean time, and according to the latest stats, 72% of responsive websites were still serving the same amount of data to ANY device.

### USE CASES

The day started off with a pre-recorded presentation of the problem at hand from [RICG](http://responsiveimages.org/)‘s front man [Mat Marquis](https://twitter.com/wilto), and we quickly went to real case uses with an overview of the BBC and Akamai’s ways of handling the issue.

Very interesting to see what large scale companies had been implementing, especially since the BBC and its 83 millions monthly views (2.6 millions views per day), as [Mark McDonnell](https://twitter.com/integralist) explained, had been using none of the so-far-proposed solutions , but ‘a form’ of javascript-dependent responsive image system. Lightweight, fast working on all devices solution, and implemented since 2011.

I can only invite you to take a look at their project. The javascript is open-sourced and available on [Github](https://github.com/BBC-News/Imager.js/).

Next, [Guy Podjarny](https://twitter.com/guypod) took the stand to explain Akamai’s sophisticated content delivery acceleration techniques including smart delivery (with Edge Device Characterization) using patterns of characteristics drawn from a database of mobile devices, front-end optimization, the still-in-beta image converter allowing art direction, and adaptive image compression taking into account the network conditions to define the quality of the served content.

![Guy Podjarny](http://flopreynat.com/img/guy-podjarny.jpg "Guy Podjarny")

Quite a setup. Defo out of my league, and certainly destined to large scale sites. In a nutshell, not exactly what you would use to build the website of your local pub.

### A LOOK BACK AT THE PROPOSED SOLUTIONS

DPR switching, Viewport switching and Art direction on our minds, and a few coffees down our throats, we went ahead and reviewed the proposed solutions.

Apple’s [Theresa O'Connor](https://twitter.com/hober) presented the `srcset` attribute, which defines the various image resources to be used, and the clues to help a user agent determine the most appropriate one to display, already implemented (at least a limited version of it) by webkit.


```
<img alt="The Breakfast Combo"```<br>
```src="banner.jpeg"```<br>
```srcset="banner-HD.jpeg 2x, banner-phone.jpeg 100w, banner-phone-HD.jpeg 100w 2x">
```

The `picture` element presented by Mozilla’s [Marcos Caceres](https://twitter.com/marcosc), defining a declarative solution for grouping multiple versions of an image based on different criteria (format, resolution, orientation, and more), allowing the user agent to select the optimum image to be presented while providing the best solution (so far) for art direction.


```<picture width="500" height="500">```<br>
   ```<source media="(min-width: 45em)" src="large.jpg">```<br>
   ```<source media="(min-width: 18em)" src="med.jpg">```<br>
   ```<source src="small.jpg">```<br>
   ```<img src="small.jpg" alt="" lazyload>```<br>
   ```<p>Accessible text</p>```<br>
```</picture>```<br>


‘HTTP Client Hints’ presented by Google’s [Ilya Grigorik](https://twitter.com/igrigorik), which defines a set of HTTP headers allowing browsers to indicate a list of device and agent specific preferences, and drive servers to use these “client hints” to assist in content negotiation.
Ideal solution as the content served would match the environmental conditions of the client, ideal in the minimal developer effort sense (I knew you would love that one!), and also ideal as far as semantic is concerned (ie. a simple image tag ).

But... we would need to use a new header where we would define the devicePixelRatio (DPR) of the terminal (e.g. CH: dpr=2) to pass the relevant info to the server, the current UA header being unable to do that. More on client hints [here](https://www.igvita.com/2013/08/29/automating-dpr-switching-with-client-hints/).

The ‘SVG’s Switch element’ presented by W3C’s [Robin Berjon](https://twitter.com/robinberjon), [a solution](https://www.w3.org/TR/SVG2/struct.html#SwitchElement) already well supported today, already offering a built-in, working fallback. See his full presentation [here](http://berjon.com/presentations/20130910-ricg-switch/#/).


```<switch alt="Accessible text">```<br>
     ```<img media="(min-width: 45em)" src="large.jpg">```<br>
     ```<img media="(min-width: 18em)" src="med.jpg">```<br>
     ```<img src="small.jpg">```<br>
```</switch>```<br>


‘New Image Format’ presented by Yoav Weiss, a responsive image container containing internal layers which uses resizing and crop operations to deal with both resolution switching and art direction. In a nutshell, the encoder takes the original picture, the required output resolutions and if needed art direction pre-requisites, and outputs a layer per resolution.
As a picture is worth a thousand words, there you go:

![Responsive Image container](http://flopreynat.com/img/responsive-image-container.jpg "Responsive Image container")

### WHAT NOW?

DPR switching definitely seems to have made the top of the vast responsive images todo list. I have to admit I freaking love the concept of client hints presented by Ilya, but Google will certainly need an ally if we are to go this way... and it doesn’t look like it could be Mozilla, [David Baron](https://twitter.com/davidbaron) having shown little enthusiasm (to say the least) to go ahead and add more (unremovable) HTTP headers.

The ‘srcset attribute’ and the ‘Picture element’ will make last call, and will definitely keep on getting tested. Both could emerge winners, srcset for its simplicity, and picture for its art direction friendliness, a popular aspect in the developers community.

Expect some simplification in the markup, and a likely removal of possibly w and more likely h from the spec.

Microsoft could have a card to play in this debate, with IE12 in the box, and a strong and obvious interest from Lead Principal Program Manager [Israel Hilerio](https://www.linkedin.com/in/israel-hilerio-ba9a52b).

### FINAL WORDS

A huge bravo to Marcos and Yoav for getting a crowd of proactive folks and professionals going for eight hours straight, on the sole subject of responsive images. And a massive ‘thank you’ for opening the doors to smaller companies and freelancers.

Getting together is already a huge success, working together is the next step forward.