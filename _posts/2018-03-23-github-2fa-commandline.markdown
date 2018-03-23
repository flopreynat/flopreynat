---
title:  "Github: 2FA and personal token"
date:   2018-03-23
category: github
permalink: /blog/github-2fa-personal-token.html
image: github-2fa-personal-token.jpg
---

So you've decided to turn on two-factor authentication (as you do) for your github account and you can't commit (anymore) to your repos using the command line. 

TL;DR

Create a personal token.

You won't be asked to provide a 2FA code when authenticating to GitHub on the command line using HTTPS URLs.
Instead, you must create a personal access token and use its as a password.

1. Log into your account
2. Click on your avatar, then Settings
3. Click on Developer Settings
4. Choose Personal access tokens
5. Generate new token
6. Give your token a name
7. Select the scope and permissions of your token
8. Use your token as your password when prompted in the terminal

Done.