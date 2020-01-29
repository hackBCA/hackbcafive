import ContentPage from "../components/ContentPage";

export default () => <ContentPage title="Schedule & Workshops">
    <h1>Schedule</h1>
    <table className="table table-sm table-borderless" style={{maxWidth: "480px"}}>
        <tr><th colspan="2"><h4>February 13, 2020</h4></th></tr>
        <tr><th scope="row">2:00PM</th><td>Registration</td></tr>
        <tr><th scope="row">3:30PM</th><td>Opening Ceremony</td></tr>
        <tr><th scope="row">4:30PM</th><td>Hacking begins</td></tr>
        <tr><th scope="row">6:00PM</th><td>Dinner</td></tr>

        <tr><th colspan="2"><h4>February 14, 2020</h4></th></tr>
        <tr><th scope="row">12:00AM</th><td>Midnight Pizza</td></tr>
        <tr><th scope="row">7:00AM</th><td>Breakfast</td></tr>
        <tr><th scope="row">11:00AM</th><td>Hacks must be submitted</td></tr>
        <tr><th scope="row">11:00AM</th><td>Demos</td></tr>
        <tr><th scope="row">12:00PM</th><td>Lunch</td></tr>
        <tr><th scope="row">1:00PM</th><td>Closing Ceremony & Awards</td></tr>
        <tr><th scope="row">2:00PM</th><td>Hackers depart</td></tr>
    </table>

    <h2>Workshops</h2>
    <p>Here's a sampling of some of the workshops we plan on offering:</p>
    <ul>
        <li>Introduction to HTML/CSS</li>
        <li>Introduction to Web Hosting with Github Pages</li>
        <li>Introduction to JavaScript</li>
        <li>Git Gud with Git</li>
        <li>Vue.js</li>
        <li>iOS Development</li>
        <li>Introduction to Circuits and Arduino</li>
        <li>Girls Go Cyberstart</li>
    </ul>
    <p>Stay tuned for more workshop details and times.</p>
</ContentPage>
