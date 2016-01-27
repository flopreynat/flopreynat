---
title:  "Grunt throws a Maximum call stack size exceeded error"
date:   2016-01-27
category: gruntjs
permalink: /blog/gruntjs-maximum-call-stack-size-exceeded-error.html
image: gruntjs-maximum-call-stack-size-exceeded-error.jpg
---
Grunt throws a 'maximum call stack size exceeded' error after running a simple task, and you haven't got the slightest idea what it means. No sweat.

But I can't blame as this is just what happened to me today while working on a website redesign. The grunt task is a simple 'imagemin' task I decided to run separately, and I don't recall having had the same issue before.

Cut a long story short, you launch something along the lines of:
"grunt imagemin" in your terminal, and you're thrown the following error:

**_RangeError: Maximum call stack size exceeded_**

> Don't name your task aliases like your tasks

I did not find the issue in Grunt's documentation as, ironically, it's not the first hit on google serach results, but it's in there.

You can not name your tasks like the task itself, [as detailed here](http://gruntjs.com/frequently-asked-questions#why-am-i-getting-a-maximum-call-stack-size-exceeded-error). 

So I went from 
**_grunt.registerTask("imagemin", ["imagemin"]);_** to **_grunt.registerTask("imageminifier", ["imagemin"]);_**

... and it worked like a charm.