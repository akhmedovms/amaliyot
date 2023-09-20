import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import UserList from "./components/userList/UserList";
import NewUser from "./components/newuser/NewUser";
function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  //addUser

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };

  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} handleDelete={handleDelete} />
      </main>
      {showModal && <NewUser addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
