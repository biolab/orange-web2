---
title: "Semantic Neighbors"
images: ["semantic-neighbors.png"]
type: "workflows"
blog_link: ""
video: ""
download: "semantic-neighbors.ows"
workflows: ["Text Mining"]
weight: 664
---

Semantic search workflow for retrieving not only document with exact query matches but also semantically similar concepts. The workflow embeds documents in vector space with sBERT, uses cosine distance to compute neighbors and finally display the concatenated query+neighbors corpus in a t-SNE document map with annotations.
