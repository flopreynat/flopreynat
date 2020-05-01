---
title:  "Spin up php server locally with Docker"
date:   2019-12-26
category: tools
permalink: /blog/php-server-docker.html
image: php-server-docker.jpg
---
Almost same use case and files than [last time](http://flopreynat.com/posts/2019-12-01-php-server-spin-easy/).
But this time, using Docker, which I had been wanting to test out for so long.

```
docker run -p 80:80 -v /Users/your-username/path-to-docker-folder/src/:/var/www/html/ hello-world
```

Everything is brilliantly explained on this [Learn Docker in 12 Minutes](https://www.youtube.com/watch?v=YFl2mCHdv24) video.

Like on last post, proof files [here](https://github.com/flopreynat/php-server-docker).

So long.