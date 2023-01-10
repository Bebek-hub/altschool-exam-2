import * as React from "react"


const ErrorApp = ({ error }) => {
  return (
    <div role="alert">
        <p>Something went wrong</p>
        <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  );
};

export default ErrorApp
