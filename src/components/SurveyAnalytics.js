import { Component } from "react";
import { data, json } from "../data/analytics_data";
import { VisualizationPanel } from "survey-analytics";
import "survey-analytics/survey.analytics.css";
import { Model } from "survey-core";

export default class SurveyAnalytics extends Component {
  visPanel;
  componentDidMount() {
    const survey = new Model(json);
    this.visPanel = new VisualizationPanel(survey.getAllQuestions(), data);
    this.visPanel.render(document.getElementById("summaryContainer"));
  }
  render() {
    return <div id="summaryContainer"></div>;
  }
}
