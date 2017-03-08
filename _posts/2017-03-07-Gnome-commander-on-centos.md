---
layout: post
tags: 'other'
title: 'Building Gnome Commander on CentOS'
excerpt: ''
---

Some days ago, Ken Taylor, a user of Gnome Commander, asked for support
on the GCMD mailing list: He was struggling with the manual Gnome
Commander installation on a recent CentOS 7 Linux. After some
discussions he finally managed building and running it.

Ken was so kind to write down his successful attempt in the hope it can
be helpful to other users, doing the same. In addition, the rpm package
in the CentOS "nux" repo goes back on its initiative. Impatient CentOS
users can also try [this](http://li.nux.ro/repos.html) one.

But lets hear what Ken has to say:

---

To start with I built a new development virtual machine as follows:

CentOS7 from everything DVD - Selected: Development and Creative
Workstation and added the following extra items:

+ Additional Development
+ Compatibility Libraries
+ Development Tools
+ Platform Development

I enabled the CentOS CR (continuous release) repo and updated. On this
new, up to date machine I then:

+ Download source code gnome-commander-1.6.3.tar.xz
+ Unpacked the file

In the resulting directory issue the command `./configure`. I then
started to fill in the missing pieces using yum search to locate the
desired packages. If a -devel package is available - INSTALL IT (as I
learned later).

     configure: error: gnome-doc-utils >= 0.3.2 not found

```
Installing:
  gnome-doc-utils                 noarch     0.20.10-5.el7 base   288 k
Installing for dependencies:
  gnome-doc-utils-stylesheets     noarch     0.20.10-5.el7 base   152 k
```

```
checking if libgnome >= 2.0.0 exists... configure: error: no
```


```
Installing:
  libgnome           x86_64         2.32.1-9.el7 base             741 k
Installing for dependencies:
  ORBit2             x86_64         2.14.19-13.el7 base           176 k
  gnome-vfs2         x86_64         2.24.4-14.el7 base            839 k
  libIDL             x86_64         0.8.14-8.el7 base              87 k
  libbonobo          x86_64         2.32.1-7.el7 base             437 k
```

I am stuck at this point. I believe I have libgnome 2.32.1 installed and
by my math 2.32.1 IS >= 2.0.0. I then decided to install the
libgnome-devel package:

```
Installing:
  libgnome-devel          x86_64        2.32.1-9.el7 base          80 k
Installing for dependencies:
  GConf2-devel            x86_64        3.2.6-8.el7 base          110 k
  ORBit2-devel            x86_64        2.14.19-13.el7 base       174 k
  gnome-vfs2-devel        x86_64        2.24.4-14.el7 base        214 k
  libIDL-devel            x86_64        0.8.14-8.el7 base          20 k
  libbonobo-devel         x86_64        2.32.1-7.el7 base         454 k
```

That did the trick

```
     checking if libgnomeui >= 2.4.0 exists... configure: error: no
```

This time I decided to install the -devel package first (which also 
installed the non-devel package)

```
Installing:
  libgnomeui-devel          x86_64      2.24.5-8.el7 base         260 k
Installing for dependencies:
  docbook-style-dsssl       noarch      1.79-18.el7 base          251 k
  docbook-utils             noarch      0.6.14-36.el7 base         71 k
  gtk-doc                   noarch      1.19-3.el7 base           264 k
  libart_lgpl               x86_64      2.3.21-10.el7 base         67 k
  libart_lgpl-devel         x86_64      2.3.21-10.el7 base         24 k
  libbonoboui               x86_64      2.24.5-7.el7 base      	  342 k
  libbonoboui-devel         x86_64      2.24.5-7.el7 base      	  196 k
  libglade2-devel           x86_64      2.6.4-11.el7 base          52 k
  libgnomecanvas            x86_64      2.30.3-8.el7 base      	  226 k
  libgnomecanvas-devel      x86_64      2.30.3-8.el7 base          71 k
  libgnomeui                x86_64      2.24.5-8.el7 base         789 k
  lynx                      x86_64      2.8.8-0.3.dev15.el7 base  1.4 M
  openjade                  x86_64      1.3.2-45.el7 base         831 k
  opensp                    x86_64      1.5.2-19.el7 base         874 k
  perl-SGMLSpm              noarch      1.03ii-31.el7 base         27 k
  source-highlight          x86_64      3.1.6-6.el7 base          611 k
```

That completes the missing pieces and parts. Then I issued the command:

```
make
```

That seems to have completed without error. I then issued the command:

```
make install
```

That barfed as I was not root :-(

```
sudo make install
```

Again, it appears to have completed OK.

I clicked on the gnome-commander icon on the menu under Applications; 
Accessories and low and behold *GNOME COMMANDER RUNS*!!!!!

---

That's cool, isn't it? :)

There is also an instruction given on GitHub from another user
[here](https://gist.github.com/vpiotr/a0060aa88bb412dbca759f58b41e03f6).


*[GCMD]: Gnome Commander
