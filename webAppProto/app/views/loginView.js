export function loginView({ request }) {
    return `
    <section aria-label="login">
        <form method="POST" action="/login">
            <h1>Login</h1>
            <hr>

            <label for="username">Username:</label>
            <input type="text" placeholder="Enter Username..." name="username" required>

            <br>

            <label for="pass">Password:</label>
            <input type="password" placeholder="Enter Password..." name="pass" required>

            <button type="submit">Login</button>
        </form>
        <a href="/sign-up">Don't have an account?</a>
    </section>
    `
}