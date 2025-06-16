---
title: "Mosaic Display"
category: "Visualize"
---
Mosaic Display
==============

Display data in a mosaic plot.

**Inputs**

- Data: input dataset
- Data Subset: subset of instances

**Outputs**

- Selected Data: instances selected from the plot
- Data: data with an additional column showing whether an instance is selected

The **Mosaic plot** is a graphical representation of a two-way frequency table or a contingency table. It is used for visualizing data from two or more qualitative variables and was introduced in 1981 by Hartigan and Kleiner and expanded and refined by Friendly in 1994. It provides the user with the means to more efficiently recognize relationships between different variables. If you wish to read up on the history of Mosaic Display, additional reading is available [here](http://www.datavis.ca/papers/moshist.pdf).

![](/widget-catalog/visualize/images/MosaicDisplay-stamped.png)

1. Select the variables you wish to see plotted. Optimize your projection with **Find Informative Mosaics**. This feature scores attributes by ReliefF and returns the top scoring variables with a simultaneous visualization update.
2. Select interior coloring. You can color the interior according to any categorical variable or you can use the *Pearson residual*, which is the difference between observed and fitted values, divided by an estimate of the standard deviation of the observed value. If *Compare with total* is clicked, a comparison is made to all instances.

Example
-------

We loaded the *titanic* dataset and connected it to the **Mosaic Display** widget. We decided to focus on the three features suggested by *Find Informative Mosaics*, namely status, sex and survival. We colored the interiors according to Pearson residuals in order to demonstrate the difference between observed and fitted values.

![](/widget-catalog/visualize/images/MosaicDisplay-Example.png)

We can see that the survival rates for men and women clearly deviate from the fitted value.
