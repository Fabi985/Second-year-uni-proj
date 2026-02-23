export function notFoundView({ request }) {

    const url = new URL(request.url);
    const badPath = url.pathname
    return `
    <section aria-label="not found">
        <h2>Not found!</h2>
        <p>Requested resource (${badPath} ) does not exist.</p>
    </section>
    `
}