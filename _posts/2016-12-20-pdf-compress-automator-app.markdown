---
title:  "Create a PDF Compress Automator App"
date:   2016-12-20
category: tools
permalink: /blog/pdf-compress-automator-app.html
image: pdf-compress-automator-app.jpg
---
Every time I want to compress pdfs on a new apple machine, I find myself looking for the same (great) posts on the subject, and rarely find the one I'm looking for.

This is why I'm putting up this nice (personal) go-to blog post on how to easily and quickly set up a PDF Compress Automator App, as I use the app almost every day.

> small is beautiful

Right so, the steps are as follows:

1. Download the [Apple Quartz filters](https://github.com/joshcarr/Apple-Quartz-Filters)

2. Move the filters to your ~/Library/ folder by launching Finder and using CMD + SHIFT + G to pull up the Go to access Library folder, and dropping a “Filters" folder containing the quartz filters in there.

3. Launch Automator and Create an Application by dragging the Apply Quartz Filter to PDF Documents from left to right, and set the desired options (eg Reduce to 150 dpi average quality - STANDARD COMPRESSION) before giving it a name (save it onto your desktop).

Done deal.

You can now drag your pdf to your newly-created PDF Compress Application, and you'll get a fresh copy reduced in size (obviously)...