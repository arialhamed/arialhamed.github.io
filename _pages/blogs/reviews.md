---
title: "Reviews"
permalink: /blogs/reviews
layout: default
redirect_from: 
 - /blogs/reviews/
 - /blogs/review
 - /blogs/review/
 - /blog/reviews
 - /blog/reviews/
 - /blog/review
 - /blog/review/
 - /reviews
 - /reviews/
 - /review
 - /review/
---

{% capture reviews-md %}
{% include blogs-reviews-inc.md %}
{% endcapture %}
{{ reviews-md | markdownify }}

<!-- <div class="container" id="reviews-days">
    <div class="row row-cols-2">
        {% for post in site.categories.reviews %}
            <a href="{{ site.baseurl }}{{ post.url }}">
                <div class="captioned-containerM">
                    <img src="https://raw.githubusercontent.com/arialhamed/static/main/images{{ post.url }}.jpeg" onerror="this.src='https://raw.githubusercontent.com/arialhamed/static/main/images/missing.jpeg'" style="width:100%;">
                    <div class="content">
                        <h1 style="color: #f1f1f1; font-size: 1.5rem !important;">{{ post.title }}</h1>
                        <p style="font-size: .8rem !important;">{{ post.subtitle }}</p>
                    </div>
                </div>
            </a>
        {% endfor %}
    </div>
</div> -->
<div class="row" id="reviews-days">
    {% for post in site.categories.reviews %}
    <div class="col-sm-4" title="{{ post.title }}" style="margin-bottom: 10px;">
        <div class="card" style="background-color:#333 !important;color:var(--font-color) !important;">
            <div class="card-body">
                <a href="{{site.baseurl}}{{post.url}}">
                    <img class="card-img" src="https://raw.githubusercontent.com/arialhamed/static/main/images{{ post.url }}.jpeg" onerror="this.src='https://raw.githubusercontent.com/arialhamed/static/main/images/missing.jpeg'" alt="{{ post.title }} icon" style="padding: 0 !important; margin: 0 !important;vertical-align: inherit !important; -webkit-box-shadow: none; box-shadow: none; border: none;">
                    <h5 class="card-title" style="color:var(--font-color);">{{ post.title }}</h5>
                </a>
                <p class="card-text">{{ post.subtitle }}</p>
            </div>
        </div>  
    </div>
    {% endfor %}
</div>
