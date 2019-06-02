---
layout: post
tags: ''
title: 'Installing Gnome Commander on Debian, Ubuntu and Mint'
excerpt: ''
---

### Introduction

Gnome Commander is no longer available in the Debian, Ubuntu, Mint and
some other repositories due to the [removal of old libraries](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=912383) used by GCMD. Until
such time as that can be resolved it is necessary to manually install
GCMD on Linux Distros which derive from Debian. Part 1 of this document
will provide step by step instructions for compiling and installing GCMD
from its source code. Part 2 will describe a method for installing GCMD
on multiple computes without having to install all of the development
packages on each computer.

The approach described below has been tested on Ubuntu Mate 18.04 on an
Intel PC and on A Raspberry Pi 3B+, Ubuntu (Gnome) 19.04 and Linux Mint
19.1 on an Intel PC. It should work on most similar distros.

## Part 1 - Installation from source

The first step is to create a development environment with the necessary
tools to compile gnome-commander. This can be done on an existing Ubuntu
installation or to a new installation on a test computer or a virtual
machine. Starting from scratch:

Install Ubuntu or related OS and install all available updates. Install
the development environment by opening a terminal (command window) and
executing these commands:

```
sudo apt-get update
sudo apt-get install -y build-essential itstool libglib2.0-dev libxml2-utils
sudo apt-get install -y gtk+2.0 libgnome-2.0 libgnomeui-dev gcc-8 g++-8 
```

gnome-commander requires version 8 of the gcc compiler to be used. This
may be done by entering the following commands:

```
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-7 700 --slave /usr/bin/g++ g++ /usr/bin/g++-7
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-8 800 --slave /usr/bin/g++ g++ /usr/bin/g++-8
```

Then enter the command:

```
sudo update-alternatives --config gcc
```

A dialog will be presented in the terminal. Select the version 8 option
(2) and press enter. The computer is ready to build GCMD. Now it is time
to obtain the source code.

Get the latest gnome commander source code from the
[Download](/download.html) section (currently
gnome-commander-1.10.2.tar.xz). Right click on the link and "save as" to
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
wget https://download.gnome.org/sources/gnome-commander/1.10/gnome-commander-1.10.2.tar.xz .
tar -xvf gnome-commander-1.10.2.tar.xz -C ~/development
```

In the terminal navigate to the top directory of the source (e.g. ``` ~/development/gnome-commander-1.10.2/ ``` ) and enter the command:

```
./configure
```

This will verify that all necessary packages are available and that the
environment will support compiling GCMD. It should end by stating:

```
Type 'make' to build gnome-commander-1.10.2 and then 'make install' to install
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
not seem to impact any gnome-commander functions. In your applications
menu the Gnome Commander icon should appear on the menu under
"Accessories".

## Part 2 - Creating a deb file

If it is desired to install GCMD on multiple computers without installing all of the development packages on each one and without going through the build process on each computer, these additional steps will help.

In the terminal type the following:

```
sudo apt-get install checkinstall
```

With the terminal pointing to the same directory as in Part 1 (e.g. ``` ~/devel/gnome-commander.1.10.2/ ```) type the following command:

```
sudo checkinstall
```

When this process completes you should find a file
**``` gnome-commander_1.10.2-1_amd64.deb ```** in the current directory. Copy
this file to the target machine where you wish to install GCMD. Open a
terminal on the target machine, point it to the directory where the .deb
file is located and issue the command:

```
sudo gdebi gnome-commander_1.10.2-1_amd64.deb
```

This will result in gnome-commander being installed. However, there is a
dependent package which gdebi will not install for some reason. Install
this by issuing the command:

```
sudo apt-get install -y libgnomeui-0
```

Gnome commander should now be installed and ready to run and the new
Gnome Commander menu entry should appear on the menu under
"Accessories".

*[GCMD]: Gnome Commander
