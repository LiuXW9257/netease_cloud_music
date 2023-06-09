import styled from 'styled-components'

interface ILyricItem {
  isCurrent: boolean
}

export const LyricItemWrapper = styled.div<ILyricItem>`
  line-height: 28px;
  padding: 0 45px;
  font-size: ${(props) => (props.isCurrent ? '14px' : '12px')};
  color: ${(props) => (props.isCurrent ? '#fff' : '#9b9b9b')};
  text-align: center;
`
