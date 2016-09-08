---
title:  "Make Google Charts Responsive"
date:   2015-09-08
category: google
permalink: /blog/make-google-charts-responsive.html
image: google-charts-responsive.jpg
---
A quick blog post on how to make Google Charts play nicely in responsive mode. Nothing close to rocket science but still useful.

For those who don’t know, [Google Charts](https://google-developers.appspot.com/chart/) is a visualization tool, a gallery of interactive charts and data tools that you can integrate into your website. You provide data through php, json and Google Charts display it nicely for you.

####Issue

By default, the charts come in the form of fixed width element which you can easily tweak to adapt to the now-famous ‘width:100%’ format. However the charts will only appear in that format when the page is loaded. They won’t dynamically resize when the browser window width is changed.


####Solution

You will need to add a little jquery to get that to work as expected.

<pre>
<code class="language-ruby">
	$(window).resize(function(){
	  	drawChart1();
	  	drawChart2();
	});
</code>
</pre>

There’s obviously a [codepen](http://codepen.io/flopreynat/pen/BfLkA) for this.