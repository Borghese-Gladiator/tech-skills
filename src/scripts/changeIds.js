function changeIds(obj) {
  let myId = 1
  const iterate = (obj) => {
    obj.id = myId
    myId++
    Object.keys(obj).forEach(key => {

      if (typeof obj[key] === 'object') {
        iterate(obj[key])
      }
    })
  }
  iterate(obj)
  const fs = require('fs');

  let data = JSON.stringify(obj);
  fs.writeFileSync('temp.json', data);
}

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
				"name": "JavaScript"
			},
			{
				"id": 7,
				"name": "TypeScript"
			},
			{
				"id": 8,
				"name": "C#"
			},
			{
				"id": 9,
				"name": "C"
			},
			{
				"id": 10,
				"name": "C++"
			},
			{
				"id": 11,
				"name": "Ruby"
			}
		]
	},
	{
		"id": 12,
		"name": "Frontend",
		"children": [
			{
				"id": 11,
				"name": "Vanilla JS"
      },
      {
				"id": 14,
				"name": "Styling",
				"children": [
					{
						"id": 16,
						"name": "CSS3"
          },
          {
						"id": 16,
						"name": "Flexbox"
					},
          {
						"id": 16,
						"name": "CSS Media Queries"
          },
          {
						"id": 16,
            "name": "Fonts",
            children: [
              {
								"id": 20,
								"name": "EOT"
              },
              {
								"id": 20,
								"name": "SVG"
              },
              {
								"id": 20,
								"name": "TTF"
              },
              {
								"id": 20,
								"name": "WOFF"
              },
              {
								"id": 20,
								"name": "WOFF2"
              },
              
            ]
          },
          {
						"id": 16,
						"name": "Responsive Design"
					},
					{
						"id": 17,
						"name": "SASS"
          },
					{
						"id": 17,
						"name": "styled-components"
          },
					{
						"id": 17,
						"name": "Material-UI Theme Spacing"
					}
				]
			},
			{
				"id": 14,
				"name": "React",
				"children": [
					{
						"id": 16,
						"name": "Redux"
					},
					{
						"id": 17,
						"name": "Next.js"
					},
					{
						"id": 18,
						"name": "Animation Libraries",
						"children": [
							{
								"id": 20,
								"name": "Framer Motion"
							}
						]
					},
					{
						"id": 21,
						"name": "Component Libraries",
						"children": [
							{
								"id": 23,
								"name": "Material UI"
							},
							{
								"id": 24,
								"name": "Semantic UI React"
							},
							{
								"id": 25,
								"name": "React Bootstrap"
							},
							{
								"id": 26,
								"name": "Reactstrap"
							},
							{
								"id": 27,
								"name": "Material UI"
							},
							{
								"id": 28,
								"name": "Material UI"
							}
						]
					}
				]
			},
			{
				"id": 29,
				"name": "Angular"
			},
			{
				"id": 30,
				"name": "Vue.js",
				"children": [
					{
						"id": 32,
						"name": "Nuxt.js"
					}
				]
			},
			{
				"id": 33,
				"name": "jQuery"
			},
			{
				"id": 34,
				"name": "Webpack"
      },
			{
				"id": 34,
				"name": "Babel"
			}
		]
	},
	{
		"id": 35,
		"name": "Backend",
		"children": [
			{
				"id": 37,
				"name": "Frontend",
				"children": [
					{
						"id": 39,
						"name": "React"
					}
				]
			},
			{
				"id": 40,
				"name": "Ruby"
			}
		]
	},
	{
		"id": 41,
		"name": "DevOps",
		"children": [
			{
				"id": 43,
				"name": "Child - 4"
			}
		]
	},
	{
		"id": 44,
		"name": "Build Tools",
		"children": [
			{
				"id": 46,
				"name": "Child - 4"
			}
		]
	},
	{
		"id": 47,
		"name": "Operating Systems",
		"children": [
			{
				"id": 49,
				"name": "Child - 4"
			}
		]
	},
	{
		"id": 50,
		"name": "Network",
		"children": [
			{
				"id": 52,
				"name": "Child - 4"
			}
		]
	}
]

changeIds(data)