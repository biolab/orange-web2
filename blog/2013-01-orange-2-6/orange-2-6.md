---
author: "BIOLAB"
date: '2013-01-21 14:23:00+00:00'
draft: false
title: "Orange 2.6"
blog: ["addons" ,"pypi" ]
oldUrl: "/blog/2013/01/21/orange-2-6/"
---

A new version of Orange, 2.6, has been uploaded to [Python Package Index](http://pypi.python.org/pypi/Orange/2.6/). Since the version on the Orange website is always up to date (we post daily builds), this may not affect you. Nevertheless, let us explain what we were working on for the last year.

The most important improvement to Orange is an implementation of add-on framework that is much more "standard pythonic". As a consequence, the add-on installation procedure has been simplified for both individual users and system administrators. For developers, the new framework eases the development and distribution of add-ons. This enabled us to make first steps towards the goal of removing the rarely used parts of Orange from the core distribution, which will ultimately result in less external dependencies and less warnings on module import. Orange 2.6 lacks the modules for network analysis (Orange.network) and prediction reliability assesment (Orange.reliability), but fear not: you can get them back by [installing](/blog/2012/11/30/the-easy-way-to-install-add-ons/) the [Orange-Network](http://pypi.python.org/pypi/Orange-Network) and [Orange-Reliability](http://pypi.python.org/pypi/Orange-Reliability) add-ons.

Apart from that, we have been mostly squashing bugs. A fun spare time activity - you can join us anytime by cloning our [repository](https://bitbucket.org/biolab/orange/) and sending us a pull request. :)

If our version numbering system confuses you, let us try to explain. For the last (couple of) year(s), our version numbers have been a mess. Orange2.5a4 was uploaded to pypi almost a year ago, and was followed by a 2.6a2 release that was never available outisde our repository/daily builds. From this day forth, our versioning system should be as follows.


* If you install orange from pypi, the version (Orange.version.full_version) will be something like 2.6 or 2.6.1.
* If you use our daily builds or build orange yourself from the source available in our repository, your version will be 2.6.1.dev-8804fbc. (minor will be larger by one and .dev- suffix will show the source control revision that was used for the build)

