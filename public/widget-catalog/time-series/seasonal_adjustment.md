---
title: "Seasonal Adjustment"
category: "Time Series"
---
Seasonal Adjustment
===================

Decompose the time series into seasonal, trend, and residual components.

**Inputs**

- Time series: Time series as output by [As Timeseries](/widget-catalog/time-series/as_timeseries) widget.

**Outputs**

- Time series: Original time series with some additional columns: seasonal component, trend component, residual component, and seasonally adjusted time series.

![](/widget-catalog/time-series/images/seasonal-adjustment-stamped.png)

1. Length of the season in periods (e.g. 12 for monthly data).
2. Time series [decomposition model](https://en.wikipedia.org/wiki/Decomposition_of_time_series), additive or multiplicative.
3. The series to seasonally adjust.

Example
-------

![](/widget-catalog/time-series/images/seasonal-adjustment-ex1.png)

#### See also

[Moving Transform](/widget-catalog/time-series/moving_transform)
