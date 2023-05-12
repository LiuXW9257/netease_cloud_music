import styled from 'styled-components'

export const AlbumWrapper = styled.div`
  margin-top: 30px;

  > .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow {
      position: relative;
      top: -8px;
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
      &:hover {
        background-color: -280px -75px;
      }
    }

    .arrow-right {
      background-position: -300px -75px;
      &:hover {
        background-color: -320px -75px;
      }
    }
  }

  /* 限制轮播图大小和位置 */
  .album {
    width: 640px;
    height: 150px;

    .ant-carousel .slick-slide {
      height: 150px;
      overflow: hidden;
    }

    .new-album-list {
      /* 使用第三方插件时，别有可能有默认样式，使用!important强制修改 */
      display: flex !important;
      justify-content: space-between;
      align-items: center;
    }
  }
`
