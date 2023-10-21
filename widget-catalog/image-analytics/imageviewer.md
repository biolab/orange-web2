---
title: "Image Viewer"
category: "Image Analytics"
---
Image Viewer
============

Displays images that come with a data set.

**Inputs**

- Data: A data set with images.

**Outputs**

- Data: Images that come with the data.
- Selected images: Images selected in the widget.

The **Image Viewer** widget can display images from a data set, which are
stored locally or on the internet. The widget will look for an attribute with *type=image* in the third header row. It can be used for image comparison, while looking for similarities or discrepancies between selected data instances (e.g. bacterial growth or bitmap representations of handwriting).

![](/widget-catalog/image-analytics/images/ImageViewer-stamped.png)

1. Information on the data set
2. Select the column with image data (links).
3. Select the column with image titles.
4. Zoom in or out.
5. Saves the visualization in a file.
6. Tick the box on the left to commit changes automatically.
   Alternatively, click *Send*.

Examples
--------

A very simple way to use this widget is to connect the **File** widget with **Image Viewer** and see all the images that come with your data set. You can also visualize images from [Import Images](/widget-catalog/image-analytics/importimages).

![](/widget-catalog/image-analytics/images/image-viewer-example1.png)

Alternatively, you can visualize only selected instances, as shown in the example below.

![](/widget-catalog/image-analytics/images/image-viewer-example2.png)
