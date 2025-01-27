import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch users");
        }
        return r.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <header>
        {/* Add NavBar component here */}
      </header>
      <main>
        <h1>Home!</h1>
        {users.length > 0 ? (
          users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>No users found.</p>
        )}
      </main>
    </>
  );
}

export default Home;
