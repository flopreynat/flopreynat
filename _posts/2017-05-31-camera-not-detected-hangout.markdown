---
title:  "No camera was found"
date:   2017-05-31
category: mac
permalink: /blog/no-camera-was-found.html
image: no-camera-was-found.jpg
---
You're most likely running on Mavericks, or El Capitan, are using your mac or a monitor with integrated camera, and keep on getting something along the lines of 'no camera was found' messages from Hangout or other web conferencing apps.

Issue happened to me on dozens of times with an Apple Thunderbolt.

This post isn't intended to get to the bottom of this issue. So you can put back the screwdrivers where they belong.
These few lines are only here to present you with a workaround, and remind myself of this little fix.

So,... Issue seems related to the VDCAssistant process getting invoked every time the camera is being used by an app, but not properly closing, hence blocking its future use.

> Kill 'em all

Open the terminal, and run the following command:

<pre>
<code class="language-ruby">
$ sudo killall VDCAssistant
</code>
</pre>

You'll need to input your master password. Camera should be up again. 
For now...

As I said, just a workaround.

So long.