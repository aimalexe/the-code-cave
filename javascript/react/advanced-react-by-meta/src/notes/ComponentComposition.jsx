
const Button = ({ children, backgroundColor }) => {
    return <button style={{backgroundColor}}>{children}</button>
}

const Alert = ({ children }) => {
    return (
        <>
            <div className="alert">{children}</div>
        </>
    );
}

const DeleteButton = () => {
    return <Button backgroundColor="red">Delete</Button>
}
const ComponentComposition = () => {
    return (
        <>
            <Alert>
                <h3>Delete Account</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit nobis unde odit accusamus error qui molestiae eum ex iure sint cupiditate, explicabo illum repellat animi consequuntur eaque maiores pariatur veniam.</p>
                <DeleteButton />
            </Alert>
        </>
    );
}

export default ComponentComposition;