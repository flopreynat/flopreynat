---
title:  "Using Jekyll plugins on Github"
date:   2015-08-25
category: jekyll
permalink: /blog/jekyll-plugins-github.html
image: jekyll-plugins-github.jpg
---
A bit of reading for all jekyll newbies who, like me, decided to host their Jekyll site on Github pages (or are in the process to do so), and wouldn't be aware of the limitations around the subject.

I've been running this site on Jekyll for a few weeks only, and making discoveries along the way. When I decided to install and use [the first of many plugins available](https://github.com/UsabilityEtc/responsive-youtube-jekyll-tag), I hit the wall and quickly realised the topic was far from an easy affair.

>tl;dr : Avoid using plugins if you can

I'm not going to steal the words of David Lyons as he wrote a nicely-documented post on the subjet on [sitepoint.com](http://www.sitepoint.com/jekyll-plugins-github/).

To cut a long story short, Github only allows [a few Jekyll plugins](https://help.github.com/articles/using-jekyll-plugins-with-github-pages/) to run during build process.

As David mentioned it, you'll have a couple of work-arounds to get by.
I personnaly decided not to go with any of them. 

First of all, the current (folder/git) structure setup suits me and I didn't want to disturb it. Second of all, I don't have the intention to add a million plugins (as in I intend to use none of them). Lastly, I am the only person operating this site and thought a bit of markup within the post would not be the end of the world, should I need to add a responsive-ready video container (*reminder: it's what I wanted to do in the first place*).

Anyway, once again, read David's post. It's worth a look (and a thought) if you intend to host your Jekyll site on Github pages. 