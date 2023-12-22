---
author: "Blaž Zupan"
date: "2023-12-22"
draft: false
title: "Cookie Mining"
url: "cookie-mining-2023"
thumbImage: "cookie-mining-thumb.jpg"
frontPageImage: "cookie-mining-thumb.jpg"
blog: ["text mining", "images"]
shortExcerpt: "A companion to our Orange Data Mining Holiday Special video on how we mined cookie descriptions and how to create cookie clustering." 
longExcerpt: "A companion to our Orange Data Mining Holiday Special video on how we mined cookie descriptions and how to create cookie clustering."
---

We just released a [video](https://www.youtube.com/watch?v=UMGY9Uf3I6g&list=PLmNPvQr9Tf-Yirm1aN3kHGnhMofrLmEy7&index=4) about cookie mining. Yes, mining data from cookies. The video goes through the technicalities rather quickly and deliberately doesn't dive into the intricacies of Orange - it's Christmas time and we're focusing on cookies. To accompany the video, here is a blog that dives into the workflow we used and explains its inner workings.

To replicate our cookie mining, you will need:

1. Orange, :)
2.  Orange's Text, Image Analytics, and Prototypes add-ons installed (currently, ChatGPT widgets are in the Prototypes add-on),
3. the [cookie data file](http://file.biolab.si/datasets/2023-cookies.xlsx) with a list of cookie names,
4. the [images of cookies](http://file.biolab.si/datasets/2023-cookies.zip),
5. OpenAI's API key to the ChatGPT. Alternatively, you can start with the [data file](http://file.biolab.si/datasets/2023-cookies-w-description.xlsx) which already contains cookie descriptions and bypass the use of the ChatGPT Constructor widget.

Here is the workflow we constructed in [the video](https://www.youtube.com/watch?v=UMGY9Uf3I6g&list=PLmNPvQr9Tf-Yirm1aN3kHGnhMofrLmEy7&index=4):

<WindowScreenshot src="workflow.png" />

The workflow consist of three mail branches.

## 1. Cookie Description Embedding and Clustering

In the top branch, which starts with a File widget, we load the cookie names from [the Excel file](http://file.biolab.si/datasets/2023-cookies.xlsx) and pass them to the ChatGPT Constructor. This takes the cookie name, one line at a time, and constructs a ChatGPT prompt, where the start of the prompt is the text we entered in the ChatGPT Constructor, followed by the cookie name attribute from the data file. The output of ChatGPT Constructor is then a data table with an extra row containing cookie descriptions.Here is the workflow and widgets that illustrate this part of our cookie analysis pipeline.

<WindowScreenshot src="cookie-description.png" />

Some cookie descriptions are long, and we can read them more easily in the Corpus Viewer. To use it, we need to mark that our data table contains the text corpus and specify that the text we want to mine is stored in the "Text" attribute, i.e. the attribute constructed by the ChatGPT Constructor.

<WindowScreenshot src="corpus.png" />

We pass the corpus data to the Document Embedding widget, where we use BERT sentence embedding to describe each cookie description with its embedding, i.e. with a numeric vector. Then we use the Data Table widget to check the result of the embedding.

<WindowScreenshot src="embedding.png" />

Note that while we set the ChatGPT temperature parameter to 0, which tells ChatGPT to always choose the most likely word when constructing a text sequence, ChatGPT would still randomly choose the best continuation among the top-ranked equally likely words. Since we cannot control the random seeds in ChatGPT, this means that you may get slightly different cookie descriptions than ours, and there is no way to exactly replicate our results.

We feed the cookie embedding into the hierarchical clustering pipeline, which must first estimate the pairwise cookie distances and then feed the distances into the Hierarchical Clustering widget. We used cosine distance and Ward linkage.

<WindowScreenshot src="clustering.png" />

If you are like me, cookie names alone would not tell you much. We need cookie images! Our goal is to be able to select a cookie cluster and see what those cookies actually look like.

## 2. Cluster Exploration with Images

We have prepared a folder with images of our cookies and conveniently named the files with the cookie names.

<WindowScreenshot src="folder.png" />

We can load the cookie images into Orange with the Import Images widget and check the loaded data with the Image Viewer widget.

<WindowScreenshot src="images.png" />

They all look great! Cookies, I mean :). Note that Orange does not carry images with the data at all, but instead constructs the data table when using Import Images, which stores the location of image files in one of the fields. These locations are then used by the image viewer when displaying images. We can also check if this is indeed the case by observing the data passed by the Import Images widget, as I have done below.

<WindowScreenshot src="image-data.png" />

We are now ready to merge the text data with the image data. We will do this after the text embedding and tell the Merge Data widget to match the rows of the two files using the cookie name attribute from the text record and the image name attribute from the image record. 

<WindowScreenshot src="merge.png" />

Now, with the merged dataset, we can do the clustering and observe the images of the cookie groups. We can also try to summarize the descriptions of the cookies selected in the dendrogram.

<WindowScreenshot src="cluster-explanation.png" />

Oh, joy! A visual browser of the cookie world!

As a final touch, we can ask the ChatGPT Summarize widget to construct a summary from all the descriptions of the cookies we selected in the hierarchical clustering dendrogram.

<WindowScreenshot src="summarize.png" />

## 3. Cookie Wish and Nearest Neighbors in the Cookie Vector Space

There's only one piece left. Write a wish and figure out which cookie is the best match. To write the wish, we use Create Corpus. We pass the text to the document embedding widget, and then find nearest neighbors in the cookie description embedding space. Again, we use cosine distance and limit the number of neighbors to three. Finally, we use the Image Viewer to display the images of the cookies whose description best matches the text we wrote in Create Corpus.

<WindowScreenshot src="neighbors.png" />

And that's it. This was not the easiest workflow, but we hope you enjoyed it and especially [the video](https://www.youtube.com/watch?v=UMGY9Uf3I6g&list=PLmNPvQr9Tf-Yirm1aN3kHGnhMofrLmEy7&index=4). There, on YouTube, do not forget to [subscribe to our Orange Data Mining channel](https://www.youtube.com/orangedatamining). 

**Merry Christmas and a Happy New Year!**

<WindowScreenshot src="just-cookies.png" />
