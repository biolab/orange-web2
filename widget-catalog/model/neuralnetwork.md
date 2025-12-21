---
title: "Neural Network"
category: "Model"
---
Neural Network
==============

A multi-layer perceptron (MLP) algorithm with backpropagation.

**Inputs**

- Data: input dataset
- Preprocessor: preprocessing method(s)

**Outputs**

- Learner: multi-layer perceptron learning algorithm
- Model: trained model

The **Neural Network** widget uses sklearn's [Multi-layer Perceptron algorithm](http://scikit-learn.org/stable/modules/neural_networks_supervised.html) that can learn non-linear models as well as linear.

![](/widget-catalog/model/images/NeuralNetwork-stamped.png)

1. A name under which it will appear in other widgets. The default name is "Neural Network".
2. Set model parameters:
   - *Neurons in hidden layers*: the setting represents the number of neurons in the i-th hidden layer. E.g. a neural network with 3 layers can be defined as `2,3,2`.
   - *Activation* function for the hidden layer:
      - Identity: no-op activation, useful to implement linear bottleneck
      - Logistic: the logistic sigmoid function
      - tanh: the hyperbolic tan function
      - ReLu: the rectified linear unit function
   - *Solver* for weight optimization:
      - L-BFGS-B: an optimizer in the family of quasi-Newton methods
      - SGD: stochastic gradient descent
      - Adam: stochastic gradient-based optimizer
   - *Regularization*: L2 penalty (regularization term) parameter
   - *Maximal number of iterations*: highest number of iterations
   - *Replicable training*: if ticked, training results can be reproduced.

   Other parameters are set to [sklearn's defaults](http://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html).
3. When *Apply Automatically* is ticked, the widget will communicate changes automatically. Alternatively, click *Apply*.

Preprocessing
-------------

Neural Network uses default preprocessing when no other preprocessors are given. It executes them in the following order:

- removes instances with unknown target values
- continuizes categorical variables (with one-hot-encoding)
- removes empty columns
- imputes missing values with mean values
- normalizes the data by centering to mean and scaling to standard deviation of 1

To remove default preprocessing, connect an empty [Preprocess](/widget-catalog/model/../data/preprocess) widget to the learner.

Example
-------

The example is a classification task on the *iris* dataset from the [File](../data/file.md) widget. We compare the results of **Neural Network** with the [Logistic Regression](../model/logisticregression.md) in the [Test and Score](/widget-catalog/model/../evaluate/testandscore) widget.

![](/widget-catalog/model/images/NeuralNetwork-Example.png)
