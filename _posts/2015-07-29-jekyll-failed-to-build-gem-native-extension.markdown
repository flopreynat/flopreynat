---
title:  "Error installing jekyll: Failed to build gem native extension"
date:   2015-07-29
category: jekyll
permalink: /blog/jekyll-failed-to-build-gem-native-extension.html
image: jekyll-gem-native-extension.jpg
---
Though I would post this one since I did experience a few issues attempting to install jekyll, including this "Failed to build gem native extension" annoying error.

Right, so you have it all installed. So you think. As advised on the jekyll site, you’ve done your:

<pre>
<code class="language-bash">
sudo gem update --system
</code>
</pre>

Xcode and its command line tools are in there, but you still get an error while running:

<pre>
<code class="language-bash">
sudo gem install jekyll
</code>
</pre>

something like:

<pre>
<code class="language-bash">
Building native extensions.  This could take a while...
ERROR:  Error installing jekyll:
ERROR: Failed to build gem native extension.
</code>
</pre>

It appears that the installation order is vital, and therefore you should try to uninstall ruby, start from a clean situation, and reinstall it.

It did fix it for me, so have a try if you’re stuck and you’re a numpty like me when it comes down to gems, CLI, and the rest.

Start with:

<pre>
<code class="language-bash">
rvm get head
rvm reset
</code>
</pre>

Then check what’s in there with:

<pre>
<code class="language-bash">
rvm list
</code>
</pre>

Note what ruby version is installed, in my case it was ruby-2.0.0-p247.

<pre>
<code class="language-bash">
rvm remove ruby-2.0.0-p247
rvm cleanup
rvm repair
</code>
</pre>

Only then go with:

<pre>
<code class="language-bash">
sudo gem update --system
sudo gem install jekyll
</code>
</pre>

Hope this helps.