# Copyright 1999-2003 Gentoo Technologies, Inc.
# Distributed under the terms of the GNU General Public License, v2 or later
# Maintainer: Nuno Araujo <araujo_n@russo79.com>
# $Header: /web/gcmd/gcmd/Attic/gnome-commander-1.0.1-r1.ebuild,v 1.1 2003/11/01 22:39:45 opum Exp $

S="${WORKDIR}/${P}"

DESCRIPTION="File Manager for Gnome"

SRC_URI="http://savannah.nongnu.org/download/gcmd/gcmd.pkg/1.0.1/${P}.tar.gz"

HOMEPAGE="http://www.nongnu.org/gcmd/"

LICENSE="GPL-2"

DEPEND="app-admin/fam-oss
	gnome-base/gnome-libs
	>=gnome-base/gconf-1.0.8
	<gnome-base/gconf-2
	<gnome-base/gnome-vfs-2"

src_compile() {
	./configure \
		--host=${CHOST} \
		--prefix=/usr \
		--infodir=/usr/share/info \
		--mandir=/usr/share/man || die "./configure failed"
	emake || die
}

src_install () {
	make DESTDIR=${D} install || die

	dodoc AUTHORS ChangeLog COPYING INSTALL NEWS README TODO
}
