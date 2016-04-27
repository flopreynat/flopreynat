---
title:  "Gulp throws Potentially unhandled rejection error"
date:   2016-04-27
category: gulp
permalink: /blog/gulp-throws-potentially-unhandled-rejection-no-writecb.html
image: gulp-error-no-writecb.jpg
---
So you're using Gulp and you're thrown a "Potentially unhandled rejection [2] Error: no writecb" and you have no idea what to do next... 

It was my case up to last night when running Gulp for the first time (I usually run Grunt) during the initialization of Wes Bos' "React for Beginners" project, and the run of a gulp-stylus task.

> Updates first

Initial reaction should be to make sure you're up to date with all components at hand. All modules being all on their latest versions, let's turn to node.

Quick check shows an outdated version, let's get this updated. Here's how to do it.

<pre>
<code class="language-ruby">
(sudo) npm cache clean -f
(sudo) npm install -g n
(sudo) n stable
node -v
v6.0.0
</code>
</pre>

Try running gulp again. Error should have gone...