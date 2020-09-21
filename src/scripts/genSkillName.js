const data = [
	{
		"id": 2,
		"name": "Programming Languages",
		"children": [
			{
				"id": 4,
				"name": "Java"
			},
			{
				"id": 5,
				"name": "Python"
			},
			{
				"id": 6,
				"name": "JavaScript",
				"children": [
					{
						"id": 8,
						"name": "TypeScript"
					},
					{
						"id": 9,
						"name": "D3.js"
					}
				]
			},
			{
				"id": 10,
				"name": "Ruby"
			},
			{
				"id": 11,
				"name": "C#"
			},
			{
				"id": 12,
				"name": "C"
			},
			{
				"id": 13,
				"name": "C++"
			},
			{
				"id": 14,
				"name": "R"
			}
		]
	},
	{
		"id": 15,
		"name": "Frontend",
		"children": [
			{
				"id": 17,
				"name": "Vanilla JS",
				"children": [
					{
						"id": 19,
						"name": "HTML5",
						"children": [
							{
								"id": 21,
								"name": "<audio>"
							},
							{
								"id": 22,
								"name": "<figure>"
							},
							{
								"id": 23,
								"name": "<figcaption>"
							}
						]
					}
				]
			},
			{
				"id": 24,
				"name": "Styling",
				"children": [
					{
						"id": 26,
						"name": "CSS3"
					},
					{
						"id": 27,
						"name": "Flexbox"
					},
					{
						"id": 28,
						"name": "CSS Media Queries"
					},
					{
						"id": 29,
						"name": "Fonts",
						"children": [
							{
								"id": 31,
								"name": "EOT"
							},
							{
								"id": 32,
								"name": "SVG"
							},
							{
								"id": 33,
								"name": "TTF"
							},
							{
								"id": 34,
								"name": "WOFF"
							},
							{
								"id": 35,
								"name": "WOFF2"
							}
						]
					},
					{
						"id": 36,
						"name": "Responsive Design"
					},
					{
						"id": 37,
						"name": "SASS"
					},
					{
						"id": 38,
						"name": "styled-components"
					},
					{
						"id": 39,
						"name": "Material-UI Theme Spacing"
					}
				]
			},
			{
				"id": 40,
				"name": "React",
				"children": [
					{
						"id": 42,
						"name": "React Hooks"
					},
					{
						"id": 43,
						"name": "Redux"
					},
					{
						"id": 44,
						"name": "Jest"
					},
					{
						"id": 45,
						"name": "Gatsby.js"
					},
					{
						"id": 46,
						"name": "Next.js"
					},
					{
						"id": 47,
						"name": "Animation Libraries",
						"children": [
							{
								"id": 49,
								"name": "Framer Motion"
							}
						]
					},
					{
						"id": 50,
						"name": "Component Libraries",
						"children": [
							{
								"id": 52,
								"name": "Material UI"
							},
							{
								"id": 53,
								"name": "Semantic UI React"
							},
							{
								"id": 54,
								"name": "React Bootstrap"
							},
							{
								"id": 55,
								"name": "Reactstrap"
							}
						]
					},
					{
						"id": 56,
						"name": "React Router"
					}
				]
			},
			{
				"id": 57,
				"name": "Angular"
			},
			{
				"id": 58,
				"name": "Vue.js",
				"children": [
					{
						"id": 60,
						"name": "Nuxt.js"
					}
				]
			},
			{
				"id": 61,
				"name": "jQuery"
			},
			{
				"id": 62,
				"name": "Webpack"
			},
			{
				"id": 63,
				"name": "Babel"
			},
			{
				"id": 64,
				"name": "WebRTC"
			}
		]
	},
	{
		"id": 65,
		"name": "Automated Tests",
		"children": [
			{
				"id": 67,
				"name": "App Performance Test",
				"children": [
					{
						"id": 69,
						"name": "Lighthouse"
					}
				]
			},
			{
				"id": 70,
				"name": "UI Testing",
				"children": [
					{
						"id": 72,
						"name": "Selenium"
					}
				]
			},
			{
				"id": 73,
				"name": "Unit Testing",
				"children": [
					{
						"id": 75,
						"name": "JavaScript",
						"children": [
							{
								"id": 77,
								"name": "Mocha"
							},
							{
								"id": 78,
								"name": "Chai"
							},
							{
								"id": 79,
								"name": "SinonJS"
							}
						]
					},
					{
						"id": 80,
						"name": "Python",
						"children": [
							{
								"id": 82,
								"name": "unittest"
							},
							{
								"id": 83,
								"name": "Nose"
							}
						]
					}
				]
			}
		]
	},
	{
		"id": 84,
		"name": "Database",
		"children": [
			{
				"id": 86,
				"name": "MongoDB",
				"children": [
					{
						"id": 88,
						"name": "Mongoose"
					},
					{
						"id": 89,
						"name": "MongoDB Atlas"
					},
					{
						"id": 90,
						"name": "MongoDB Stitch"
					}
				]
			},
			{
				"id": 91,
				"name": "SQLite"
			},
			{
				"id": 92,
				"name": "MySQL"
			},
			{
				"id": 93,
				"name": "PostgreSQL"
			},
			{
				"id": 94,
				"name": "SQL Server"
			}
		]
	},
	{
		"id": 95,
		"name": "DevOps (CI/CD)",
		"children": [
			{
				"id": 97,
				"name": "Jenkins",
				"children": [
					{
						"id": 99,
						"name": "Scripted Pipelines"
					},
					{
						"id": 100,
						"name": "Declarative Pipelines"
					},
					{
						"id": 101,
						"name": "Executor"
					},
					{
						"id": 102,
						"name": "cron"
					}
				]
			},
			{
				"id": 103,
				"name": "GitLab",
				"children": [
					{
						"id": 105,
						"name": "Worker"
					}
				]
			}
		]
	},
	{
		"id": 106,
		"name": "Build Tools",
		"children": [
			{
				"id": 108,
				"name": "Gradle"
			},
			{
				"id": 109,
				"name": "Maven"
			},
			{
				"id": 110,
				"name": "Ant"
			},
			{
				"id": 111,
				"name": "Webpack"
			},
			{
				"id": 112,
				"name": "Gulp"
			}
		]
	},
	{
		"id": 113,
		"name": "OS",
		"children": [
			{
				"id": 115,
				"name": "Windows",
				"children": [
					{
						"id": 117,
						"name": "Powershell"
					},
					{
						"id": 118,
						"name": "Batch Scripts"
					}
				]
			},
			{
				"id": 119,
				"name": "Linux",
				"children": [
					{
						"id": 121,
						"name": "Bash"
					},
					{
						"id": 122,
						"name": "CentOS",
						"children": [
							{
								"id": 124,
								"name": "yum"
							}
						]
					},
					{
						"id": 125,
						"name": "Ubuntu",
						"children": [
							{
								"id": 127,
								"name": "apt-get"
							}
						]
					}
				]
			},
			{
				"id": 128,
				"name": "Android"
			},
			{
				"id": 129,
				"name": "iOS"
			}
		]
	},
	{
		"id": 130,
		"name": "Code Collab",
		"children": [
			{
				"id": 132,
				"name": "VCS",
				"children": [
					{
						"id": 134,
						"name": "Git"
					},
					{
						"id": 135,
						"name": "Git"
					}
				]
			},
			{
				"id": 136,
				"name": "Kaban Board",
				"children": [
					{
						"id": 138,
						"name": "Backlog"
					},
					{
						"id": 138,
						"name": "WIP Limits"
					},
					{
						"id": 138,
						"name": "Jira"
					},
					{
						"id": 139,
						"name": "Trello"
					}
				]
			},
			{
				"id": 140,
				"name": "Agile",
				"children": [
					{
						"id": 142,
						"name": "Sprint Planning"
					},
					{
						"id": 143,
						"name": "Daily Stand Up"
					},
					{
						"id": 144,
						"name": "Sprint Review"
					},
					{
						"id": 145,
						"name": "Sprint Retrospective"
					}
				]
			},
			{
				"id": 146,
				"name": "Slack"
			},
			{
				"id": 147,
				"name": "Microsoft Teams"
			},
			{
				"id": 148,
				"name": "Discord"
			}
		]
	}
]

function genSkillName(obj) {
  const iterate = (skillSet, obj) => {
    if (!Object.keys(skillSet).includes(obj["name"])) {
      skillSet[obj["name"]] = {
        name: "DEFAULT VALUE",
        docLink: "https://reactjs.org/",
        tag: [],
        desc: "DEFAULT DESC",
      }
    }
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {
        iterate(skillSet, obj[key])
      }
    })
    return skillSet
  }
  

  const sortOnKeys = (dict) => {

    var sorted = [];
    for(var key in dict) {
        sorted[sorted.length] = key;
    }
    sorted.sort();

    var tempDict = {};
    for(var i = 0; i < sorted.length; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
    }

    return tempDict;
  }
  let skillSet = iterate({}, obj)
  skillSet = sortOnKeys(skillSet)
  const fs = require('fs');

  let data = JSON.stringify(skillSet);
  fs.writeFileSync('temp.json', data);
}

genSkillName(data)
