import React from "react";

type ErrorAlertProps = {
    message: string|null;
};

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
    return (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    {/* Hier kann ein Icon eingesetzt werden, zum Beispiel ein SVG */}
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M18 10c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7zM4.707 4.707a1 1 0 00-1.414 1.414L8.586 11l-5.293 5.293a1 1 0 101.414 1.414L10 12.414l5.293 5.293a1 1 0 001.414-1.414L11.414 11l5.293-5.293a1 1 0 00-1.414-1.414L10 9.586 4.707 4.707z"
                              clipRule="evenodd"/>
                    </svg>
                </div>
                <div className="ml-3">
                    <p className="text-sm text-red-700">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ErrorAlert