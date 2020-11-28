import React, { Component } from "react";
import { data, json } from "./analytics_data";

import * as jsPDF from "jspdf";
import * as XLSX from "xlsx";
import "jspdf-autotable";



import { Tabulator } from "survey-analytics/survey.analytics.tabulator.js";
import * as Survey from "survey-react";
import "survey-analytics/survey.analytics.tabulator.css";
import "tabulator-tables/dist/css/tabulator.min.css";


window.jsPDF = jsPDF;
window.XLSX = XLSX;

export default class SurveyAnalyticsTabulator extends Component {
  visPanel;
  componentDidMount() {
    const survey = new Survey.SurveyModel(json);
    this.visPanel = new Tabulator(survey, data);
    this.visPanel.render(document.getElementById("summaryContainer"));
  }
  render() {
    return <div id="summaryContainer"></div>;
  }
}
