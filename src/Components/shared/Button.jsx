const Button = ({ children, version, type, isDisabled }) => {
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`btn btn-${version}`}>
            {children}
        </button>
    );
}

Button.defaultPropTypes = {
    version: 'primary', 
    type: 'button',
    isDisabled: true
}


export default Button;