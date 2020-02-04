import ContentPage from "../components/ContentPage";
import awards from "../public/data/awards.yaml";

export default () => <ContentPage title="Award Categories">
    <h1>Award Categories</h1>
    <p>At hackBCA, we are offering prizes for the following categories:</p>
    <ul>
        {awards.filter(category => !category.name.includes("(NOT A CATEGORY)")).map((category, index) => <li key={index}>{category.name}</li>)}
    </ul>
</ContentPage>