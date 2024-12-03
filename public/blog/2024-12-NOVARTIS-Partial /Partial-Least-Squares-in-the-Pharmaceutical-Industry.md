---
author: "Dr Tine Porenta"
date: "2024-12-03"
draft: false
title: "Partial Least Squares in the Pharmaceutical Industry"
url: "PLS-pharma-Orange"
thumbImage: "Caption1.png"
frontPageImage: "Caption1.png"
blog: ["data", "analytics", "pharma", "PLS", "Orange", "insights"]
shortExcerpt: "Partial Least Squares (PLS) enhances pharmaceutical research by analyzing complex, high-dimensional datasets, addressing multicollinearity, and building predictive models. Orange streamlines its implementation for robust and innovative insights, driving innovation in pharmaceutical research."
longExcerpt: "Evolving analytics can significantly shape pharmaceutical research and drive innovation. Partial Least Squares (PLS) is a powerful tool that plays a crucial role in Multivariate Data Analysis (MVDA). This method is particularly valuable because the industry often deals with large, complex datasets involving numerous variables and factors. PLS is well-suited for managing these high-dimensional datasets by reducing dimensionality and extracting key information, which simplifies interpretation and analysis. With Orange, researchers can streamline its implementation, leveraging the software's intuitive workflows to drive robust and innovative analyses."
---

As a long-time enthusiast of the Orange data mining tool at Novartis, a global leader in innovative medicines, I’ve seen firsthand how evolving analytics can shape pharmaceutical research and drive innovation. Recent updates to Partial Least Squares (PLS) methods and visualizations inspired me to share insights on how these tools can simplify complex data and guide smarter, more impactful research decisions.

In the pharmaceutical industry, the Partial Least Squares (PLS) algorithm plays a crucial role in Multivariate Data Analysis (MVDA). This method is particularly valuable because the industry often deals with large, complex datasets involving numerous variables and factors. PLS is well-suited for managing these high-dimensional datasets by reducing dimensionality and extracting key information, which simplifies interpretation and analysis.

PLS is also effective in addressing multicollinearity, a common issue in pharmaceutical datasets. Many variables, such as active ingredient concentrations and process parameters, are often highly correlated. PLS can manage these correlations, ensuring more accurate analysis and helping identify significant factors.

Furthermore, PLS is widely used in pharmaceutical research for modeling and prediction tasks. It enables the construction of reliable regression models to predict important outcomes, such as drug efficacy, based on various independent variables. In drug discovery and development, PLS can pinpoint the most influential variables affecting a particular outcome, thereby guiding decision-making and helping prioritize critical factors.

In the following, I will present the implementation of the PLS method in Orange. Due to data confidentiality, we cannot share any proprietary datasets, so we will use a publicly available example, such as a body fat prediction dataset. In this example, an initial examination of the scores reveals two clear outliers: one individual with an extremely low height (30 inches) and another with a very high weight (360 lbs). Data cleaning, including outlier removal, is a crucial preprocessing step that aims to enhance model performance while maintaining data integrity and representativeness.

<Figure src="Caption1.png" width="40%"/>

The close proximity of the remaining data points suggests strong correlations between the measured parameters, indicating the presence of multicollinearity within the dataset. By accounting for these interrelationships, we can identify the most informative variables, leading to the development of a more accurate and reliable model.

<Figure src="Caption2.png" width="40%"/>

Based on the findings, we conclude that the model can be streamlined by reducing the number of parameters. Therefore, we will build a new model using only height, abdomen, and age as input variables. This simplification allows us to concentrate on the most relevant factors, potentially improving the model's interpretability and the efficiency of the analysis.

<Figure src="Caption3.png" width="40%"/>

A Permutation plot is a valuable tool in PLS analysis for assessing the stability and reliability of a model by permuting the response variable. The plot displays the correlation coefficient between the original y-variable and the permuted y-variable on the x-axis, and the cumulative R² and Q² values on the y-axis. By comparing the original model's performance with the results from permuted iterations, we can evaluate the model's robustness and its ability to make accurate predictions. The permutation plot results in this case indicate that our model demonstrates strong stability and reliable predictive capabilities.

<Figure src="Caption4.png" width="40%"/>

We should note that this is only an example and not a real pharmaceutical dataset. In the pharmaceutical industry, model validation involves assessing the model's performance on independent, newly generated datasets. This process ensures the model's reliability and ability to make accurate predictions in real-world scenarios. 

Tools like Orange play a pivotal role in this process, offering intuitive workflows and advanced methods like PLS to streamline data analysis. By enabling researchers to explore, visualize, and model data effectively, Orange continues to be an invaluable resource for driving innovation in pharmaceutical research.
