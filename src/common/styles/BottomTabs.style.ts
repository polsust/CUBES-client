import { css } from "@emotion/react";

export const bottomTabsStyle = css`
  .ant-tabs-nav-list {
    width: 100%;
    .ant-tabs-tab {
      flex-grow: 1;
      display: flex;
      justify-content: center;
    }
  }

  .ant-tabs-tab-active {
    svg {
      color: gray !important;
    }
  }
`;
