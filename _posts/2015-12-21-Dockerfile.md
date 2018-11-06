---
layout: post
title: 'A Dockerfile for Gnome Commander'
excerpt: ''
---

In the course of implementing GSettings for Gnome Commander, I created a
Dockerfile which uses Ubuntu 15.04 as a base image. This ubuntu version
is the oldest one on which I managed a successfull build of Gnome
Commander with GSettings (it needs at least glib 2.44).

If you are interested in the Dockerfile you can get it here:

[https://raw.githubusercontent.com/gcmd/gnome-commander/master/Dockerfile](https://raw.githubusercontent.com/gcmd/gnome-commander/master/Dockerfile)

The only thing which is currently done in the resulting Docker container
is to install all required libraries needed to finally "make" and "make
check" Gnome Commander in the GSettings branch.

Have nice and calm Christmas holidays!
Uwe

BTW: You have to execute `docker build .` from inside the Gnome
Commander sources top directory.
