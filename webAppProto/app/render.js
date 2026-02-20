export default function render(viewFn, data, status = 200) {
    const content = viewFn(data);
    const headers = new Headers();
    headers.set("content-type", "text/html");
    
    const html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>App</title>
                <meta charset="utf-8">
                <link rel="icon" href="/assets/icon.svg">
                <link rel="stylesheet" href="/assets/styles.css">
            </head>
            <body>
                <header>
                    <h1>web app</h1>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">about</a>
                    </nav>
                </header>
                <main>
                    ${content}
                </main>
                <footer>
                    <p>&copy; :P</p>
                </footer>
            </body>
        </html>
        `

    return new Response(html, { headers, status });
}