export default function render(viewFn, data, status = 200) {
    const content = viewFn(data);
    const headers = new Headers();
    headers.set("content-type", "text/html");
    
    const html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>SlimeBalls Registry</title>
                <meta charset="utf-8">
                <link rel="icon" href="/assets/icon.svg">
                <link rel="stylesheet" href="/assets/styles.css">
            </head>
            <body>
                <header>
                    <h1>Potential App</h1>
                    <hr>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/catalogue">catalogue</a>
                        <a href="/help">Help</a>
                        <a href="/about">about</a>
                        <a href="/sign-up">Sign-up</a>
                    </nav>
                </header>
                <main>
                    ${content}
                </main>
                <footer>
                    <p>&copy;SlimeBalls</p>
                </footer>
            </body>
        </html>
        `

    return new Response(html, { headers, status });
}