---
title: "Webdev Tips"
layout: default
permalink: /catalog/webdev-tips
redirect_from:
 - /catalog/webdev-tips/
 - /catalog/webdevtips
 - /catalog/webdevtips/
 - /catalog/webdev
 - /catalog/webdev/
 - /webdev
 - /webdev/
 - /webdevtips
 - /webdevtips/
 - /webdev-tips
 - /webdev-tips/
---
# Web Development Tips
I have worked with quite a lot of websites, undoubtedly this one too (obviously), and I have learnt quite a lot that I will share, not only for everyone but also for me if i ever take a long break from I.T. and forget everything (just like every guide here). Tips are still incoming, slowly though.

<br>
<br>
<hr>

### Always look back to Bootstrap
A lot of times, we overlook the easy answer, and the easiest and effective answer is Bootstrap! This website uses a combination of Markdown & Bootstrap, and in some pages, the Bootstrap element will be louder than Markdown, such as [my X230 page](/blogs/upgrades/thinkpad/X230), that has both <a href="https://getbootstrap.com/docs/5.0/components/accordion/">Accordion</a> & <a href="https://getbootstrap.com/docs/5.0/components/carousel/">Carousel</a>.

so just google it, and btw it's very important to search up the Bootstrap version as well!

<br>
<br>
<hr>

### Forcing the footer to the foot (without it pasted to the screen)
This is quite a universal and long-lasting problem that everyone that starts out in web development. The following are codes that make your footer stay at the bottom without putting in a lot of breaklines or making your footer absolute (as if you pasted a piece of paper onto your monitor, you don't need that). This solution actually fixed this website's pages shorter than the view height, hence I will show as if you made a Jekyll website (can apply to any website, really)
``` css
body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}
```
The above is CSS you can put into your site.css that can apply to all pages (as I also have done <a href="https://arialhamed.github.io/static/css/site.css">here</a>), and the below is an example of what to do in your layouts html files. The effect will, of course, be visible in _vertically smaller pages_. In the example below though, all i did to change to the layout is add in the style attribute to the _main-content-wrap_ division. 
``` html
<div id="header-wrap" class="outer">
    <!-- HEADER CONTENT -->
</div>

<div id="main-content-wrap" class="outer" style="flex: 1;">
    <section id="main-content" class="inner">
        <!-- MAIN CONTENT -->
    </section>
</div>

<div id="footer-wrap" class="outer">
    <!-- FOOTER CONTENT -->
</div>
```

<br>
<br>
<hr>

### Place PDFs in website (with and without Bootstrap)
As of <timestamp>21 May 2022</timestamp>, I was able to hold close to this method of uploading a .pdf file for display in a static website.

#### Use Google Docs Viewer

There are a few ways to put a .pdf file for display, just with HTML, but honestly, using Google's Document Viewer in embed is the best, as show below

``` html
<iframe src="https://docs.google.com/viewer?embedded=true&url=http%3A%2F%2Farialhamed.github.io%2Fstatic%2Fpdf%2Fresume-2022-05-21.pdf" frameborder="no" style="position: relative; min-width: 100%; height: 800px; margin: 0 auto;"></iframe>
```

From where the `iframe` is, the .pdf will appear, displaying the first page. Notice how you **don't need to upload the file to your google docs**, you don't even need to have a Google account here (though more or less I would be suprised if you didn't have one or two). In this example, I uploaded my resume, which is a pdf, to a directory under my website. However, notice how link appears as in the `src` attribute's value. Where a `/` is, you may find a `%2F` instead. Just look up html escape codes to replace the symbols that cannot appear in a directory, like a slash or a colon, a few other things too. 

Oh yeah, and as of this writing (look at timestamp above), height is hardcoded, which more or less is actually the hardest part of making the design behind a simple and ez pdf on a website display aesthetically functional and pleasing.

<br>
<br>
<hr>

### Footer text: align left **&** right
You can look at many websites that has a small footer, including this one, that the text in the footer are split, left & right. There are many ways to do this, but I found a neat way to do this, without using too much knowledge of html & css.

``` html
<div id="footer-wrap" class="outer">
    <footer class="inner" style="text-align: center">
        <p style="float: left;">
            © 2022 by Arial Hamed
        </p>
        <p style="float: right;">
            <a href="/dmca">DMCA</a> - <a href="/privacy-policy">Privacy Policy</a> - <a href="/contact">Contact</a>
        </p>
        <div style="clear: both"></div>
    </footer>
</div>
```
The outer div's class, `outer`, and the footer's class, `inner`, are <span style="font-size:70%;">(probably)</span> parts of Jekyll's SCSS that comes with the free theme templates. One of the values for inner is `max-width`, which is why my text doesn't appear on the absolute left & right down there. The text are obviously in seperate paragraph elements, but then there is the div with the `"clear: both"` style. That element _clears_ the floated blocks: that'll fix the footer.

<br>
<br>
<hr>

### Javascript timed refresh
In all honesty, I think there is a more systematic way to refresh a page, but I found this way that makes use of the meta element in the page's head. Using that, you can also set a delay after executing that function.

``` js
function addDelayedRefresh(){
    const refresh = document.createElement('meta');
    refresh.setAttribute("http-equiv", "refresh");
    refresh.setAttribute("content", "5;url=https://www.w3schools.com");
    document.getElementsByTagName('head')[0].appendChild(refresh);
}
```
This function will actually add a meta element into the head of the page. The part that makes this stand out from StackOverflow is because of the last line in the function, in which I didn't know it was a thing! It makes sense, really, when you think about. Adding this to a button `onclick`, the page will redirect to w3schools.com after 5 seconds. If you just want the page to refresh, just remove the semi-colon and whatever is after in the 2nd argument if the 3rd line within the function.

For some reason, I found that someone online was like:

>This doesn't make sence... The head is parsed prior to the execution of javascript. Adding meta stuf to the head via javascript would not have the desired effect.

Whoever made this comment has a _fixed mindset_, going by the book only. If you really persevere, you can get answers even if everyone says otherwise.

<br>
<br>
<hr>

### General script and css tools
In every website, javascript and css will always be present, whether you like it or not. When a website loads a javascript file or a css file, it will take longer if either files are large. So here's just a small list of online tools that would help you:
- [JS Compress](https://jscompress.com/)
- [JS Beautifier](https://beautifier.io/)
- [Bytesize](https://www.javainuse.com/bytesize)

of course, I may update this part soon with more script importing tips or whatnot.

<br>
<br>
<hr>

{% include comments.html url=page.url %}