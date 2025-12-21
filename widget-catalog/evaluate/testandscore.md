---
title: "Test and Score"
category: "Evaluate"
---
Test and Score
==============

Tests learning algorithms on data.

**Inputs**

- Data: input dataset
- Test Data: separate data for testing
- Learner: learning algorithm(s)
- Preprocessor: preprocessing method(s)

**Outputs**

- Predictions: data with added predictions
- Evaluation Results: results of testing classification algorithms

The widget tests learning algorithms. Different sampling schemes are available, including using separate test data. The widget does four things. First, it shows a table with different classifier performance measures, such as [classification accuracy](https://en.wikipedia.org/wiki/Accuracy_and_precision) and [area under the curve](https://en.wikipedia.org/wiki/Receiver_operating_characteristic#Area_under_the_curve). Second, it shows model comparison below evaluation results to determine how the model results truly vary. Third, it outputs evaluation results, which can be used by other widgets for analyzing the performance of classifiers, such as [ROC Analysis](../evaluate/rocanalysis.md) or [Confusion Matrix](/widget-catalog/evaluate/../evaluate/confusionmatrix). Fourth, it outputs predictions, which can be observed directly in a [Data Table](/widget-catalog/evaluate/../data/datatable) or analyzed downstream.

The *Learner* signal has an uncommon property: it can be connected to more than one widget to test multiple learners with the same procedures.

![](/widget-catalog/evaluate/images/TestAndScore-stamped.png)

1. The widget supports various sampling methods.
   - [Cross-validation](https://en.wikipedia.org/wiki/Cross-validation_\(statistics\)) splits the data into a given *number of folds* (usually 5 or 10). The algorithm is tested by holding out examples from one fold at a time; the model is induced from other folds and examples from the held out fold are classified. This is repeated for all the folds. The *Stratified* option ensures the folds are similar in terms of class distribution.
   - **Cross validation by feature** performs cross-validation but folds are defined by the selected categorical feature from meta-features.   
   - **Random sampling** randomly splits the data into the training and testing set in the given proportion (e.g. 70:30, see *Training set size*); the whole procedure is repeated for a specified number of times (*Repeat train/test*). *Statified* option ensures the folds are similar in terms of class distribution.
   - **Leave-one-out** is similar, but it holds out one instance at a time, inducing the model from all others and then classifying the held out instances. This method is obviously very stable, reliable... and very slow.
   - **Test on train data** uses the whole dataset for training and then for testing. This method practically always gives wrong results.
   - **Test on test data**: the above methods use the data from *Data* signal only. To input another dataset with testing examples (for instance from another file or some data selected in another widget), we select *Separate Test Data* signal in the communication channel and select Test on test data.
2. The widget will compute a number of performance statistics. A few are shown by default. To see others, right-click on the header and select the desired statistic.
   - **Classification**:
   ![](/widget-catalog/evaluate/images/TestAndScore-Classification.png)
   *Evaluation results for target* can be selected at the top of the evaluation box. When *(None, show average over classes)* is selected, methods return scores that are weighted averages over all classes. For example, in case of the classifier with 3 classes, scores are computed for class 1 as a target class, class 2 as a target class, and class 3 as a target class. Those scores are averaged with weights based on the class size to retrieve the final score.
   Performance statistics for classification:
        - [Area under ROC](http://gim.unmc.edu/dxtests/roc3.htm) is the area under the receiver-operating curve.
        - [Classification accuracy](https://en.wikipedia.org/wiki/Accuracy_and_precision) is the proportion of correctly classified examples.
        - [F-1](https://en.wikipedia.org/wiki/F1_score) is a weighted harmonic mean of precision and recall (see below).
        - [Precision](https://en.wikipedia.org/wiki/Precision_and_recall) is the proportion of true positives among instances classified as positive, e.g. the proportion of *Iris virginica* correctly identified as Iris virginica.
        - [Recall](https://en.wikipedia.org/wiki/Precision_and_recall) is the proportion of true positives among all positive instances in the data, e.g. the number of sick among all diagnosed as sick.
        - [Specificity](https://en.wikipedia.org/wiki/Sensitivity_and_specificity) is the proportion of true negatives among all negative instances, e.g. the number of non-sick among all diagnosed as non-sick.
        - [LogLoss](https://en.wikipedia.org/wiki/Cross_entropy) or cross-entropy loss takes into account the uncertainty of your prediction based on how much it varies from the actual label. 
        - [Matthews correlation coefficient](https://en.wikipedia.org/wiki/Phi_coefficient) takes into account true and false positives and negatives and is generally regarded as a balanced measure which can be used even if the classes are of very different sizes.
        - Train time - cumulative time in seconds used for training models.
        - Test time - cumulative time in seconds used for testing models.
   - Regression
   ![](/widget-catalog/evaluate/images/TestAndScore-Regression.png)
      - [MSE](https://en.wikipedia.org/wiki/Mean_squared_error) measures the average of the squares of the errors or deviations (the difference between the estimator and what is estimated).
      - [RMSE](https://en.wikipedia.org/wiki/Root_mean_square) is the square root of the arithmetic mean of the squares of a set of numbers (a measure of imperfection of the fit of the estimator to the data)
      - [MAE](https://en.wikipedia.org/wiki/Mean_absolute_error) is used to measure how close forecasts or predictions are to eventual outcomes.
      - [MAPE](https://en.wikipedia.org/wiki/Mean_absolute_percentage_error) or mean absolute percentage error measures how far off your predictions are, on average, in percentage terms.
      - [R2](https://en.wikipedia.org/wiki/Coefficient_of_determination) is interpreted as the proportion of the variance in the dependent variable that is predictable from the independent variable.
      - [CVRMSE](https://en.wikipedia.org/wiki/Root-mean-square_deviation) is RMSE normalized by the mean value of actual values.
      - Train time - cumulative time in seconds used for training models.
      - Test time - cumulative time in seconds used for testing models.
3. Choose the score for pairwise comparison of models and the region of practical equivalence (ROPE), in which differences are considered negligible.
   Pairwise comparison of models using the selected score (available only for cross-validation). The number in the table gives the probability that the model corresponding to the row has a higher score than the model corresponding to the column. What the higher score means depends on the metric: a higher score can either mean a model is better (for example, CA or AUC) or the opposite (for example, RMSE). If negligible difference is enabled, the smaller number below shows the probability that the difference between the pair is negligible. The test is based on the [Bayesian interpretation of the t-test](https://link.springer.com/article/10.1007/s10994-015-5486-z) ([shorter introduction](https://baycomp.readthedocs.io/en/latest/introduction.html)).

Preprocessing for predictive modeling
--------------------------------------

When building predictive models, one has to be careful about how to preprocess the data. There are two possible ways to do it in Orange, each slightly different:

1. Connect [Preprocess](/widget-catalog/evaluate/../data/preprocess) to the learner. This will override the default preprocessing pipeline for the learner and apply only custom preprocessing pipeline (default preprocessing steps are described in each learner's documentation). The procedure might lead to errors within the learner.

   ![](/widget-catalog/evaluate/images/Preprocess-Models1.png){width=400px}

2. Connect **Preprocess** to Test and Score. This will apply the preprocessors to each batch within cross-validation. Then the learner's preprocessors will be applied to the preprocessed subset.

   ![](/widget-catalog/evaluate/images/Preprocess-Models2.png){width=400px}

Finally, there's a wrong way to do it. Connecting **Preprocess** directly to the original data and outputting preprocessed data set will likely overfit the model. Don't do it.

   ![](/widget-catalog/evaluate/images/Preprocess-Models3.png){width=400px}

Example
-------

In a typical use of the widget, we give it a dataset, say *titanic*, and a few learning algorithms ([Naive Bayes](../model/naivebayes.md), [Tree](../model/tree.md), [Logistic Regression](../model/logisticregression.md), and [SVM](../model/svm.md)) and we observe their performance in the table inside the **Test & Score** widget and in the [ROC](../evaluate/rocanalysis.md). The data is often preprocessed before testing; in this case we did some manual feature selection ([Select Columns](/widget-catalog/evaluate/../data/selectcolumns) widget) on *Titanic* dataset, where we kept sex and status in the features and removed age.

In the bottom table of the Test and Score widget, we have a pairwise comparison of models. We selected that comparison is based on the _area under ROC curve_ statistic. The number in the table gives the probability that the model corresponding to the row is better than the model corresponding to the column. We can, for example, see that probability for the tree to be better than SVM is almost one, and the probability that Naive Bayes is better than the tree is 0.085.

![](/widget-catalog/evaluate/images/TestAndScore-Example.png)

Another example of using this widget is presented in the documentation for the [Confusion Matrix](/widget-catalog/evaluate/../evaluate/confusionmatrix) widget.
