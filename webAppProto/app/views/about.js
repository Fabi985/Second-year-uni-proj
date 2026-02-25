export function aboutView(){
    return `
        <section id="about-page" aria-label="about-page">
            <h2>This is the about page</h2>
            <section id="about-page-body" aria-label="about-page-body">
                <p>This is a university project, currently in development by 3 students:</p>
                <ul>
                    <li>Emanueal Brown</li>
                    <li>Kane Gent</li>
                    <li>Fabian Velea</li>
                </ul>
                <p>The idea behind our project is to allow users to keep track of their progress throughout a book/comic series.</p>
                <p>This is done by letting a user search and select a comic that they have read/wish to read. The book series are kept within a database with various information attached to them.</p>
                <p>It then allows the users to select any content and take a look at it's chapters, the site does <b>NOT allow</b> for reading of chapters, as we do not own any rights for displaying the series. From there the users are then able to select a chapter and input whether they have read a chapter.</p>
                <p>To allow the app to be as straight forwards as possible we have opted for an approach that expects little input from the user, wether they have little technilogical understanding or a higher understanding. This allows them to use the app with minimal room for intepretation, shrinking the room for any mistakes.</p>
                <p>The app allows users to access the data stored about various series at any time. The app allows users to create accounts in order to save that information. This allows you to be able to view your progress whenever you'd like!</p>
            </section>
        </section>
    `;
}