+++
"title" = "As Survival Data"
"category" = "Survival Analysis"
+++
As Survival Data
================
Mark features Time and Event as target variables.

**Inputs**

- Data: reference dataset

**Outputs**

- Data: reference dataset with selected Time and Event marked as target variables

**As Survival** enables the user to manually select which feature will be treated as the Time and Event target variable in the survival dataset.

Example
-------
The available survival datasets in Orange already have correctly defined Time and Event variable as target. However in some cases there are more than one survival enpoints to choose from: in survival analysis we typically encounter either Overall Survival (OS), Relapse-Free Survival (RFS) or Progression-Free Survival (PFS). In such cases **As Survival** can come in handy to pick the correct Time/Event pair with ease.

In the example bellow, we use one of the survival datasets already available in Orange, the METABRIC dataset, which offers two clinical endpoints to choose from: OS and RFS. We load the dataset using [Datasets](https://orangedatamining.com/widget-catalog/data/datasets/) and simply connect the widget output to **As Survival**. We can then select either Overall Survival Time/Overall Survival or Relapse-Free Survival Time/Relapse-Free Survival as our designated target variables. We use [Data Table](https://orangedatamining.com/widget-catalog/data/datatable/) to inspect the data.

![](../images/AsSurvival-Example.png)
