---
title:  "Spin up php server locally in no time"
date:   2019-12-01
category: tools
permalink: /blog/php-server-spin-easy.html
image: php-server-spin-easy.jpg
---
Another post on tooling with this time a quick and easy way to locally spin up a php server, for - say - php templating and testing. 

> php -S localhost:2222

As mentioned [here](https://www.php.net/manual/en/features.commandline.webserver.php), the CLI SAPI provides a built-in web server (as of PHP 5.4.0). 

It is not intended to be a full-featured web server. But designed to aid application development.

Using the above command line is pretty much all is needed.
Proof [here](https://github.com/flopreynat/php-server) with a tiny templated php website.

So long.