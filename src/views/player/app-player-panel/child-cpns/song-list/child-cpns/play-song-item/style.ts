import styled from 'styled-components'

export const SongItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px 0px;
  color: #9b9b9b;

  > .left {
    flex: 1;
    display: flex;
    justify-content: space-between;

    .operate {
      display: none;
      justify-content: center;
      align-items: center;

      .btn {
        height: 16px;
        width: 16px;
        margin: 0 5px;
        /* background-color: red; */
      }

      .favor {
        background-position: -24px 2px;
        &:hover {
          background-position: -24px -18px;
        }
      }
      .share {
        background-position: 2px 2px;
        &:hover {
          background-position: 2px -18px;
        }
      }
      .download {
        background-position: -56px -48px;
        &:hover {
          background-position: -79px -48px;
        }
      }
      .delete {
        background-position: -48px 2px;
        &:hover {
          background-position: -48px -18px;
        }
      }
    }
  }

  > .right {
    display: flex;
    justify-content: center;
    align-items: center;

    .song-artist {
      width: 80px;
      padding-left: 10px;
      /* 超出显示省略号 */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .song-time {
      width: 120px;
      padding: 0px 40px;
      text-align: center;
    }
    .song-list-link {
      width: 16px;
      height: 16px;

      background-position: -80px 2px;
      &:hover {
        background-position: -80px -18px;
      }
    }
  }

  &:hover {
    cursor: pointer;
    background-color: #141414;
    color: #ececec;
    .left > .operate {
      display: flex;
    }
  }
`
