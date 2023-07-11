---
title: "Lyrics"
layout: default
permalink: /resources/lyrics
redirect_from:
 - /resources/lyrics/
 - /lyrics
 - /lyrics/
 - /resources/lyric
 - /resources/lyric/
 - /lyric
 - /lyric/
---

# Lyrics

so i got some lyrics, yet another page about my <s>data-hoarding</s> archival nature. this page contains both gospel & secular music. parental guidance is adviced. 

<div class="container">
    <div class="row row-cols-1">
        {% for post in site.categories.lyrics %}
            <a class="btn" href="{{ site.baseurl }}{{ post.url }}" style="border-style:solid;border-color:black;text-align:left;">
                <h3>{{ post.title }}</h3>
                <h5>by {{ post.artiste }} in {{ post.date | date: "%Y" }}</h5>
            </a>
        {% endfor %}
    </div>
</div>