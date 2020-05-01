---
title:  "Responsive email design framework MJML to the test"
date:   2017-05-16
category: email
permalink: /blog/responsive-email-design-framework-mjml.html
image: responsive-email-design-framework-mjml.jpg
---
Email design is a real pain in the arse. We all know that. Therefore I decided to give [mjml](https://mjml.io/) a go. For those who don't know of mjml.io, it's a responsive email design framework built by a team of developers at [Mailjet](https://www.mailjet.com), a competitor of [Mailchimp](https://mailchimp.com/).

The beauty of this framework results in the fact that you create something very much close to html, using an MJML markup language, and as mentioned in its detailed documentation, *"its semantic syntax makes it easy and straightforward and its rich standard components library speeds up your development time and lightens your email codebase."*

MJML’s open-source engine, which is - by the way - written in [NodeJS](https://nodejs.org/en/) (hence easily installed via [npm](https://www.npmjs.com/package/mjml)), leverages ReactJS and takes your mjml email designs to process high quality responsive HTML compliant with best practices. That's the whole idea.

> Easy and quick, Responsive, Component based

As I had nothing much to work with for starters, I decided to use somebody else's work, and picked this beautiful minimalistic [newsletter](https://dribbble.com/shots/1518379-Newsletter) (designed by Dmitri Litvinov) I found on dribbble.

![newsletter model](./images/mjml-dribbble-model.jpg "newsletter model")

I won't go into the details of the design process but with the help of the doc, I put all the components together in a matter of minutes, generated the html template using the terminal and the follwowing syntax:

```
mjml yourfile.mjml
```

#### Results

Here's the final result of my work in both gmail and protonmail. 
Something not only esthetic but fully functional.

![mjml results](./images/mjml-results.jpg "mjml results")

#### Verdict

If you're willing to send what looks like a professional responsive email, without having to use a third-party design service, then I defo advise you to give mjml a shot.


So long.