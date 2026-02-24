export function loginView({ request }) {
    return `
    <section id="" aria-label="login">

        <h1>Login</h1>
            <hr>
        <section id="login-form" aria-label="login-form">
            <form method="POST" action="/login">
           
                <label for="username">Username:</label>
                <input type="text" placeholder="Enter Username..." name="username" required>

                <br>

                <label for="pass">Password:</label>
                <input type="password" placeholder="Enter Password..." name="pass" required>
                <button type="submit">Login</button>
            </form>
        </section>
        <a href="/sign-up">Don't have an account?</a>
    </section>
    `
}