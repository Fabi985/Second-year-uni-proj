export function helpView(){
    return `
    <section id="help-page" aria-label="help-page">
        <h2>This is the help page</h2>
        <section id="help-page-body" aria-label="help-page-body">
            <h2><u>FAQ</u></h2>
            <h3>How do I access a book?</h3>
            <p>Simple, click the <a href="/catalogue">catalogue tab</a> in the navbar, then select/click a book from the list that you want to see.</p>

            <h3>How do I mark my progress?</h3>
            <p>When you have selected a book, make sure that you are logged into your personal user account, 
            from there you can press the "Bookmark Chapter" at the chapter you are currently reading
            or you can search up the chapter and mark progress of that specific chapter!</p>

            <h3>How do I navigate this web-application?</h3>
            <p>Here at slimeballs we made sure that everything the user needs and requires is only a few clicks away! (Usually less than 3)
            We designed the navigation bar at the top to be the primary way to get around our site!</p>

            <h3>How do I navigate to a specific book?</h3>
            <p>You could either search through the catalogue manually, or you can search it up in our search bar near the top of the catalogue page</p>

            <h4>If you require any further aid in using this web-application feel free to contact our team at:</h4>
            <h4>SlimeBallDevs@SlimeCity.co.uk</h4>
        </section>
    </section>
    `;
}