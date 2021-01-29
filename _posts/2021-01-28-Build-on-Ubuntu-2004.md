---
layout: post
tags: ''
title: 'Installing Ubuntu 20.04 and Mint 20'
excerpt: ''
---

### Introduction

Gnome Commander is no longer available in the Debian, Ubuntu, Mint and
some other repositories due to the [removal of old libraries](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=912383) used by GCMD. Until
such time as that can be resolved it is necessary to manually install
GCMD on Linux Distros which derive from Debian. Part 1 of this document
will provide step by step instructions for compiling and installing GCMD
from its source code. Part 2 will describe a method for installing GCMD
on multiple computers without having to install all of the development
packages on each computer.

The approach described below has been updated to work on Ubuntu Mate 20.04 on
an Intel PC. The main issue is that several required packages are not in the 
20.04 repositories. As a workaround it is possible to add the Ubuntu 18.04
repo to Ubuntu 20.04 in order to install those packages in order to build
GCDR. Once this is done it is probably a good idea to disconnect
from the Ubuntu 18.04 repo.

## Part 1 - Installation from source

The first step is to create a development environment with the necessary
tools to compile GCDR. This can be done on an existing Ubuntu
installation or to a new installation on a test computer or a virtual
machine. Starting from scratch:

Add the Ubuntu 18.04 repo by editing the sources.list file with vim or
your favorite text editor.

```
sudo vim /etc/apt/sources.list
```

add the following line to the end of the file and save

```
deb http://archive.ubuntu.com/ubuntu bionic universe
```

Install the development environment by opening a terminal (command window) and
executing these commands:

```
sudo apt-get update
sudo apt-get install -y build-essential itstool gawk libxml2-utils libglib2.0-dev 
sudo apt-get install -y libgtk2.0-dev libgnomevfs2-dev
```

The computer is ready to build GCMD. Now it is time to obtain the source
code.

Get the latest gnome commander source code from the
[Download](/download.html) section (currently
gnome-commander-1.10.3.tar.xz). Right click on the link and "save as" to
a convenient location on your computer. You may optionally verify the
file with the sha256 check sum or gpg signature provided on the web
site.

Locate the downloaded file and open it with your Archive Manager.
Extract the contents of the archive to a convenient location (e.g.
``` ~/development/ ``` - it does not matter - even Desktop will work fine.)

If you prefer to do it all from the command line (make sure to check the web page for the location of the latest source tarball)...

```
mkdir ~/development
cd ~/development/
wget https://download.gnome.org/sources/gnome-commander/1.10/gnome-commander-1.10.3.tar.xz .
tar -xvf gnome-commander-1.10.3.tar.xz -C ~/development
```

In the terminal navigate to the top directory of the source (e.g. ``` ~/development/gnome-commander-1.10.3/ ``` ) and enter the command:

```
./configure
```

This will verify that all necessary packages are available and that the
environment will support compiling GCMD. It should end by stating:

```
Type 'make' to build gnome-commander-1.10.3 and then 'make install' to install
```

Next type:

```
make
```

and when that is complete type:

```
sudo make install
```

When the process completes, GCMD should be ready to run. Try it by
typing gnome-commander. You will probably see some error messages. They
seem to relate to the old libraries used by GCMD. However, the errors do
not seem to impact any GCMD functions. In your applications menu the GCMD 
icon should appear on the menu under "Accessories". 

Note: If you experience any errors while using GCMD on Ubuntu 20.04.
PLEASE file a [bug](https://gitlab.gnome.org/GNOME/gnome-commander/issues).

-----

It is possible to build GCMD so that it includes the option to only run 
a single instance. The above instructions do not include this option. It 
will be possible to open Gnome Commander again and again and again.

If you desire to include the single instance option it is necessary to
add the following package to the machine on which you are compiling the
application:

```
sudo apt-get install -y libunique-dev
```

Once this is done it is necessary to run ./configure; make and sudo make
install as described above. A new option will appear under Settings in 
GCMD:

```
   Multiple instances
     [X] Don't start a new instance
```

On a new installation this option is checked by default. If you are
upgrading an existing installation from a .deb package this option may
be unchecked.

## Part 2 - Creating a deb file

If it is desired to install GCMD on multiple computers without installing 
all of the development packages on each one and without going through the 
build process on each computer, these additional steps will help.

In the terminal of the computer used to compile GCMD type the following:

```
sudo apt-get install checkinstall
```

With the terminal pointing to the same directory as in Part 1 
(e.g. ``` ~/devel/gnome-commander.1.10.3/ ```) type the following command:


```
sudo checkinstall
```

When this process completes you should find a file
**``` gnome-commander_1.10.3-1_amd64.deb ```** in the current directory. Copy
this file to the target machine where you wish to install GCMD. Open a
terminal on the target machine, point it to the directory where the .deb
file is located and issue the command:

```
sudo gdebi gnome-commander_1.10.3-1_amd64.deb
```

This will result in gnome-commander being installed. However, there is a
dependent package which gdebi will not install (two packages if you chose to
build gnome-commander with the unique option.) The packages must be obtained 
from the Ubuntu 18.04 repo. As was done for the initial build, add the necessary 
repo to /etc/apt/sources.list. 

```
sudo vim /etc/apt/sources.list
```
add the following line to the end of the file and save
```
deb http://archive.ubuntu.com/ubuntu bionic universe
```

Install the needed package by issuing the commands:

```
sudo apt-get update -y
sudo apt-get install -y libgnomevfs2-0
```

If using "unique" to enable the option to limit gnome-commander to only a 
single instance, install the neessary package.

```
sudo apt-get install libunique-1.0
```

It would probably be a good idea to comment out the 18.04 repo in
/etc/apt/sources.list by placing a # at the start of the line.
Gnome commander should now be installed and ready to run and the 
Gnome Commander menu entry should appear on the menu under
"Accessories".

Note:  These instructions have been tested on Linux Mint 20 and
seem to work fine. The only difference is in the handling of the 
18.04 repo. It needs to be added to the file:

```
/etc/apt/sources.list.d/official-package-repositories.list 
```
The repo may added using the Software Sources GUI tool. The referenced file 
warns not to edit manually as it might be overwritten by the Software Sources
tool. However, to temporarily enable the 18.04 repo in order to build GCMD, 
editing the .list file directly will do the trick.

Again, If you experience any errors while using GCMD on Ubuntu 20.04 or Mint 20
or a recent version of Debian, PLEASE file a [bug](https://gitlab.gnome.org/GNOME/gnome-commander/issues).


*[GCMD]: Gnome Commander

