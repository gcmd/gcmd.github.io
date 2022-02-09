---
layout: post
tags: ''
title: 'Building a Gnome Commander RPM for CentOS 7'
excerpt: ''
---

### Introduction

Gnome Commander is usually available from the
[nux-dextop](https://li.nux.ro/repos.html) (retired!) repository. Until such time
as GCMD version 1.10.2 is added (nux IS a volunteer effort) you can
build your own rpm file to install or update GCMD on your CentOS 7
machines without installing all of the packages needed to build GCMD
from source on each machine. This example assumes a CentOS 7 virtual
machine is build to accomplish the task. VMWare Workstation/Player (the
free for non-commercial use version) or Virtual Box should work fine. A
development physical machine could also be installed or the necessary
packages installed on an existing machine. The virtual machine approach
just seems cleaner as it can be deleted or archived when the job is
done.

### Steps to build the VM

Install CentOS 7.6 Development and Creative Workstation from the
installation DVD. Select these additional software groups:

* Additional Development
* Development Tools
* Platform Development

After completing the installation, install all current updates and
reboot the VM. A few additional packages are needed to build the .rpm
package.

### Steps to install Gnome Commander in CentOS

Add the CentOS SCl repository which provides the GCC version 8 compiler
and then install the necessary packages:

```
    sudo yum install centos-release-scl
    sudo yum install devtoolset-8 libgnome-devel libgnomeui-devel
    sudo yum install rpmdevtools rpmlint exiv2-devel taglib-devel poppler-devel
```

If you desire to include the single instance option it is necessary to
add the following package to the machine on which you are compiling the
application: `unique-dev` (available in the epel repository).
A new option will appear later on under Settings in Gnome Commander:
   
```
Multiple instances
     [X] Don't start a new instance
```

On a new installation this option is checked by default. If you are
upgrading an existing installation from a .rpm package this option may
be unchecked.

The next step is to obtain the Gnome Commander source code. It may
be downloaded from the web site with a browser or if you prefer the
command line:

```
    wget https://download.gnome.org/sources/gnome-commander/1.10/gnome-commander-1.10.2.tar.xz 
```

Extract the gnome-commander.spec file. This may be done with the archive
manager in the GUI environment or by the command line

```
    tar -xvf gnome-commander-1.10.2.tar.xz gnome-commander-1.10.2/data/gnome-commander.spec
```

Edit the .spec file with your favorite editor and locate the line:

```
Epoch:         2
```

Change the 2 to 4. Scroll down to a block of lines which begin with
"Requires:" and add a new line:

```
Requires:      gnome-icon-theme-legacy >= 3.0
```

Save the changes. Note: these changes should not be necessary in future
versions of GCMD.

The next step is to create the necessary directory structure to build
.rpm packages. The is done by executing:

```
   rpmdev-setuptree
```

Several directories will be created under the use home directory (~/)

```
rpmbuild
  BUILD
  BUILDROOT
  RPMS
  SOURCES
  SPECS
  SRPMS
```

Place the source code file (gnome-commander-1.10.2.tar.xz) in SOURCES
and the gnome-commander.spec file in SPECS. Change directory to
~/rpmbuild/SPECS/ and issue the following commands:

```
   scl enable devtoolset-8 -- bash
   rpmbuild -ba gnome-commander.spec
```

After considerable processing a message containing "exit 0" should be
displayed. Two shiny new .rpm files will be present in ``` ~/rpmbuild/RPMS/x64_86/ ```:


**```gnome-commander-1.10.2-1.el7.x86_64.rpm```** ```and```
**```gnome-commander-debuginfo-1.10.2-1.el7.x86_64.rpm```**

## A few notes about using these RPM packages

It is necessary to access the epel repository in order to install these
packages due to a dependency for the meld package. The epel repository
may be disabled afterwards if desired. Install epel on each target
machine as follows:

```
   sudo yum install epel-release
```

The newly created GCMD package can be installed with yum:

```
   sudo yum install gnome-commander-1.10.2-1.el7.x86_64.rpm 
```

If upgrading an existing GCMD installation prior to GCMD 1.10.1 it may be
necessary to run the following command to accommodate preference changes
in GCMD. Try running the newly installed GCMD from the command line with
gnome-commander. If it fails to run and errors are displayed execute:

```
   sudo glib-compile-schemas /usr/share/glib-2.0/schemas
```

The new Gnome Commander icon should appear on the menu under
"Accessories".

Please feel free to communicate any questions, concerns or comments
about these instructions to the Gnome Commander Mailing lists as
described on the home page.

*[GCMD]: Gnome Commander
