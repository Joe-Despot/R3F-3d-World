import React from "react";
import ErrorScreen from "./ErrorScreen";

class MyErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // A custom error logging function
    console.log(error, errorInfo);
  }
  render() {
    return this.state.hasError ? <ErrorScreen /> : this.props.children;
  }
}
