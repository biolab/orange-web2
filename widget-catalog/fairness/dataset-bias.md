---
title: "Dataset Bias"
category: "Fairness"
---
Dataset Bias
================
Computes the bias of a dataset.

**Inputs**

- Data: dataset to be evaluated


**Dataset Bias** computes and displays the bias of a dataset. More specifically, it computes the disparate impact and statistical parity difference metrics for the dataset. \
The ideal threshold is 1.0 for disparate impact and 0.0 for statistical parity difference. Values under the ideal threshold indicate bias towards the unprivileged group. Values above the ideal threshold indicate bias towards the privileged group.

![](/widget-catalog/fairness/images/dataset-bias.png)

Example
-------

This example shows a very simple use of the **Dataset Bias** widget. First we load one of the fairness datasets, in this case the Adult dataset. Then we connect the dataset to the **Dataset Bias** widget. The widget displays the disparate impact and statistical parity difference metrics for the dataset.

![](/widget-catalog/fairness/images/dataset-bias-example.png)

Note, we did not use the [As Fairness Data](/widget-catalog/fairness/as-fairness-data) widget before using the **Dataset Bias** widget. This is because the Adult dataset already has the required fairness meta-attributes added to it.

Another thing to note is that the **Dataset Bias** widget (and other fairness widgets) do not support missing values, this is indicated by the warning icon above the widget. Any missing values in the dataset will automatically be imputed with the average or most frequent value before being used by the widget.