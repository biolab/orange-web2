---
title: "Scoring Sheet Viewer"
category: "Visualize"
---
Scoring Sheet Viewer
================
A widget for visualizing the scoring sheet predictions.

**Inputs**

- Classifier: a trained scoring sheet model
- Data: dataset used to visualize the predictions on different instances

**Outputs**

- Features: selected features used in the scoring sheet

**Scoring Sheet Viewer** widget offers a simple and intuitive way of visualizing the predictions of the scoring sheet model. The widget takes as input a trained scoring sheet model and an optional dataset (instance) on which we want to visualize the predictions. The widget presents us with a table that visualizes each feature's contribution to the final score, where a higher score indicates a greater chance for an instance to be classified with the target class. Each feature's contribution can be positive or negative, indicating whether it increases or decreases the risk.

![](/widget-catalog/visualize/images/ScoringSheetViewer-stamped.png){width=400px}

1. *Target class*: set the target class for viewing.
2. Scoring sheet with attributed points and an indicating, whether the attributes are selected for the output.
3. Total scores and probabilities for a given instance.

The widget output selected features, which can be used downstream in [Scatter Plot](../visualize/scatterplot.md) or [Sieve Diagram](/widget-catalog/visualize/../visualize/sievediagram).

Example
-------

In this example, we first sample the *heart_disease* data, with 70% used to train the [Scoring Sheet](../model/scoringsheet.md) model and 30% routed to the [Data Table](/widget-catalog/visualize/../data/datatable) widget. This setup allows us to select instances and observe how the scoring sheet performs on new, unseen data.

![](/widget-catalog/visualize/images/ScoringSheetViewer-Example.png)

Let's analyze and learn to interpret the scoring sheet using the example. It features five decision parameters, with points ranging from -5 to 5. We have set the target class to '1', indicating the 'presence' of heart disease. Positive-value decision parameters increase the risk of heart disease (i.e. reversable defect and asymptomatic chest pain), while those with negative values reduce it (i.e. ST by exercise higher than 1, no exercise induced angina, and few major vessels colored).

Consider a selected instance from the Data Table widget. It has a 'exerc ind ang' attribute value of '0', which reduces the heart disease risk by 3 points. However, it also has the 'chest pain' attribute set to 'asymptomatic', increasing the risk by 4 points. This combination results in a total score of 2, corresponding to a 79.6% probability of having heart disease.
