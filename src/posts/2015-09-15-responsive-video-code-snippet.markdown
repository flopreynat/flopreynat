---
title:  "Responsive video code snippet"
date:   2015-09-15
category: css
permalink: /blog/responsive-video-code-snippet.html
image: responsive-video-code-snippet.jpg
---
An ancient blogpost of mine, and this clever responsive video code snippet presented (at the time) by Ethan Marcotte, at btconf 2014 during his [Laziness In The Time Of Responsive Design](https://beyondtellerrand.com/events/duesseldorf-2014/speakers/ethan-marcotte#talk) talk.

A quick way to make videos look good at any size, the height/width ratio of the media now respected.

Enough chit chat.

```
.video-container {
    position: relative;
    height: 0;
    padding-bottom: 56.25%;
}
 
.video-container > * {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
```

There’s a [codepen](http://codepen.io/flopreynat/pen/KGAov) for it.