import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, info: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('💥 Global ErrorBoundary caught:', error, info)
    this.setState({ info })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-center text-red-400">
          <h2 className="text-lg font-bold">Something went wrong.</h2>
          <p className="text-sm mt-2">{this.state.error?.message}</p>
          <pre className="text-xs mt-2 text-left whitespace-pre-wrap">
            {this.state.info?.componentStack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}
