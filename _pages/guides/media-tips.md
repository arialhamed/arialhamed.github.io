---
title: "Media Tips & Tricks"
permalink: /guides/media-tips
redirect_from:
 - /guides/media-tips/
 - /guides/mediatips
 - /guides/mediatips/
 - /guides/media
 - /guides/media/
 - /media
 - /media/
 - /mediatips
 - /mediatips/
 - /media-tips
 - /media-tips/
---

# Media Tips<br><span style="font-size:70%;">handling images, videos, audio & more
I have worked with quite a lot of images, videos & audio, and I have learnt quite a lot (from the Internet) that I will share, not only for everyone but also for me if those pages that were accessible online were taken down for some reason. Tips are still incoming, slowly though.

---

### Batch convert image types using ImageMagick
ImageMagick is a ImageMagick is a free and open-source cross-platform software suite for displaying, creating, converting, modifying, and editing raster images. I use it whenever I want to convert images offline. You can download it <a href="https://imagemagick.org/script/download.php">here</a>.

Say for example, I want to convert a lot of .WEBP that I downloaded from the internet, but as it seems, its actually gifs. Through the command prompt, I can use ImageMagick to create new .gif from reading the .webp, basically making a duplicate to your liking. The code is as showed below: 

``` bash
magick mogrify -format gif *.webp
```

for Linux, change the `magick mogrify` to `convert` if you installed `imagemagick` via `apt`.

---

### Splitting a PDF to a shorter PDF
`pdftk` is a useful multi-platform tool for extracting PDF pages to a smaller PDF (<a href="http://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/">pdftk homepage</a>)

``` bash
pdftk full-pdf.pdf cat 12-15 output outfile_p12-15.pdf
```

`full-pdf.pdf` is input PDF, `12-15` is the range of pages you want to extract (can just be one page too, e.g. `9`) and `outfile_p12-15.pdf` is the name & location of the file outputted.

---

### Combining JPEGs into a PDF
ImageMagick sure is magical! The following was found in <a href="https://askubuntu.com/a/246653">AskUbuntu</a>

``` bash
convert *.jpg -auto-orient pictures.pdf
```

### Downloading n blob video using FFMPEG
coming soon
