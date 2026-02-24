export function signUpView({ request }) {
    return `
    <section aria-label="Sign-up">
        <h1>Sign-up</h1>
        <hr>
        <section id="signup-page-form" aria-label="signup-page-form">
            <form method="POST" action="/sign-up">

                <label for="username">Username:</label>
                <input type="text" placeholder="Enter Username..." name="username" required>

                <br>

                <label for="pass">Password:</label>
                <input type="password" placeholder="Enter Password..." name="pass" required>

                <button type="submit">Sign up</button>
            </form>
             <a href="/login">Already have an account?</a>
    </section>
    `
}