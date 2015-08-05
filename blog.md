---
title: Blog
permalink: /blog/
---
<div class="container">
  <div class="row">
    <div class="col-lg-10 col-lg-offset-1">
      {% for post in site.posts %}
        <div class="col-lg-12 marg blogPost">
          <h3>
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          </h3>
          <p><i class="fa fa-calendar-o"></i><span class="post-meta">Posted on {{ post.date | date: "%b %-d, %Y" }}</span></p>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
            <img src="/img/{{ post.image }}" alt="{{ post.title }}">
          </a>
          <div class="col-lg-9">
            <p>{{ post.excerpt }}</p>
          </div>
          <div class="col-lg-3 text-right marg">
            <a class="btn btn-default" href="{{ post.url | prepend: site.baseurl }}">> Read more</a>
          </div>
        </div>
      {% endfor %}
      <div class="clearfix"></div>
    </div>
  </div>
</div>