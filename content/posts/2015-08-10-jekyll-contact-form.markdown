---
title:  "Jekyll contact form with Formspree"
date:   2015-08-10
category: jekyll
permalink: /blog/jekyll-contact-form.html
image: jekyll-contact-form.jpg
---
So you got yourself a nice static site, and you want to give your audience a chance to talk to you (directly) with a simple contact form, something you might be used to having used wordpress, php, and a database.

Except there ain't no database here. Even less php back end. Hence you've got to rely on other ways to get personal messages sent to you.

###Formspree - Functional HTML forms

When I stumbled upon [Formspree](http://formspree.io/), it did look like the perfect match. 

*Side note: Kudos to the crew that put the site together. Minimalistic, straight to the point and no fuss around the subject.*

> Just send your form to our URL and we'll forward it to your email. No PHP, Javascript or sign up required — perfect for static sites!

So, formspree is a tool apparently maintained by a community of developers, clearly stating no contents of the form submissions are stored (emails are sent using [Mailgun's API](http://www.mailgun.com/)). 

You do think about privacy, but not for long. First of all, you ain't giving much away, api or not. Folks are going to initiate discussions in a few words then you take over the talk, privately. No need to be paranoid... especially if (unlike me), you are giving away most of your life to facebook.

###Easy peasy

Just follow the steps described. Everthing works as expected. Add form elements and don't forget to give them a name, they'll be automatically taken into account during form submission.
