export function notFoundView(badPath) {
    return `
    <section id="not-found-page" aria-label="not-found-page">
        <h2>Not found!</h2>
        <section id="not-found-page-body" aria-label="not-found-page-body">
            <p>Requested resource (${badPath} ) does not exist.</p>
        </section>
    </section>
    `
}