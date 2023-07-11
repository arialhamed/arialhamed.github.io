---
title: "generic backups"
permalink: /webarchive/generic
redirect_from:
 - /webarchive/generic/
 - /web-archive/generic
 - /web-archive/generic/
layout: default
---

# a lot of interesting stuff online

yet another page dedicated to data hoarding and love for tech.

This is my own tiny, miniature web archive, and yes everything is manually added, and no i don't use crawlers to collect.

<div class="container">
    <div class="row row-cols-1">
        {% for post in site.categories.webarchive %}
            {% if post.url contains "generic" %}
                <a class="btn" href="{{ site.baseurl }}{{ post.url }}" style="border-style:solid;border-color:black;text-align:left;">
                    <h3>{{ post.title }}</h3>
                    <h5>{{ post.summary }}</h5>
                </a>
            {% endif %}
        {% endfor %}
    </div>
</div>