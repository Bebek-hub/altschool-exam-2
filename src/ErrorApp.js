import * as React from "react"
// import { ErrorBoundary } from "react-error-boundary";

const ErrorApp = ({ error }) => {
  return (
    <div role="alert">
        <p>Something went wrong</p>
        <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  );
};

export default ErrorApp