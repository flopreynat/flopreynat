---
title:  "Using git on your Synology"
date:   2020-05-21
category: synology
---
I'm pushing the majority of my git projects to github for the simple reason that 1. they are public and hence do not need to remain hidden from the rest of the world, and 2. they usually leverage open source technology which has been tweaked in some way and that could help others.

However, there are specific personal projects and notes I do version using git and that I do not wish to send to the likes of Github, Bitbucket, et al. 

As a huge advocate of [data privacy](https://flopreynat.com/blog/2020-02-23-data-privacy-2020), I tend to keep __my private stuff private__, and that means not using a third party (regardless of whether they offer private repos or not).

Long story short, you'll find below the list of actions I have carried out to setup and use my (very own) Synology Git server.

### Todo

1. Install git on your synology (_help: you'll find the Git server application in your Package Center)_
+ Enable SSH (_help: by navigating to Control Panel > Terminal & SNMP > Terminal)_
+ Using the terminal (or putty if you're on a windows machine), ssh into your synology by running:
```
ssh you-user@your-synology-ip (+ type your synology password)
eg: ssh johnny@192.85.85.85
```
+ On your synology , create a folder to host your git project
+ Navigate to your local project folder and run:
```
git init
git remote add origin ssh://johnny@192.85.85.85:/volume1/myDirectory/myGitProject
```
+ Push your project to your synology by running the usual:
```
git add --all
git commit -m "initial commit"
git push origin master
```
+ Bob's your uncle 😎

