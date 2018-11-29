export default {
  version: "",
  lastModified: "",
  careers: [
    {
      role: "QA",
      topLevelCompetencies: [
        {
          id: "tc-1",
          name: "Technical",
          subCompentencies: [
            {
              id: "sc-1",
              name: "Architecture"
            },
            {
              id: "sc-2",
              name: "Tools"
            },
            {
              id: "sc-3",
              name: "Testability"
            },
            {
              id: "sc-4",
              name: "Environments"
            },
            {
              id: "sc-5",
              name: "Pipeline"
            },
            {
              id: "sc-6",
              name: "Technology"
            }
          ]
        },
        {
          id: "tc-2",
          name: "Collaboration"
        },
        {
          id: "tc-3",
          name: "Code and Auto Tests"
        },
        {
          id: "tc-4",
          name: "Testing",
          subCompentencies: [
            {
              id: "sc-7",
              name: "Bugs"
            }
          ]
        },
        {
          id: "tc-5",
          name: "Shipping and Monitoring"
        },
        {
          id: "tc-6",
          name: "Talent"
        }
      ],
      grades: [
        {
          name: "Associate",
          rewardLevel: "Implement",
          description: "An enthusiatic learner and motivated individual who recognises their role is to provide information about the Product.",
          competencies: [
            {
              tcId: "tc-1",
              scId: "sc-1",
              cid: "c-1"
            },
            {
              tcId: "tc-1",
              scId: "sc-1",
              cid: "c-2"
            },
            {
              tcId: "tc-1",
              scId: "sc-2",
              cid: "c-3"
            }
          ]
        },
        {
          name: "Engineer",
          rewardLevel: "Implement",
          description: "An experienced Software Tester who is committed to developing their engineering and analytical skills to help their team deliver a fantastic customer experience.",
          competencies: [
            {
              tcId: "tc-1",
              scId: "sc-1",
              cid: "c-4"
            }
          ]
        }
      ]
    }
  ],
  competencies: [
    {
      cid: "c-1",
      description: "Can describe to a high level, the architecture of the application most worked on"
    },
    {
      cid: "c-2",
      description: "Can list out the major technologies used by the application"
    },
    {
      cid: "c-3",
      description: "Can comfortably demonstrate their use of Chrome Dev Tools or equivalent"
    },
    {
      cid: "c-4",
      description: "Understands the Apps' use of HTTP/HTTPS, the RESTful services the App consumes and how the App uses them"
    }
  ]
}