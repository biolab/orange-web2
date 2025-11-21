---
title: "Gene Set-Based Biomarker Discovery"
images: ["gene-set-based-biomarker-discovery.png"]
type: "workflows"
blog: ""
video: ""
download: "gene-set-based-biomarker-discovery.ows"
workflows: ["Survival Analysis"]
weight: 701
---

In this workflow, we explore the prognostic potential of small, interpretable gene sets using the [SCAN-B](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE81540) breast cancer dataset. We construct a compact panel of biologically motivated gene groups capturing major cancer programs (Estrogen, Proliferation, HER2, PI3K, Immune, EMT). The workflow demonstrates that while single gene expression (e.g., *ESR1*) cannot stratify patients by survival, gene-set enrichment scores produce clear separation. A t-SNE projection widget reveals three robust clusters with distinct biological features, while interactive ranking shows Estrogen and Proliferation programs as most prognostic. We visualize survival differences between risk groups using the Kaplan-Meier Plot widget.
