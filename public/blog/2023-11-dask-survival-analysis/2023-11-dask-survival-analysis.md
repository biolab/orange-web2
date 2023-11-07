---
author: "Jaka Kokošar"
date: "2023-11-08"
draft: false
title: "From Data Portals to Portals of Doom: Avoiding the Doom with Dask"
url: "dask-survival-analysis"
thumbImage: "orange-not-responding.png"
frontPageImage: "orange-not-responding.png"
blog: ["dask", "survival analysis"]
shortExcerpt: "Sidestep the pitfalls of second-hand data portals and discover how to circumvent their limitations with Orange and Dask." 
longExcerpt: "Sidestep the pitfalls of second-hand data portals and discover how to circumvent their limitations with Orange and Dask."
---

Since its inception, The Cancer Genome Atlas ([TCGA](https://www.cancer.gov/ccg/research/genome-sequencing/tcga)) project has been a treasure trove of data for biomedical researchers. The data TCGA provides is essential for researchers who want to analyze potential biomarkers. But there's a hitch. Not every researcher is a data whisperer.

Luckily, there are several web-based tools that researchers can add to their toolkits. These tools make it easy to access and analyze survival data from TCGA. Notable examples are [Kaplan-Meier Plotter](https://kmplot.com/analysis/) and [GEPIA](http://gepia.cancer-pku.cn/), among [others](https://www.frontiersin.org/journals/oncology/articles/10.3389/fonc.2020.00068/full).

<WindowScreenshot src="gepia-example.png" />

In their very essence, these tools allow you to enter a gene name and output the results of the analysis on pre-curated TCGA datasets. For example, in the image above, I have entered the gene name TP53 and selected the cancer type lower-grade glioma (TCGA-LGG). We see the Kaplan-Meier plot for the high- and low-risk patient groups and corresponding p-values, which quantify the difference in survival between the groups. For details, refer to a review paper by [Zheng and others](https://www.frontiersin.org/journals/oncology/articles/10.3389/fonc.2020.00068/full).

Looks good, where is the catch? Well, as it turns out, we shouldn't blindly trust the underlying source of survival data of those tools. Curated datasets between tools can vary (more in [this paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8726696/) by Idogawa et al.). And this is no small thing. Adding fuel to the fire here, I will let the reader guess how many of those tools are open-sourced.

Still, despite their limitations, these tools are useful. However, I would like to analyze data from sources I trust. For that, I have prepared [notebooks](https://github.com/jakakokosar/tcga-data) that can download gene expression and survival data for all cancer types in the TCGA project. I see the irony here: I am not asking you to trust [my code](https://github.com/jakakokosar/tcga-data); if you can, verify it. Or use the official [GDC data portal](https://portal.gdc.cancer.gov/) to download data.

The combined dataset from TCGA consists of approximately 10K samples and 60K gene expression values. The size of the file on my disk is around 3GB. You might think this is not much, but try loading it in Pandas. You will need around 30GB of system memory and 17 minutes to spare just to read the file.

```python
import pandas as pd

df = pd.read_csv('data/TCGA-combined.csv')

# peak memory: 30722.37 MiB, increment: 30597.50 MiB
```

But we did not come this far just to use code again. Can we use any existing visual analytics tools? Kaplan-Meier plotter stands out because it allows me to upload my own data (a rare find among all the other tools). That is just what I was looking for!

<WindowScreenshot src="km-plotter-upload.png" />

The option to upload my own data is cool, but there is a 4MB limitation.

What about Orange? 

<WindowScreenshot src="orange-not-responding.png" />

Well... let's say that things quickly get out of hand. Orange typically handles files that are within the range of a few hundred megabytes just fine. This, of course, also depends on the specifications of the machine that Orange is running on. I am going to refer you to [Marko's blog](https://orangedatamining.com/blog/dask-spectroscopy/), where he explains the problem of loading large datasets in Orange. There, Marko also explains our recent efforts to enable [Orange](https://github.com/biolab/orange3/wiki/Orange-with-Dask) for large datasets by integrating Dask.

If you really think about it, now that I can work with large datasets in Orange, I have a similar tool to those web-server-like ones. Well, the difference is that I have to bring my own data and construct my analysis pipelines from scratch. However, the advantage is that I am not limited to the task-specific analysis that those other tools provide and that I can fully trust the data source. All I have to do is install the [experimental Orange version](https://github.com/biolab/orange3/wiki/Orange-with-Dask); neat!

Here, for example, I stratify lower-grade glioma patients (TCGA-LGG) into high- and low-risk groups according to the expression of gene TP53. Then, I use the Kaplan-Meier widget to compute and plot survival curves and test how significant the difference in survival between the groups is using the log-rank test. All this without my computer breaking a sweat! 

<WindowScreenshot src="workflow.png" />

With the workflow I constructed above, I could click through a list of genes and observe the results. But in my data, I have a lot of genes. This quickly becomes a tedious task. I could automate this process with the Rank Survival Features widget. The output is the ranked list of genes based on the p-value from the log-rank test. 

<WindowScreenshot src="workflow2.png" />

And since we have the whole TCGA datasets loaded, I could branch the same workflow and repeat the same procedure on different types of cancer and compare results side by side! 

Remember that we are working with an experimental version of Orange. Not all functionalities are currently supported out of the box. All this can also be done with a [stable Orange release](https://orangedatamining.com/download/). Taking into account data size and system resources available to Orange. You can check [this library](https://orangedatamining.com/examples/?tag=Survival+Analysis) of survival analysis workflows. Workflows that range from simple survival curve estimation to more complex analysis using Cox regression are readily available to experiment with.


Thats it! You can download and try [the full workflow](full-workflow.ows) yourself. 

