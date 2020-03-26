import React, { Component, ErrorInfo } from 'react'
interface Props {
}
interface State {
    hasError: boolean
}
export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error: Error) {
        return { hasError: true }
    }
    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error)
        console.log(info)
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundary
