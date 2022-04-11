import React, { Component } from 'react'
import styled from 'styled-components'
/*
 错误边界
  1.请在App.js中用此组件将 Route组件包裹即可展示错误之后的UI信息
  2.它在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误
  3.无法捕获 事件处理，异步代码等错误
*/

const Container = styled.div`
  font-size: 2.5rem;
  color: red;
  margin: 1rem;
  word-break: break-word;
`

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error: any) {
    console.error(error, '更新state 使下一次的UI是降级后的UI')
    return { hasError: true }
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo, '将报错上传至服务器')
  }
  render() {
    if (this.state.hasError)
      return (
        <Container>
          Something was wrong, please open the console to check the printing, or
          contact the Developer.
          <br />
          {this.props.mode === 'development' && (
            <div onClick={() => copyToClipboard(window.location.href || 'none')}>
              <br />
              <span>link: {window.location.href || 'none'}</span>
              <br />
              <br />
              点击链接进行复制.
            </div>
          )}
        </Container>
      )
    return this.props.children
  }
}

const copyToClipboard = (str: string): void => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  const selected =
    (document.getSelection()?.rangeCount as number) > 0
      ? document.getSelection()?.getRangeAt(0)
      : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection()?.removeAllRanges()
    document.getSelection()?.addRange(selected)
  }
}

interface Props {
  children: any,
  mode: 'development' | 'production'
}
interface State {
  hasError: boolean
}