import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, errorInfo);
      }
    
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return (
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
            </details>
          )
        }
    
        return this.props.children; 
      }
    }