---
title: "give me some openscad scripts to kickstart my journey in openscad"
permalink: /:categories/:title
categories: resources chatgpt
back: /resources/chatgpt
layout: post-chatgpt
---

Certainly! Here are a few OpenSCAD scripts that can help you get started:

1. Cube:
```openscad
cube([20, 20, 20]);
```
This script creates a cube with dimensions of 20 units on each side.

2. Sphere:
```openscad
sphere(15);
```
This script creates a sphere with a radius of 15 units.

3. Cylinder:
```openscad
cylinder(h = 40, r1 = 15, r2 = 10);
```
This script creates a cylinder with a height of 40 units, a bottom radius of 15 units, and a top radius of 10 units.

4. Union of Two Cubes:
```openscad
difference() {
  cube([30, 30, 30]);
  translate([10, 10, 10]) cube([20, 20, 20]);
}
```
This script creates a larger cube and subtracts a smaller cube from it, leaving a hollow space inside.

5. Linear Extrusion:
```openscad
linear_extrude(height = 10) circle(5);
```
This script extrudes a 2D circle into a 3D object with a height of 10 units.

6. Rotate Extrusion:
```openscad
rotate_extrude() square([10, 10]);
```
This script rotates a 2D square around the Z-axis, creating a 3D object.

7. 2D Shape Operations:
```openscad
union() {
  square([20, 20]);
  circle(15);
}
```
This script combines a square and a circle using the `union` operation.

8. Custom Module:
```openscad
module CustomObject() {
  cube([30, 30, 30]);
}

CustomObject();
```
This script defines a custom module called `CustomObject` that creates a cube. The module is then called to generate the object.

These scripts provide a starting point for exploring OpenSCAD. Feel free to modify them or experiment with different shapes, operations, and parameters to further your understanding of the language.