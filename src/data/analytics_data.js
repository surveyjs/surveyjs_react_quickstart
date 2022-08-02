export const json = {
  completedHtml: "<p style='font-size:24px;'>Thank you for completing the survey! (please wait for analytics to load ...)<p>",
  pages: [{
    name: "page_info",
    elements: [{
      type: "radiogroup",
      name: "organization_type",
      title: "Which of the following best describes you or your organization?",
      hasOther: true,
      choices: [{
        value: "ISV",
        text: "ISV (building commercial/shrink-wrapped software)"
      }, {
        value: "Consulting",
        text: "Software consulting firm (providing development services to other organizations)"
      }, {
        value: "Custom",
        text: "Custom software development (as a freelancer/contractor)"
      }, {
        value: "In-house",
        text: "In-house software development"
      }, {
        value: "Hobbyist",
        text: "Hobbyist (developing apps for personal use)"
      }],
      colCount: 2
    }, {
      type: "radiogroup",
      name: "developer_count",
      visibleIf: "{organization_type} != 'Hobbyist'",
      title: "How many software developers are in your organization?",
      choices: ["1", "2", "3-5", "6-10", "> 10"]
    }, {
      type: "radiogroup",
      name: "vertical_market",
      visibleIf: "{organization_type} != 'Hobbyist'",
      title: "Which vertical market does your product serve?",
      hasOther: true,
      choices: [
        "Automotive",
        "Banking",
        "Consumer",
        "Education",
        "Engineering",
        "Energy",
        "Fast-moving consumer goods",
        "Financial",
        "FinTech",
        "Food and beverage",
        "Government (federal, state, local)",
        "Healthcare",
        "Insurance",
        "Legal",
        "Manufacturing",
        "Media",
        "Online",
        "Raw materials",
        "Real estate",
        "Religion",
        "Retail",
        "Jewelry",
        "Technology",
        "Telecommunications",
        "Transportation (Travel)",
        "Electronics",
        "Not-for-profit"
      ],
      colCount: 4
    }, {
      type: "radiogroup",
      name: "product_discovering",
      title: "How did you discover our product?",
      hasOther: true,
      choices: [
        "Search engine",
        "GitHub",
        "Friend or colleague",
        "Reddit",
        "Medium",
        "Twitter",
        "Facebook"
      ],
      otherText: "Other",
      colCount: 3
    }]
  }, {
    name: "page_libraries_usage",
    elements: [{
      type: "checkbox",
      name: "javascript_frameworks",
      title: "Which JavaScript frameworks do you use?",
      hasOther: true,
      choices: [
        "React",
        "Angular",
        "jQuery",
        "Vue",
        "Meteor",
        "Ember",
        "Backbone",
        "Knockout",
        "Aurelia",
        "Polymer",
        "Mithril",
      ],
      choicesOrder: "asc",
      otherText: "Other",
      colCount: 3
    }, {
      type: "checkbox",
      name: "backend_language",
      title: "Which web backend programming languages do you use?",
      hasOther: true,
      choices: [
        "Java",
        "Python",
        "Node.js",
        "Go",
        "Django",
        "C#",
        "Ruby",
      ],
      choicesOrder: "asc",
      otherText: "Other",
      colCount: 3
    }],
  }, {
    name: "page_product_usage",
    elements: [{
      type: "radiogroup",
      name: "useproduct",
      title: "Do you currently use our components?",
      isRequired: true,
      choices: ["Yes", "No"],
    }, {
      type: "checkbox",
      name: "usecomponents",
      visibleIf: '{useproduct} = "Yes"',
      title: "Which of our components do you use?",
      isRequired: true,
      choices: ["Survey Library (Runner)", "Survey Creator", "Export to PDF", "SurveyJS Analytics"]
    }, {
      type: "checkbox",
      name: "supported_devices",
      title: "Which device types do you need to support?",
      isRequired: true,
      choices: [ "Desktop", "Tablet", "Mobile" ],
    }, {
      type: "radiogroup",
      name: "native_mobile_support",
      visibleIf: '{supported_devices} contains "Mobile"',
      title: "How important for you is native mobile support?",
      isRequired: true,
      choices: [{
        value: 1,
        text: "I am happy with adaptive HTML rendering"
      }, {
        value: 2,
        text: "Somewhat important, but adaptive HTML rendering is fine"
      }, {
        value: 3,
        text: "Very important"
      }, {
        value: 4,
        text: "Cannot use your components without it"
      }]
    }, {
      type: "radiogroup",
      name: "native_framework",
      visibleIf: "{native_mobile_support} >= 3",
      title: "Which framework are you using or going to use for native mobile developlment?",
      hasOther: true,
      choices: [
        "React Native",
        "NativeScript",
        "Ionic",
        "Xamarin",
        "Native iOS and Android apps",
      ],
      otherText: "Other",
      colCount: 2
    }],
  }, {
      name: "page_alternative",
      elements: [{
        type: "radiogroup",
        name: "product_alternative",
        title: "What would you use as an alternative if our product didn't exist?",
        isRequired: true,
        hasOther: true,
        choices: ["Popular cloud-based platforms", "Self-developed solution"],
        otherText: "Other"
      }, {
        type: "text",
        name: "survey_cloud_platform",
        visibleIf: '{product_alternative} = "Popular cloud-based platforms"',
        title: "What cloud-based platform would you choose?"
      }, {
        type: "radiogroup",
        name: "product_recommend",
        title: "Have you recommended our product to anyone?",
        choices: ["Yes", "No"]
      }]
    }, {
      name: "page_recommend",
      elements: [{
        type: "rating",
        name: "nps_score",
        title: "How likely are you to recommend our product to a friend or colleague?",
        isRequired: true,
        rateMin: 0,
        rateMax: 10,
        minRateDescription: "Most unlikely",
        maxRateDescription: "Most likely"
      }, {
        type: "comment",
        name: "favorite_functionality",
        title: "What feature do you find most useful in our product?"
      }, {
        type: "comment",
        name: "product_improvement",
        title: "How could our components be improved to meet your needs better?"
      }]
    }
  ]
};

// Survey results
const firstResult = {
  organization_type: "In-house",
  developer_count: "1",
  vertical_market: "Education",
  product_discovering: "GitHub",
  javascript_frameworks: ["jQuery"],
  backend_language: ["Ruby"],
  useproduct: "Yes",
  usecomponents: ["Survey Library (Runner)"],
  supported_devices: ["Desktop", "Tablet", "Mobile"],
  native_mobile_support: 2,
  product_alternative: "Self-developed solution",
  product_recommend: "Yes",
  nps_score: 6,
  product_improvement: "The lack of accessibility is a huge disadvantage. That's one reason why I cannot use it in all my projects.",
  native_framework: "",
  survey_cloud_platform: "",
  favorite_functionality: "",
};

const secondResult = {
  organization_type: "Consulting",
  developer_count: "3-5",
  vertical_market: "Government (federal, state, local)",
  product_discovering: "Search engine",
  javascript_frameworks: ["Vue", "jQuery", "other"],
  backend_language: ["Python", "Node.js"],
  useproduct: "Yes",
  usecomponents: ["Survey Library (Runner)"],
  supported_devices: ["Desktop"],
  product_alternative: "Develop ourselves",
  product_recommend: "Yes",
  nps_score: 8,
  native_mobile_support: "",
  native_framework: "",
  survey_cloud_platform: "",
  favorite_functionality: "",
  product_improvement: "",
};

export const data = [firstResult, secondResult];