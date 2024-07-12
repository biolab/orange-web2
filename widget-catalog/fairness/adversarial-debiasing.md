---
title: "Adversarial Debiasing"
category: "Fairness"
---
Adversarial Debiasing
================
A classification model with a debiasing option.

**Inputs**

- Data: reference Fairness dataset
- Preprocessor: preprocessing methods

**Outputs**

- Learner: adversarial debiasing learning algorithm
- Model: a trained adversarial debiasing model

**Adversarial Debiasing** widget offers a in-processing type of fairness mitigation algorithm. It involves simultaneous training of a predictor and a discriminator. The goal of the predictor is to predict the target variable accurately. At the same time, the discriminator aims to predict the protected variable (such as gender or race) based on the predictor’s predictions. The main goal is to maximize the predictor’s ability to predict the target variable while reducing the discriminator’s ability to predict the protected variable based on those predictions.

In short, **Adversarial Debiasing** is a classification algorithm with or without fairness constraints.

![](/widget-catalog/fairness/images/adversarial-debiasing.png)

Warning
-------

The **Adversarial Debiasing** widget requires TensorFlow in order to work. Because TensorFlow is a big library, we made it an optional dependency. If you want to use the widget you can install TensorFlow by clicking the `Install TensorFlow` button in the widget.

![](/widget-catalog/fairness/images/adversarial-debiasing-no-tensorflow.png)

Example
-------

In this example we will try to obtain bias free predictions using the `Adversarial Debiasing` widget. First we include the widget into the canvas and tune the settings to suit our needs. What is important here is to tick the `Use debiasing` box and set the `Adversary Loss Weight` to more than 0 if we want to see the effect of the debiasing. We then connect the widget along with the dataset into the `Test & Score` widget to evaluate the performance of the model. In the evaluation results we can see the performance of the model as well as the fairness metrics for its predictions.

![](/widget-catalog/fairness/images/adversarial-debiasing-example.png)
