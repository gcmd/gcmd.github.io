# Copyright 1999-2003 Gentoo Technologies, Inc.
# Distributed under the terms of the GNU General Public License, v2 or later
# Maintainer: Nuno Araujo <araujo_n@russo79.com>
# $Header: /web/gcmd/gcmd/Attic/gnome-commander-0.9.12.ebuild,v 1.1 2003/03/27 13:32:25 opum Exp $

S="${WORKDIR}/${P}"

DESCRIPTION="File Manager for Gnome"

SRC_URI="http://savannah.nongnu.org/download/gcmd/gcmd.pkg/0.9.12/${P}.tar.gz"

HOMEPAGE="http://www.nongnu.org/gcmd/"

LICENSE="GPL-2"

DEPEND="app-admin/fam-oss
	gnome-base/gnome-libs
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
