---
title: "Correlogram"
category: "Time Series"
---
Correlogram
===========

Visualize variables' auto-correlation.

**Inputs**

- Time series: Time series as output by [As Timeseries](/widget-catalog/time-series/as_timeseries) widget.

In this widget, you can visualize the autocorrelation coefficients for the selected time series.

![](/widget-catalog/time-series/images/correlogram.png)

1. Select the series to calculate autocorrelation for.
2. Choose to calculate the coefficients using partial autocorrelation function (PACF) instead. Choose to plot the 95% significance interval (dotted horizontal line). Coefficients that are outside of this interval might be significant.

Example
-------

Here is a simple example on how to use the Periodogram widget. We have passed the [Yahoo Finance](/widget-catalog/time-series/yahoo_finance) data to the widget and plotted the autocorrelation of Amazon stocks for the past 6 years.

![](/widget-catalog/time-series/images/Correlogram-Example.png)

#### See also

[Periodogram](/widget-catalog/time-series/periodogram_w)
