---
title: Blog
permalink: /blog/
---
<div class="hero-search">
  <form action="/search.html" method="get" id="searchform">
    <div id="custom-search-input">
      <div class="input-group col-md-6 col-md-offset-3">
        <input type="text" class="  search-query form-control" placeholder="Looking for a specific subject? Try your luck" id="search_box" name="query" />
        <span class="input-group-btn">
            <button class="btn btn-danger" type="button" id="searchsubmit">
                <span class=" glyphicon glyphicon-search"></span>
            </button>
        </span>
      </div>
    </div>
  </form>
</div>    
<div class="container hero-search-under">
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
            <a class="btn btn-flo" href="{{ post.url | prepend: site.baseurl }}">Read more</a>
          </div>
        </div>
      {% endfor %}
      <div class="clearfix"></div>
    </div>
  </div>
</div>