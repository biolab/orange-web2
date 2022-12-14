import { css } from "styled-components";

export const LightGallery = css`
  .lg-container {
    .lg-backdrop.in {
      opacity: 0.75;
    }

    .lg-toolbar.lg-group,
    .lg-outer .lg-thumb-outer {
      background: rgba(0, 0, 0, 0.45);
    }
  }
`;
