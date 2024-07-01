---
author: "Ajda Pretnar Žagar"
date: "2024-06-26"
draft: false
title: "Text Preprocessing: Tips & Tricks"
url: "text-preprocessing-tricks"
thumbImage: "preproc.png"
frontPageImage: "preproc.png"
blog: ["text preprocessing", "text mining", "conllu", "filtering"]
shortExcerpt: "Some tips and tricks for text preprocessing in Orange."
longExcerpt: "Text preprocessing is key for successful text analysis. Learn some tips and tricks in the blog."
---

A [new video](https://youtu.be/nAIqoCxvIqc?si=jWXBV8XVKWGgXjIQ) in our Text Mining series describes text preprocessing, a key step for any text mining task. Text preprocessing prepares the data for downstream analysis. Specifically, it constructs a list of items, typically words, that you wish to analyze further.

The default pipeline in Orange starts by lower-casing the text and then splitting it into tokens. A token is a core unit of analysis. Often, this is a word, but it can also be a character, a sentence, or a phrase (n-grams). After tokenization, a basic filtering step removes English stopwords.

### 1. Choose the language

Some preprocessing steps are language-dependent. For example, filtering on stopwords depends on the language of the text. To change the language of stopwords in the Filtering section, select it from the dropdown or load your custom list of stopwords. Another language-dependent method is normalization, by which we typically mean lemmatization (converting words to their base form).

### 2. Customize

Loading a custom list of stopwords is easy. Create a plain text file and write each word on its own line. Save it as a .txt file. In Preprocess Text, first remove the English stopwords by selecting None in the dropdown. Then, click on the folder icon and load your custom list.

<WindowScreenshot src="custom-list.png"/>
<WindowScreenshot src="custom-preproc.png"/>

### 3. Beware of order

The order of preprocessing steps is crucial because each step is executed sequentially. For example, you cannot first filter on part-of-speech tags (POS tags) and then apply the POS tagging. The first filter won't work because there are no POS tags yet to filter on. Move the POS Tagger above the Filtering, and voila, tokens will be filtered correctly (only nouns retained).

<WindowScreenshot src="preproc-steps.png"/>

### 4. Cut the noise

A typical step after preprocessing is creating a bag of words (BoW). Since every word is a column in the BoW representation, the table can get very big if we retain all the tokens. Often, it makes sense to discard the rarest words that occur in only a few documents. We can do this with the Document frequency option. We can filter on absolute (number of documents the token appears in) or relative frequencies (percentage of documents the word appears in). Say we wish to remove words that appear in less than 10 documents. Simply write 10 in the first box of the absolute filter. The filter will automatically update the second box to go to "max". This way, you don't have to write the exact number of documents for the upper boundary!

<WindowScreenshot src="filtering.png"/>

### 5. Pick the steps

CoNLL-U files are terrific for digital humanities research because they contain linguistic annotations and are essentially preprocessed. Orange can read CoNLL-U files with its Import Documents widget. The widget will import lemmas by default, with additional options for POS tags and named entities. When working with CoNLL-U files, most preprocessing steps are optional. Remove them by clicking on the X button at each preprocessing method. For example, one can only retain filtering to remove stopwords or only keep nouns in the list.

<WindowScreenshot src="conllu.png"/>

These are five tips and tricks for using text preprocessing in Orange. However, most of these apply to any NLP software or package. To learn more about how to use Preprocess Text in Orange, have a look at the [video](https://youtu.be/nAIqoCxvIqc?si=jWXBV8XVKWGgXjIQ).