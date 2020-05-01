---
title:  "Error installing jekyll: Failed to build gem native extension"
date:   2015-07-29
category: jekyll
permalink: /blog/jekyll-failed-to-build-gem-native-extension.html
image: jekyll-gem-native-extension.jpg
---
Though I would post this one since I did experience a few issues attempting to install jekyll, including this "Failed to build gem native extension" annoying error.

Right, so you have it all installed. So you think. As advised on the jekyll site, you’ve done your:

```
sudo gem update --system
```

Xcode and its command line tools are in there, but you still get an error while running:

```
sudo gem install jekyll
```

something like:

```
Building native extensions.  This could take a while...
ERROR:  Error installing jekyll:
ERROR: Failed to build gem native extension.
```

It appears that the installation order is vital, and therefore you should try to uninstall ruby, start from a clean situation, and reinstall it.

It did fix it for me, so have a try if you’re stuck and you’re a numpty like me when it comes down to gems, CLI, and the rest.

Start with:

```
rvm get head
rvm reset
```

Then check what’s in there with:

```
rvm list
```

Note what ruby version is installed, in my case it was ruby-2.0.0-p247.

```
rvm remove ruby-2.0.0-p247
rvm cleanup
rvm repair
```

Only then go with:

```
sudo gem update --system
sudo gem install jekyll
```

Hope this helps.