import styled from 'styled-components'

export const RecommendSection = styled.div`
  border: 1px solid #d3d3d3;
  width: 980px;
  /* 背景堆叠 */
  background-image: url(${require('@/assets/img/wrap-bg.png')});
  display: flex;
`
export const RecommendLeft = styled.div`
  padding: 20px;
  width: 729px;
`
export const RecommendRight = styled.div`
  width: 250px;
`
