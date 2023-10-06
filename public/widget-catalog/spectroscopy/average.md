+++
"title" = "Average Spectra"
"category" = "Spectroscopy"
+++
Average Spectra
===============

Average spectra.

**Inputs**

- Data: input dataset

**Outputs**

- Averages: averaged dataset

The **Average Spectra** widget enables you to calculate average spectra. It can output the average of the entire dataset, or average into groups defined by a Categorical feature.

![](../images/Average-Spectra-stamped.png)

Use *Group by* to output averages defined by a Categorical feature.

Columns of non-Numerical data will return a value if every row in that group has the same value, otherwise it will return Unknown.
