import ContentPage from "../components/ContentPage";

export default () => <ContentPage title="Sponsor Us">
    <style jsx>{`
        li {
            margin-top: -10px;
            margin-bottom: -10px;
        }

        thead {
            background: #31bbf7;
        }

        tr:nth-child(2n) {
            background: #b6e5f9;
        }

        .table th, .table td {
            text-align: center;
            vertical-align: middle;
            border: none;
        }

        tr * p {
            margin:auto;
            text-align: left;
        }
    `}</style>

    <h1><span>About Sponsoring</span></h1>
    <h4><span><strong>WHO WE ARE</strong></span></h4>
    <p><span><strong>hackBCA V</strong> is the long-awaited return of hackBCA’s classNameic hackathon format that will take place on February 13-14, 2019 for approximately 250-300 high schoolers. The event will be open to people of all skill levels, and will include hacking, workshops, talks, and games.</span></p>
    <h4><span><strong>WHY JOIN US</strong></span></h4>

    <p><span>Sponsors get the opportunity to:</span></p>
    <ul>
        <li>
            <p><span><strong>Help introduce computer science to high school students who would otherwise live their lives viewing programmers as magicians</strong></span></p>
            <ul>
                <li>
                    <p><span>Be there to help high school students overcome challenges as they enter the programming world</span></p>
                </li>
                <li>
                    <p><span>When students later start new projects and continue to program, they will already have experience with your products and recognize your brand</span></p>
                </li>
            </ul>
        </li>
        <li>
            <p><span>Have your company’s swag (i.e. merchandise) distributed to hackers</span></p>
        </li>
        <li>
            <p><span>Send a mentor and have your company represented at the hackathon</span></p>
            <ul>
                <li>
                    <p><span>Encourage use of your product/services/API</span></p>
                </li>
                <li>
                    <p><span>Field questions from students, and talk to potential users of your product</span></p>
                </li>
            </ul>
        </li>
        <li>
            <p><span>Demo your product or talk about your company at the beginning of the event</span></p>
        </li>
        <li>
            <p><span>Interact with some of the most talented high school computer science students in the nation</span></p>
            <ul>
                <li>
                    <p><span>Recruit students for internships or jobs</span></p>
                </li>
            </ul>
        </li>
        <li>
            <p><span>Advertise your brand to high school students</span></p>
        </li>
        <li>
            <p><span>Have your company and logo listed on our website, our t-shirts, and be mentioned at the kickoff, and on our social media pages</span></p>
        </li>
    </ul>

    <table className="table">
        <thead>
            <tr className="header">
                <th>
                    <p><span><strong>TIER</strong></span></p>
                </th>
                <th><span><strong>Alpha</strong></span></th>
                <th><span><strong>Beta</strong></span></th>
                <th><span><strong>Gamma</strong></span></th>
                <th><span><strong>Co-host</strong></span></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p><span><strong>COST ($)</strong></span></p>
                </td>
                <td><span>500</span></td>
                <td><span>1,000</span></td>
                <td><span>2,000</span></td>
                <td><span>Contact us</span></td>
            </tr>
            <tr>
                <td>
                    <p><span><strong>GENERAL</strong></span></p>
                </td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Mentors at hackBCA</span></p>
                </td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Table in sponsors section</span></p>
                </td>
                <td><span>½ Table</span></td>
                <td><span>½ Table</span></td>
                <td><span>Full Table</span></td>
                <td><span>Full Table</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Provide Hardware for Students</span></p>
                </td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Host Custom Workshops</span></p>
                </td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Talk/Demo at kickoff</span></p>
                </td>
                <td><span></span></td>
                <td><span>1 min</span></td>
                <td><span>2 min</span></td>
                <td><span>3 min</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Company talk at closing</span></p>
                </td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span>1 min</span></td>
                <td><span>2 min</span></td>
            </tr>
            <tr>
                <td>
                    <p><strong><span>RECRUITING</span></strong></p>
                </td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Onsite recruiters/evangelists</span></p>
                </td>
                <td><span></span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Attach content to emails</span></p>
                </td>
                <td><span></span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
            </tr>
            <tr>
                <td>
                    <p><strong><span>BRANDING</span></strong></p>
                </td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Thanked at kickoff/closing</span></p>
                </td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Logo on the hackBCA Website</span></p>
                </td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Logo on hackBCA t-shirt</span></p>
                </td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Company Banners</span></p>
                </td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Can distribute swag</span></p>
                </td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Listed in API directory</span></p>
                </td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
                <td><span>✔</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Logo on all pages of website</span></p>
                </td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span>✔</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Mentioned in press releases</span></p>
                </td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span>✔</span></td>
            </tr>
            <tr>
                <td>
                    <p><span>Sponsor a meal**</span></p>
                </td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span>✔</span></td>
            </tr>
        </tbody>
    </table>
    <p>
        <span><strong>NOTE: All monetary sponsorship of hackBCA is tax-exempt.</strong></span>
        <br/>
        <span><strong>*</strong> Terms are negotiable for all tiers</span>
        <br/>
        <span><strong>**</strong> First come, first serve, limited to four meals</span>
    </p>
</ContentPage>