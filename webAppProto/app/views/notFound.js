export function notFoundView({ request }) {

    const url = new URL(request.url);
    return `
    <section aria-label="not found">
        <h2>Not found!</h2>
        <p>Requested(${url}) resource does not exist.</p>
    </section>
    `
}