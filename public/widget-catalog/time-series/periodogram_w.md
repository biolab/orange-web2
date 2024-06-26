---
title: "Periodogram"
category: "Time Series"
---
Periodogram
===========

Visualize time series' cycles, seasonality, periodicity, and most significant periods.

**Inputs**

- Time series: Time series from the File or as output by [As Timeseries](/widget-catalog/time-series/as_timeseries) widget.

In this widget, you can visualize the most significant periods of the time series.

![](/widget-catalog/time-series/images/periodogram.png)

1. Select the series to calculate the periodogram for.

Periodogram for non-equispaced series is calculated using Lomb-Scargle method.

Example
-------

Here is a simple example on how to use the Periodogram widget. We have passed the [Yahoo Finance](/widget-catalog/time-series/yahoo_finance) data to the widget and plotted the periodicity of Amazon stocks for the past 6 years.

![](/widget-catalog/time-series/images/Periodogram-Example.png)

#### See also

[Correlogram](/widget-catalog/time-series/correlogram)
