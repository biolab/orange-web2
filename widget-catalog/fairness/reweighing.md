---
title: "Reweighing"
category: "Fairness"
---
Reweighing
================
Applies the reweighing algorithm to the dataset.

**Inputs**

- Data: reference dataset

**Outputs**

- Preprocessed Data: reference dataset with a meta-attribute `weights` added to it.
- Preprocessor: a preprocessor trained on the reference dataset.

**Reweighing** is a widget that mitigates bias in a dataset by assigning weights to individual instances in a way that encourages the model to prioritize learning from underrepresented groups while de-emphasizing overrepresented groups. This widget can be used in two ways:

- When the user provides the data as an input this widget will apply the reweighing algorithm to the dataset and output the preprocessed dataset with the meta-attribute `weights` added to it. The user can then use the preprocessed dataset as an input to other widgets. It will also output a preprocessor that can be used to apply the same transformation to a subset of the dataset.

- This widget can also be provided as an input to a learner widget. In this case the widget will be applied to any of the training datasets that are provided as an input to the learner widget.

Example
-------

The first example shows how the **Reweighing** widget can be used to preprocess a dataset. First load a fairness dataset, in this case we will use the compas analysis dataset. We than split the dataset into a training and testing set using the `Data Sampler` widget. We connect the training set to the **Reweighing** widget which will train the algorithm and create a preprocessor. The preprocessor can be connected to the `Apply Domain` widget along with the testing set to apply the same transformation to the testing set. The preprocessed testing set can then be connected to the `Dataset Bias` widget to evaluate the bias of the dataset.

![](/widget-catalog/fairness/images/reweighing-dataset-example.png)

The second example demonstrates how to use the **Reweighing** widget as a preprocessor for a learner widget. We use it by connecting it and any other preprocessors we want to use into the `Combine Preprocessors` widget which we connect into the `Weighted Logistic Regression` widget. We then connect a dataset with fairness attributes and the learner into the `Test & Score` widget to evaluate the performance of the learner. In the evaluation results we can see the performance of the learner as well as the fairness metrics for its predictions.

![](/widget-catalog/fairness/images/reweighing-preprocessor-example.png)

Note, in this example we used the [Weighted Logistic Regression](weighted-logistic-regression.md) and the [Combine preprocessors](/widget-catalog/fairness/combine-preprocessors) widgets which are described in their respective sections.