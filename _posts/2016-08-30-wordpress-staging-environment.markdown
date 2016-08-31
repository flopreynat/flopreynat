---
title:  "Wordpress staging environments on the cheap"
date:   2016-08-30
category: wordpress
permalink: /blog/wordpress-staging-environment.html
image: wordpress-staging-environment.jpg
---
Staging environments are one of the keys of a (proper and) controlled deployment process, whatever the technology. Wordpress isn't any different.

You have a problem if you - like me - run a few things on wordpress, don't consider it as a priority subject (hence do not have the time, nor the money to commit on the suject), ...yet still want to make it a decent process. 

Typical "have it both ways" conundrum.

> DEV > STAGING ENVIRONMENT > PRODUCTION

Anyway, here are a few options, my views on them, and eventually a decision.

**Professional Wordpress hosting (Paid)**

Best option is to get people (or an app) meant to do this for you. Defo the best option if this subject is top priority for you. ["WPEngine"](https://wpengine.com/support/staging/) or ["Media Temple"](https://mediatemple.net/community/products/wordpress/204645480/staging-sites-for-your-wordpress-hosting-service) come to mind to name only a few.

**WP Migrate DB Pro (Paid)**

A popular plugin, often praised on ["ShopTalk Show"](http://shoptalkshow.com/), ["WP Migrate DB Pro"](https://deliciousbrains.com/wp-migrate-db-pro/pricing/) is a great option to get your wordpress sites in sync (all content including media) with one click. Cool option to implement a push to production process. Starting at 89 box.

*Note: I ain't being sponsored for any of those paid options.*

As mentioned above, I can't be investigating any resource in this subject. Yet, I want to be able to set up a few environments and sync content and settings in an easy (and quick process), without having to deal with media url issues (cough wordpress import cough).

Let me emphasize on the repeatable process here since I really want to be able to do more than the usual local wp-cloud wp sync'ing. Testing things as they live on the web has got to be a pre-requisite. Things happen differently when not happening on local machines.

Anyway, went with...

**All-in-One WP Migration (Free)**

As advertised, ["the plugin"](https://wordpress.org/plugins/all-in-one-wp-migration/) allows you to export your database, media files, plugins, and themes. You can apply unlimited find/replace operations on your database and the plugin will also fix any serialization problems that occur during find/replace operations.

Not bad for a free option, and works like a charm to get those wordpress environments in sync.