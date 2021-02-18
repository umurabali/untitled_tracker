import React from "react";

export const Button = ({ children, type, onClick }) => {

    return (
        <button className={`btn`}
                onClick={onClick}
                type={type}>
            {children}
        </button>
    );
};