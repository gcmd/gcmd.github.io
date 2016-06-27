---
layout: post
title: 'How I became the next maintainer of Gcmd'
tags: 'other'
excerpt: ''
---

It's been nearly four years now that the old maintainer of Gnome
Commander passed away. Piotr did a great job in pushing this software to
a higher level. I have been using gcmd with pleasure for many years. But
up to two years ago I had never been a maintainer of any FOSS project.
So, how did it come that I am the new one? And what does this mean to me
now?

It began after an update of the gsf library, used by gcmd to get
meta-information out from structured files, e.g. zip files. After this
update, gcmd could not be started anymore. Even rebuilding and binding
didn't help: gcmd's source code had to be changed, too. On my local
Linux this was an easy task (there existed a patch already on bugzilla
and I used Gentoo those days). But what about the official package?
Nobody took care about it anymore. Now, that I have gotten so much from
the Open Source Community in the past decade from Linux, I wanted to
give something back.

Having repaired the broken mailing list configurations with a member
from the savannah.gnu.org team, we discussed some future options with
the members of the gcmd mailing list. Thomas Jost, the former website
admin of gcmd pointed me to to some great git-tutorials. These were
important for me as I hadn't any experience in collaborative development
so far. After some mail-discussions with Andrea Veri and Matthias Clasen
(in which I pointed out my willingness to take over the responsibility
for gcmd) the status of a gnome developer was given to me. After that I
could directly push new gcmd-releases to the servers of gnome.org.
Meanwhile, Thomas created a new GitHub organisation, where the gcmd code
could be found, too.

In the past two years quite a number of bugs could have been fixed and
here I also want to thank all the contributors, contributing with bug
fixes and helpful discussions in the mailing list. Amongst the bugs
which have been fixed, the most important certainly was
[bgo#653573](https://bugzilla.gnome.org/show_bug.cgi?id=653573),
resulting in plain-text connection passwords in the config file. There
are still many bugs on the ToDo list, but not so critical ones...

So, how did the maintainer status of gcmd changed my life? Up to one and
a half year ago I was doing my PhD in theoretical biophysics and I was
very disappointed about my work. I had realised that the scientific work
and its community is not the right place for me. But programming and
developing is something I really wanted to do. With gcmd a much bigger
world has opened to me: I started to love working with git, I tried much
more development tools than I had known ever before, I appreciate to
work with Gnome libraries and devhelp, I started using unit tests,
GitHub, Travis, etc... :)

And finally, the very very best: All this helped me to find a job in
which I can work as a C programmer (already more than a year ago), which
is so awesome! That's why I want to express my big gratitude to the
gnome community and all those who have made the gcmd project possible.

Although I have not so much time as before this job, I still will
contribute further to gcmd. :)

I wish you all the best. Have a great new year 2016!

Uwe Scholz

*[GCMD]: Gnome Commander
