import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from '../redux/user/userActions';

const UserComponent = ({ fetchUsers, userData }) => {
    useEffect(fetchUsers, []);
    return userData.isLoading ?
        (<h2>Loading users...</h2>) :
        userData.error ? (<h2>Error: {userData.error}</h2>) :
            (<div>
                <h2>Users data:</h2>
                {userData && userData.users && userData.users.map(user => <p>{user}</p>)}
            </div>
            );
}

const mapStateToProps = state => ({
    userData: state.user
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
