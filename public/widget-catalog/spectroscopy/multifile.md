---
title: "Multifile"
category: "Spectroscopy"
---
Multifile
=========

Read data from input files and send a data table to the output.

**Outputs**

- Data: a data table of all the loaded files

The **Multifile** widget loads data from different sources and works like **Concatenate** widget for spectroscopy. The widget will output a union of attributes and features, with missing values for non-matching wavenumbers. To interpolate missing data, use the **Interpolate** widget.

![](../images/Multifile-stamped.png)

1. Loaded files.
2. Load local files.
3. Remove the selected file.
4. Clear all files.
5. Label the concatenated data.
6. Reload the files.
7. Domain editor. Features can be edited by double-clicking on them. The user can change the attribute names, select the type of variable per each attribute (*Continuous*, *Nominal*, *String*, *Datetime*), and choose how to further define the attributes (as *Features*, *Targets* or *Meta*). The user can also decide to ignore an attribute.
8. Add Multifile to the report. Apply to commit the changes.

Example
-------

Here is a simple example on how to use the **Multifile** widget. We have loaded two data set that were stored on our local machine. We used the folder icon to access the files and load them. Now our files are displayed in the top box. We have labelled the files *collagen*, make it clear what it is about.

We can observe the concatenated data in the **Spectra** widget or in a **Data Table**.

![](../images/Multifile-Example.png)
