---
title: "Equalized Odds Postprocessing"
category: "Fairness"
---
Equalized Odds Postprocessing
================
Postprocessing Fairness algorithm

**Inputs**

- Data: reference dataset
- Preprocessor: preprocessing methods
- Learner: learner to be postprocessed

**Outputs**

- Learner: learner with Fairness postprocessing
- Model: a trained model with Fairness postprocessing

**Equalized Odds postprocessing** Postprocessing fairness algorithm which modifies the predictions of any given classifier to meet certain fairness criteria. It works by first fitting the learner to the training data, creating a model, and using it to get the predictions. It uses these predictions to fit the Equalized Odds Postprocessing algorithm, which creates a post-processor. This post-processor is then used to adjust the model’s predictions on the test data.

Example
-------

In this example we will use the `Equalized Odds Postprocessing` to debias the predictions of a linear regression model. All we need to do is include the `Equalized Odds Postprocessing` widget in our workflow and connect any model and desired preprocessors to it. We then connect the `Equalized Odds Postprocessing` to the `Test & Score` widget along with the dataset to evaluate the performance of the model with postprocessing.

![](/widget-catalog/fairness/images/equal-odds-postprocessing-example.png)