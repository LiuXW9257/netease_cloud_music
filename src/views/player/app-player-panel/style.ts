import styled from 'styled-components'

export const PlayerPanelWrapper = styled.div`
  position: fixed;
  bottom: 45px;
  /* 下面三行实现fixed元素 水平居中 */
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 980px;
  height: 300px;
  color: white;
  background-color: #1d1d1d;
  border-radius: 5px 5px 0px 0px;

  > .top {
    height: 40px;
  }

  .content {
    display: flex;
    justify-content: center;
    border-top: 1px solid black;
    padding: 5px 5px 0px;

    > .left {
      flex: 3;
      background-color: #1b1a1b;
    }
    > .right {
      flex: 2;
      display: flex;
      justify-content: center;
      height: 255px;
      background-color: #202023;
    }
  }
`
