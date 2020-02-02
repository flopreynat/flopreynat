---
title:  "Adding Disqus comments to Jekyll"
date:   2015-08-14
category: jekyll
permalink: /blog/adding-disqus-comments-jekyll.html
image: disqus-jekyll.jpg
---
Adding comments via Disqus to your Jekyll blog is something you probably want to do if you want a bit of life and interaction. Good news: it couldn't be easier.

There are installation instructions on the [Disqus documentation](https://help.disqus.com/customer/portal/articles/472138-jekyll-installation-instructions), and on various places around the web, but I thought I would recap the lot for y'all.

> "Great discussions are happening here"... so Disqus says. Unless nothing much will in fact happen, and you're fine with this.

First of all, sign up to [Disqus](https://disqus.com/profile/signup) then go [there](https://disqus.com/admin/create) to add Disqus to your site.

Then generate a custom script for Jekyll, you'll need to use the **Universal Code** option here.

Copy your script and paste it into a disqus.html template in /_includes.
Make sure you surround the script between the **if page.comments** and  **endif** liquid code lines.

Then edit your _config.yml file to add the "comments: true" bit...

<pre>
<code class="language-ruby">
defaults:
  -
    scope:
      path: "" # an empty string here means all files in the project
      type: "posts" # previously `post` in Jekyll 2.2.
    values:
      author: flo preynat
      layout: "post"
      comments: true
</code>
</pre>

Finally, go to your /_layouts/post.html template and add **include disqus.html disqus_identifier=page.disqus_identifier** (between liquid handles) below the end of your blog post.

**You're done!**