import React from "react";

const SelectInput = ({
    name,
    label,
    defaultOption,
    value,
    error,
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
                <select
                    name={name}
                    value={value}
                    className="form-control"
                >
                    <option value="">{defaultOption}</option>
                    {/* {options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        );
                    })} */}
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};



export default SelectInput;
