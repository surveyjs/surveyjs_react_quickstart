import logo from "../logo.svg";

export function HomePage() {
  return (
    <div className="container">
      <div className="col-lg-3 centered">
        <img className="App-logo" src={logo} alt="ReactJS"/>
      </div>
      <h1>SurveyJS + React Quickstart Template</h1>
      <div className="col-lg-9 jumbotron">
        <p>
          SurveyJS is a set of JavaScript components that allow you and your users to build surveys / forms, store them in your database, and visualize survey results for data analysis. This quick start template uses the following SurveyJS components:
        </p>
        <ul>
          <li><a href="https://surveyjs.io/Documentation/Library?id=LibraryOverview" target="_blank">SurveyJS Library / Runner</a></li>
          <li><a href="https://surveyjs.io/Documentation/Survey-Creator?id=Survey-Creator-Overview" target="_blank">Survey Creator / Form Builder</a></li>
          <li><a href="https://surveyjs.io/Documentation/Pdf-Export?id=PdfExportOverview" target="_blank">PDF Export</a></li>
          <li><a href="https://surveyjs.io/Documentation/Analytics?id=AnalyticsOverview" target="_blank">Survey Analytics</a></li>
        </ul>
      </div>
    </div>
  );
  }
  