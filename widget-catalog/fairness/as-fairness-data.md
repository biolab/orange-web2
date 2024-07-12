---
title: "As Fairness Data"
category: "Fairness"
---
As Fairness Data
================
Adds Fairness attributes to the dataset.

**Inputs**

- Data: reference dataset

**Outputs**

- Data: reference dataset with selected Fairness meta-attributes.

**As Fairness Data** is a widget that allows the user to select and add Fairness meta-attributes to the dataset. These meta-attributes are required by other fairness widget to function properly. These meta-attributes are: `Favorable Class Value`, `Protected Attributes` and `Privileged Protected Attribute Values`.

![](/widget-catalog/fairness/images/as-fairness-data.png)

Example
-------

This simple example shows how to use the **As Fairness Data** widget. First, we load the German Credit Data dataset and then we connect it to the **As Fairness Data** widget. We select the `Personal status and sex` attribute as the `Protected Attribute` and all values representing males as the `Privileged Protected Attribute Values`. We also select `good` as the `Favorable Class Value`. The output of the widget is a dataset with the added meta-attributes.

![](/widget-catalog/fairness/images/as-fairness-data-example.png)

It should be noted that datasets included in orange with the tag `fairness` already have some default fairness meta-attributes added to them and thus do not require the use of the **As Fairness Data** widget before using other fairness widgets. These datasets include: `Adult`, `German Credit Data` and `COMPAS Analysis`.
