const Signup = (props) => {
    return (props.trigger) ? (
        <div>
            {props.children}
        </div>
    ) : '';
}
export default Signup;