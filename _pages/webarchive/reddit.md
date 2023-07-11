---
title: "reddit posts backups"
permalink: /webarchive/reddit
redirect_from:
 - /webarchive/reddit/
 - /web-archive/reddit
 - /web-archive/reddit/
 - /webarchive/reddit-post
 - /webarchive/reddit-post/
 - /web-archive/reddit-post
 - /web-archive/reddit-post/
 - /webarchive/reddit-posts
 - /webarchive/reddit-posts/
 - /web-archive/reddit-posts
 - /web-archive/reddit-posts/
layout: default
---

# i backed up a few interesting reddit posts

yet another page dedicated to data hoarding and love for tech.

<div class="container">
    <div class="row row-cols-1">
        {% for post in site.categories.webarchive %}
            {% if post.url contains "reddit" %}
                <a class="btn" href="{{ site.baseurl }}{{ post.url }}" style="border-style:solid;border-color:black;text-align:left;">
                    <h3>{{ post.title }}</h3>
                    <h5>by {{ post.author }}</h5>
                </a>
            {% endif %}
        {% endfor %}
    </div>
</div>