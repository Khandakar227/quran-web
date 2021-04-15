import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorInfo: null };
      }
    
      static getDerivedStateFromError() {
        return{hasError: true}
      }
      componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
      }
    
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1 className="text-white">Something went wrong.{this.state.errorInfo}<br/> Please Reload page</h1>;
        }
    
        return this.props.children; 
      }
    }
