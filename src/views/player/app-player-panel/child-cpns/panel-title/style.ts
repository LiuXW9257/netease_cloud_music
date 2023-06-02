import styled from 'styled-components'

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin: 0 5px;
  color: #cccccc;

  > .left {
    display: flex;
    flex: 3;
    align-items: center;
    justify-content: space-between;

    .play-list {
      font-size: 14px;
      font-weight: 700;
      padding-left: 25px;
    }

    .operate {
      display: flex;
      align-items: center;

      .operate-item {
        display: flex;
        align-items: center;
        margin-right: 20px;

        > .icon {
          display: inline-block;
          height: 16px;
          width: 16px;
          margin-right: 5px;
        }

        .collect {
          background-position: -24px 0px;
        }

        .clean {
          background-position: -50px 0px;
        }

        &:hover {
          cursor: pointer;
          text-decoration: underline;

          .collect {
            background-position: -24px -20px;
          }

          .clean {
            background-position: -50px -20px;
          }
        }
      }
    }
  }
  > .right {
    position: relative;
    display: flex;
    flex: 2;
    justify-content: center;
    font-size: 14px;

    .close-btn {
      position: absolute;
      right: 10px;
      &:hover {
        cursor: pointer;
        color: white;
      }
    }
  }
`
