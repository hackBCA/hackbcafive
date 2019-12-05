import ContentPage from "../components/ContentPage";

export function RegistrationContent() {
    return (
        <>
            <h1>How to Register</h1>

            <p><strong>Are you a Bergen County Academies student?</strong></p>
            <p>Registration opens later this week. Contact Mr. Respass and the hackBCA team for more details.</p>

            <p><strong>Are you an out-of-district student?</strong></p>
            <p>If you are out-of-district, registration must be completed through your school. Have your school contact <a href="mailto:bryres@bergen.org">Mr. Respass (bryres@bergen.org)</a> for more details.</p>
        </>
    );
}

export default () => <ContentPage title="Register"><RegistrationContent /></ContentPage>