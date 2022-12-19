---
title: "Where Are Misclassifications"
images: ["misclassifications.webp"]
type: "workflows"
blog_link: ""
video: ""
download: "470-misclassification-scatterplot.ows"
workflows: ["Confusion Matrix", "Classification", "Scatter Plot"]
weight: 470
---

Cross-validation of, say, logistic regression can expose the data instances which were misclassified. There are six such instances for iris dataset and ridge-regularized logistic regression. We can select different types of misclassification in Confusion Matrix and highlight them in the Scatter Plot. No surprise: the misclassified instances are close to the class-bordering regions in the scatter plot projection.
