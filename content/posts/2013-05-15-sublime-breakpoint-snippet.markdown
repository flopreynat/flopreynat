---
title:  "Add a neat little breakpoint snippet to your Sublime"
date:   2013-05-15
category: sublime
permalink: /blog/sublime-breakpoint-snippet.html
image: sublime-breakpoint-snippet.jpg
---
Let’s get Sassy today with this little yet very useful Sublime Text 2 [breakpoint snippet](https://gist.github.com/jnowland/5151162) handmade by James Nowland and obviously editable as you wish.

If, like me, you code a lot of responsive sites, chances are that you work with Sass and end up putting half a million @include breakpoint lines, working your site’s scss the modular way… as you do.

Well, this little snippet will surely reduce your work, by allowing you to tabTrigger mq (or whatever you wanna call it) into the full @include breakpoint desired code lines.

Open Sublime, go to Tools, then New Snippet. Copy and paste James’s code in there, and save. Your’re done. You can type mq and tab in your scss and enjoy the ride.

### The Snippet

```<snippet>```<br>
```<content><![CDATA[```<br>
```@include breakpoint(${1:papa-bear / mama-bear / baby-bear}) {```<br>
```${2:}```<br>
```}```<br>

```]]></content>```<br>
```<!-- Optional: Set a tabTrigger to define how to trigger the snippet -->```<br>
```<tabTrigger>mq</tabTrigger> ```<br>
```<!-- Optional: Set a scope to limit where the snippet will trigger -->```<br>
```<!-- <scope>source.python</scope> -->```<br>
```</snippet>```

### The result in Sublime

![Sass Breakpoint snippet in Sublime](http://flopreynat.com/img/breakpoint-snippet.jpg "Sass Breakpoint snippet in Sublime")