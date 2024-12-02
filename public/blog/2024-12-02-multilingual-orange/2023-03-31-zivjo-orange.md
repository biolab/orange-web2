---
author: "Janez Demšar"
date: "2024-12-02"
draft: false
title: "Orange Is Becoming a Poliglot"
thumbImage: "orange-slo.png"
frontPageImage: "orange-slo.png"
blog: ["gui"]
shortExcerpt: "Orange 3.38 supports switching between languages"
longExcerpt: "Orange 3.38 supports switching between languages"
---

To my recollection, Scottie told captain Kirk that he can't change the laws of physics. This happened multiple times, but in an episode that I cannot find (and no, it probably isn't *Naked Time*), Kirk responded by asking Scottie whether he could at least bend them.

Fifteen years ago, there existed two translations of Orange: Slovenian and Japanese. We have recently learned about a Chinese translation. To our knowledge, the latter is done by manually translating the source, and is being actively maintained. The other two didn't last long. The framework used to create them made maintenance difficult, put a strain on the programmers, and was incompatible with modern Python, which is the language most of Orange is written in.

Now we have a solution that will be sustainable in the long term.

Orange 3.38 is available in two languages! Users can switch between English and Slovenian, with more languages to come if we find dedicated volunteers. The work doesn’t require much technical expertise, but the initial effort is substantial; later updates are easier. If you're interested, please get in touch with us.

<WindowScreenshot src="orange-slo.png" />

But what about Scottie and Kirk and the laws of physics? Well, here’s the full story — which may include a bit of well-earned bragging. :)

More than a year and a half ago, [we reported](https://orangedatamining.com/blog/zivjo-orange/) that we had released a Slovenian version of Orange. While it worked fine, we weren’t completely satisfied. The translations were good (we made sure all the complex nuances of Slovenian — the native language of the core group — were handled correctly), and Orange itself worked without any glitches. The problem was that we had packed it into a separate release of Orange, which wasn’t a sustainable solution in the long run, especially if we wanted to support multiple languages or if some users wanted to switch between them.

We don’t want to get into the technical nitty-gritty in this blog, so let’s just say that taking an existing piece of software with a million lines of code and modifying it to allow language switching — without altering the code itself — is a challenge that can seem insurmountable. In particular, modern programming languages use text templates into which data is inserted, such as 'A data set with \{n\} instances and \{v\} variables', which can only be replaced in the source code. In our case, that had to happen *before packing and releasing Orange*. There’s simply no other way around it. It’s how these things work: these templates are compiled into something that no longer exists as text and therefore can’t be swapped out for translations.

Then we get to the part where we bend the rules. I don't mean to brag, but we’ve come up with a pretty clever trick that, well, hides the template inside the text to protect it from turning into that untranslatable thing, allowing it to be swapped out with the translation just before it’s printed. (This is my best attempt at explaining a complex technical challenge in simple terms. The real goal here is to impress you with just how smart we are. :)

A multilingual version of Orange was on our wish list for a very, very long time, and we are really happy and proud that we finally made it happen.
