import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto flex justify-center flex-col items-center py-10">
        <h1>ERROR 404!</h1>
        <h3>Page Not Found</h3>
        <Link to="/">Go To Homepage</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
