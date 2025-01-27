function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted");
  };

  return (
    <>
      <header>
        {/* Save space for NavBar */}
      </header>
      <main>
        <section aria-labelledby="login-heading">
          <h1 id="login-heading">Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username: </label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="password">Password: </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
