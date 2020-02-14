import ContentPage from "../components/ContentPage";
import ChevronRight from "../components/ChevronRight";

export default () => <ContentPage title="Code Golf">
    <h1>Code Golf</h1>
    <p>
        Code golf is the activity of writing the shortest code to do something.
        Despite what it sounds like, this can actually be very entertaining!
        There are many resources online, including the
        <a href="https://codegolf.stackexchange.com"> Code Golf Stack Exchange site</a>,
        which offers both tips for golfing in various languages and many golfed submissions.
    </p>
    <p>You may choose to golf in whatever language you want, but be aware that some languages are better than others for golfing.</p>
    <p>Once you are <b>sure</b> you're done writing your code, submit it with the appropriate form.</p>
    <p>If you have any questions, feel free to contact the organizers.</p>
    
    <h2>Rules</h2>
    <ul>
        <li>You must work individually, no collaboration</li>
        <li>You may submit one entry per challenge</li>
        <li>You may use any language you want, provided that:
            <ul>
                <li>It was created before the start of this event</li>
                <li>It has a free compiler/interpreter that we can use to verify your code</li>
            </ul>
        </li>
        <li>Submissions will be counted in <i>bytes</i>, not <i>characters</i></li>
        <li>Unless it somehow breaks the code, we will default to using LF line endings, not CRLF</li>
        <li>You may specify your file encoding, othwerwise it will default to your language's default
            <ul>
                <li>A language's standard encoding is presumed to be UTF-8 unless specified by the language</li>
                <li>There must exist a compiler/interpreter which understands the chosen encoding</li>
            </ul>
        </li>
        <li>You may only use standard libraries, no third-party/external libraries</li>
        <li>You may not use any language-provided function if it accomplishes the problem for you</li>
        <li>Submissions must not make requests to the internet to offload work</li>
        <li>The hackBCA team reserves the right to disqualify your submission if we feel it tries to skirt the rules</li>
    </ul>
    <p>
        Your submission may be either a function or a full program.
        It may take it's input via standard terminal input, or function parameters.
        It may output via standard terminal output, or via function returns.
        Leading or trailing whitespace in your code is okay.
    </p>
    <p>
        Say, for example, the question was about getting the average of two numbers.
        The following python code would all be valid submissions.
        <ul>
            <li>
                <code>a = input()</code><br/>
                <code>b = input()</code><br/>
                <code>print((a+b)/2)</code>
            </li>
            <li><code>def a(x, y): print((a+b)/2)</code></li>
            <li><code>def a(x, y): return (a+b)/2</code></li>
        </ul>
    </p>

    <div class="d-flex align-items-baseline flex-wrap">
        <h2 class="mr-3">Novice Challenge</h2>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVSEEWkL59BiizFEcjogwHuizogKZrpsDDOzpYGQh2iHgrNQ/viewform?usp=sf_link">Submit <ChevronRight /></a>
    </div>
    <p>
        There are many, many sorting algorithms out there, each with it's own pros and cons.
        You may have learned about a couple, like Bubble, Insertion, Merge, and Quick Sort.
        The challenge here is to write a sorting algorithm (any of your choosing) in as few characters as possible.
        Your submission will only be required to sort numbers.
    </p>
    <p>
        Because the task is to implement a sorting algorithm,
        you may <b>not</b> use any sorting functions provided by the language/standard libraries.
        Also, to ensure that you are actually writing decent code,
        your algorithm must be able to sort ten thousand items in less than a second.
    </p>

    <div class="d-flex align-items-baseline flex-wrap">
        <h2 class="mr-3">Advance Challenge</h2>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSetjVb60fzSHVU1MIudNTz61x1qCyablhInY1WCTNP99jXk7g/viewform?usp=sf_link">Submit <ChevronRight /></a>
    </div>
    <p>
        The theme of the hackathon is to reinvent something!
        I've taken a look, and these roman numerals seem old, clunky, and outdated, so I want a way to get rid of these.
        At the same time, I've also heard pretty good things about the base-12 counting system.
        For this, your submission will convert roman numerals to base-12 numbers.
    </p>
    <h4>A Quick Primer on Duodecimal</h4>
    <ul>
        <li>Our base-10 counting scheme has the characters 0-9. Once we reach 9, we add a new digit, giving us 10</li>
        <li>Duodecimal (base-12) has twelve characters, instead of ten (those being 0-9 and then A and B)</li>
        <li>After 9, comes A, then B, then 10, and 11, and so on...</li>
        <li>Your code may output upper or lowercase A's and B's - either is fine</li>
    </ul>
    <h4>A Quick Primer on Roman Numerals</h4>
    <ul>
        <li>Roman numerals use the following symbols: I (1), V (5), X (10), L (50), C (100), D (500), and M (1000)</li>
        <li>Most times, you add up the values. In addition, the larger values are placed first. For example:
            <ul>
                <li>III = 3</li>
                <li>LXXI = 71</li>
                <li>MMXX = 2020</li>
            </ul>
        </li>
        <li>However, a form of subtraction is used to avoid having four of the same numeral in a row.
            The snaller numeral is placed before the larger one.
            There are only a few possible subtractions:
            <ul>
                <li>IV = 4</li>
                <li>IX = 9</li>
                <li>XL = 40</li>
                <li>XC = 90</li>
                <li>CD = 400</li>
                <li>CM = 900</li>
            </ul>
        </li>
        <li>As there is no agreed-upon standard for symbols greater than M, the highest number your program needs to worry about is 3999 (base 10), or MMMCMXCIX</li>
    </ul>
</ContentPage>