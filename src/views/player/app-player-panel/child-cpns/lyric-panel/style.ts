import styled from 'styled-components'

export const LyricPannelWrapper = styled.div`
  position: relative;
  overflow: auto;
  width: 100%;
  color: #9b9b9b;

  /* 隐藏滚动条，并保留滚动效果 */
  ::-webkit-scrollbar {
    display: none;
  }
`
