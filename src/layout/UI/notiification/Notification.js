const Notification = ({ title, message }) => {
    return (
        <div className='notification flex'>
            <h3 className="heading-tertiary">{ title }:</h3>
            <p className="paragraph">{ message }</p>
        </div>
    )
}

export default Notification