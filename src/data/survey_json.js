export const json = {
  completedHtml: "<h3>Thank you for your feedback</h3> <h5>Your thoughts and ideas will help us improve our product.</h5>",
  completedHtmlOnCondition: [{
    expression: "{nps_score} > 8",
    html: "<h3>Thank you for your feedback</h3> <h5>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h5>"
  }, {
    expression: "{nps_score} < 7",
    html: "<h3>Thank you for your feedback</h3> <h5>We are glad that you shared your ideas with us. They will help us make our product better.</h5>"
  }],
  pages: [{
    name: "page1",
    elements: [{
      type: "rating",
      name: "nps_score",
      title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
      isRequired: true,
      rateMin: 0,
      rateMax: 10,
      minRateDescription: "(Most unlikely)",
      maxRateDescription: "(Most likely)"
    }, {
      type: "checkbox",
      name: "promoter_features",
      visibleIf: "{nps_score} >= 9",
      title: "Which of the following features do you value the most?",
      isRequired: true,
      validators: [{
        type: "answercount",
        text: "Please select two features maximum.",
        maxCount: 2
      }],
      hasOther: true,
      choices: [
        "Performance",
        "Stability",
        "User Interface",
        "Complete Functionality"
      ],
      otherText: "Other features:",
      colCount: 2
    }, {
      type: "comment",
      name: "passive_experience",
      visibleIf: "{nps_score} > 6  and {nps_score} < 9",
      title: "What is the primary reason for your score?"
    }, {
      type: "comment",
      name: "disappointed_experience",
      visibleIf: "{nps_score} notempty",
      title: "What do you miss and find disappointing in your experience with our product?"
    }]
  }],
  showQuestionNumbers: "off"
};