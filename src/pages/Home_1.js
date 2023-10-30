export default function Home() {
    return (
            <div className="Home">
                <h2>BADA APP</h2>
                <input id="userName" />
                <button onClick={() => this.addClick()} >Add User</button>
                {users.map(user =>
                        <p>
                            <b>{user.name}</b>
                            <button onClick={() => this.deleteClick(user.user_id)} >Delete User</button>
                        </p>
                    )}
            </div>
            );
}