---
layout: post
tags: 'other'
title: '[Done] Fixing compilation warnings: Volunteers wanted'
excerpt: ''
---

If you ever have compiled GCMD by yourself, you might already have
noticed that there occour literally _hundreds of warnings_ from the Gnu
compiler. These warnings can sometimes lead to bugs or even tell
us that parts of libraries are used which are not supported anymore.
Also, Linux distributions don't like to distribute packages with
compilation warnings.

To overcome this problem we created the new Git branch
<code>ConvertWarningsToErrors</code> some days ago.

This branch is derived from the master branch and its first commit is
<code>2ecd245</code>. Here, we set up configure.ac and all Makefiles to convert all
compilation warnings into compiler errors. This will force us to fix
each warning to successfully compile GCMD in the end.

**We are asking for volunteers here to help us hunting down all warnings.**

Making a first start is pretty easy:

```
    git clone https://github.com/gcmd/gnome-commander.git
    cd gnome-commander
    git checkout ConvertWarningsToErrors
    ./autogen.sh
    make
```

Provided you have installed all packages GCMD depends on, the
compilation will stop at the first compilation error (which was a warning before).
Now it is your turn to fix it. If you don't know how to fix it but you
want to see other warnings and hunt them, temporarily switch of the
warning-to-error conversion:

```
    ./autogen.sh --enable-compile-warnings=yes
    make
```

Fix the warnings in separate Git commits and send them to
[gcmd-devel@nongnu.org](mailto:gcmd-devel@nongnu.org) as a patch
via email, or idealy, fork the Github GCMD repository and create a pull
request on the github webpage.

Together we can do it!

---

**Update** [29. April 2017]: **All GCC compiler warnings fixed**

All compilation warnings in branch ConvertWarningsToErrors
have been fixed and all related commits have been merged into the master branch. This
task can be regarded as fixed now.

**Update** [30. January 2022]:

The above mentioned GitHub repo does not exist anymore. Since some years already, Gnome Commander source code is hosted at [gitlab.gnome.org](https://gitlab.gnome.org/GNOME/gnome-commander))

*[GCMD]: Gnome Commander
