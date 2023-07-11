---
title: OpenSCAD heehoo
permalink: /resources/3d/openscad
redirect_from:
 - /resources/3d/openscad/
 - /resources/openscad
 - /resources/openscad/
 - /3d/openscad
 - /3d/openscad/
 - /openscad
 - /openscad/
layout: default
openscad: true
---

# OpenSCAD
### The programmer's 3D modelling software

I cannot do 3D modelling, I just don't have that kind of moxy to work on a 3D model, especially since most software is very robust & has such a high learning curve, such as Blender, Maya & FreeCAD. There is a handful of objects online that I wanted to modify & perhaps print it (if I have the resources to do it lol), but it was just too hard, so much options, don't know where to start, etc, etc...

However, I found OpenSCAD. I figured that instead of modifying an object, I decided that I want to create it instead! I get more into what it is in the first model as shown here! ^_^ oh yeah sidenote, this is such a win-win situation where I can _program_ 3D models AND the software (OpenSCAD) is _FOSS_!!!

## X220_ram_lid.scad

<div id="scad-container"></div>

GitHub upload: <a href="https://raw.githubusercontent.com/arialhamed/static/main/3d/openscad/X220_ram_lid/X220_ram_lid.scad" target="_blank">Link</a> <br>
Thingiverse: <a href="https://www.thingiverse.com/thing:6037340" target="_blank">Link</a>

<script>
  // Fetch the OpenSCAD file
  fetch('https://raw.githubusercontent.com/arialhamed/static/main/3d/openscad/X220_ram_lid/X220_ram_lid.scad')
    .then(response => response.text())
    .then(scadCode => {
      // Create a new OpenJSCAD processor
      const processor = new OpenJsCad.Processor(scadCode);

      // Render the OpenSCAD model
      const scadContainer = document.getElementById('scad-container');
      const viewer = document.createElement('div');
      viewer.setAttribute('style', 'width: 100%; height: 400px;');
      scadContainer.appendChild(viewer);
      processor.setJsCad(scadCode);
      processor.generateOutputFileExtensions(['stl']); // Render as STL
      processor.generateOutputFile()
        .then(files => {
          const stlFile = files['stl'];
          viewer.appendChild(stlFile[0].asDOM());
        })
        .catch(error => console.error('OpenJSCAD error:', error));
    })
    .catch(error => console.error('Fetch error:', error));
</script>


---

