---
author: "Pavlin Poličar"
date: "2024-05-14"
draft: false
title: Orange uses the fastest t-SNE implementation in Python
url: "fastest-tsne-library"
thumbImage: "tsne.png"
frontPageImage: "tsne.png"
blog: ["tsne", "papers"]
shortExcerpt: "Journal of Statistical Software published a paper describing our state-of-the-art implementation openTSNE."
longExcerpt: "Journal of Statistical Software published a paper describing our state-of-the-art implementation openTSNE."
---

When dealing with large data sets containing large numbers of rows and columns, it is often difficult to see what’s what and identify interesting patterns in the data. One common approach for making sense of these kinds of high-dimensional data sets is to use dimensionality reduction techniques to generate two-dimensional embeddings, which we can then visualize in a scatter plot. One of the most popular of these techniques is t-distributed stochastic neighbor embedding (t-SNE).

Nearly six years ago, existing Python implementations of t-SNE were either prohibitively slow, difficult to set up, or lacked newly researched features. One of our lab members, Pavlin Poličar, set out to write a better implementation -- one that would be fast, simple to play around with, easy to install, and incorporate all the latest developments to generate embeddings as informative as possible. And thus came into existence openTSNE, our new Python implementation of the t-SNE algorithm. openTSNE quickly gained traction, and since its first release in 2018, has gained widespread adoption by the broader machine-learning community. The package has been downloaded well over half a million times and has garnered over 1,300 stars on GitHub. It has been relied on in numerous high-profile projects and publications in the fields of bioinformatics, physics, and psychology to quickly generate informative visualizations of complex data. 

One of openTSNE's key features is its speed. Based on the FIt-SNE approximation developed by Linderman et al. (2019), openTSNE is able to scale to massive data sets containing millions of data points. At the time of writing, openTSNE is the fastest CPU-based implementation of the t-SNE algorithm available in Python.

<WindowScreenshot src="comparison.png"/>

In Orange, the t-SNE widget has been powered by openTSNE for the past several years. The pairing between the interactive visual analytics tools available in Orange and t-SNE allows us to quickly generate and explore the two-dimensional t-SNE embeddings and investigate clusters, trends, and outliers visible in the visualization. 

<WindowScreenshot src="tsne.png"/>

We are pleased to announce that after nearly six years since its inception, our accompanying openTSNE paper has now been published in the Journal of Statistical Software. You can [read the paper](https://www.jstatsoft.org/article/view/v109i03) or check out our [GitHub repository](https://github.com/pavlin-policar/openTSNE) to learn more.
