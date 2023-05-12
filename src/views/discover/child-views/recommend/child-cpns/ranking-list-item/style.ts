import styled from 'styled-components'

export const RankingItemWrapper = styled.div`
  width: 230px;
  /* 这里是直接item的最后一个 */
  &:last-child {
    width: 228px;
  }

  .header {
    height: 100px;
    display: flex;

    margin: 20px 0 0 20px;

    .image {
      width: 80px;
      height: 80px;
      position: relative;

      img {
        width: 80px;
        height: 80px;
      }
    }

    .info {
      margin: 5px 0 0 10px;

      a {
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }

      .btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;
        &:hover {
          background-position: -267px -235px;
        }
      }

      .favor {
        background-position: -300px -205px;
        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }

  .list {
    .list-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;

      /* 选择前三个 */
      :nth-child(-n + 3) .rank {
        color: #c10d0c;
      }

      .rank {
        width: 35px;
        text-align: center;
        margin-left: 10px;
        font-size: 16px;
      }

      .info {
        color: #000;
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;
        justify-content: space-between;

        .name {
          /* flex: 1 占据剩余空间，方便按钮显示时做省略号 */
          flex: 1;

          cursor: pointer;
          /* 一行显示，多余使用省略号 */
          ${(props) => props.theme.mixin.overEllipsis}

          &:hover {
            text-decoration: underline;
          }
        }

        .operate {
          display: flex;
          align-items: center;
          display: none;
          width: 82px;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
      }

      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }

  .footer {
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 32px;
    justify-content: flex-end;

    a {
      color: #000;
    }
  }
`
