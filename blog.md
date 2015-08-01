---
title: Blog
permalink: /blog/
---
<div class="container">
  <div class="row">
    <div class="col-lg-8 col-lg-offset-2">
      <div class="text-center">
        <h2>Latest Blog Posts</h2>
      </div>
      {% for post in site.posts %}
        <div class="col-lg-12 marg blogPost">
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
            <img src="/img/{{ post.image }}" alt="{{ post.title }}">
          </a>
          <h3>
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          </h3>
          <i class="fa fa-calendar-o"></i><span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
          <p>{{ post.excerpt }}</p>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">> Read more</a>
        </div>
      {% endfor %}
      <div class="clearfix"></div>
    </div>
  </div>
</div>