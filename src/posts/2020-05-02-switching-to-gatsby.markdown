---
title:  "Switching to Gatsby"
date:   2020-05-02
category: gatsby
---
It had only been a month since I converted my site from [Jekyll to Hugo](https://flopreynat.com/blog/2020-03-29-why-hugo). But with the quarantine and lockdown 😷 fully enforced, I took the time to dig even more the static-site-generator subject, and decided to dedicate some time to learn [Gatsby](https://www.gatsbyjs.org/), an open source framework based on React (which I knew very little about), and apply my newly-acquired skills to the redesign of this very site. Job now done ✅

_Note: React had always been a weird-looking beast to me, as I was struggling to grasp the concept/interest of injecting html inside javascript, but I am definitely getting it now._

##### Getting educated

I'm not going to detail here what it took me to redesign my site with Gatsby. 

Gatsby has great documentation, and with a big fan/user base, there are tons of resources out there where you can get all the info you want. 

However I can only advise you to take [Andrew Mead's Great Gatsby Bootcamp](https://www.youtube.com/watch?v=8t0vNu2fCCM), a close-to-5h top-notch tutorial taking you through the creation of a simple site equipped with a blog using Gatsby and either Markdown files or the now-popular headless CMS [Contentful](https://www.contentful.com/).

##### Getting started

Gatsby has a large 'starters library' available at [gatsbyjs.org/starters](https://www.gatsbyjs.org/starters/?v=2) where you can easily bootstrap your Gastby project. 

It was however important for me to build my own Gatsby and Markdown starter (including all features mentioned in the video turorial but excluding the Contentful part), and reinforce what I had been learning.

You'll find [my Gatsby Markdown starter](https://github.com/flopreynat/myGatsbyMarkdownStarter) on Github, and as detailed in the README file, this starter will have the advantage of coming with:

- Pages for:
    - home
    - about
    - contact
    - blog
    - 404
    - and the engine to generate one page/blog post
- 2 dummy posts, including one with an image
- [Sass](https://sass-lang.com/) turned on
- the dotenv environment variable file for GraphQL Playground
- the [React Helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/) component for document head control

You'll also find on the repo's README the list of all the packages to be installed.
Please note that for the conversion of my site, I added the following packages:

- [react-icons](https://react-icons.github.io/react-icons/) to add social network icons to my footer
- [gh-pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/) to allow deployment to Github's gh-pages, since my site is hosted there
- [gatsby-image](https://www.gatsbyjs.org/docs/gatsby-image/) (+ gatsby-transformer-sharp gatsby-plugin-sharp), the recommended approach to handling images.

##### Final Words

>Gatsby is awesome

The redesign was a fun little adventure. Gatsby is awesome and I intend to use it for other ssg-powered sites. 

I did not experience any huge issues. Having given Andrew Mead's tutorial my full attention, things could not have been easier, that's why I recommend you take that course if you're a gatsby newbie.

The only thing I had forgotten to do was to move the CNAME file to the 'static' folder of my project. 
So, if like me, you use a custom domain, do not forget to do that, or you'll lose the redirection of your github repo to your domain every time you'll run npm run deploy.

So long folks.