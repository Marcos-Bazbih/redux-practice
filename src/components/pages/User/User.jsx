import { connect } from "react-redux";

const User = ({ user }) => {
    return (
        <div className="main">
            <h1>User</h1>
            <button onClick={() => { console.log(user) }}>Click</button>
        </div>
    )
}

export default connect(({ user }) => ({ user }), {})(User);