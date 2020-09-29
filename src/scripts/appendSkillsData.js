// SCRIPT adds new SkillsTree keys into tsSkillsData
// input:  skillsTreeData - js array, skillsTreeData - js obj
// output: temp.json - up to date tsSkillsData object (old written + new keys)

// note: remove key "undefined" that somehow appears
const skillsData = {
	"<audio>": {
		"name": "<audio>",
		"docLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio",
		"tag": ["HTML5", "JavaScript", "WebRTC", "MP3", "FLAC", "WAV", "AIFF"],
		"descMarkdown": `#HTML5 element \n* Used to embed a sound element in the page.\n* Can use the <source> element and WebRTC to redirect audio.`
	},
	"<figcaption>": {
		"name": "<figcaption>",
		"docLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption",
		"tag": ["HTML5", "<figure>"],
		"descMarkdown": `Caption for a <figure> element`
	},
	"<figure>": {
		"name": "<figure>",
		"docLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure",
		"tag": ["HTML5", "<figcaption>"],
		"descMarkdown": `Self-contained content (eg: image, illustration, diagram, code snippet)`
	},
	"Agile": {
		"name": "Agile",
		"docLink": "https://agilemanifesto.org/",
		"tag": ["Project Management", "SMART Goals", "Collaboration"],
		"descMarkdown": "Agile is an iterative approach to project management and software development that helps teams deliver value to their customers faster and with fewer headaches. Instead of betting everything on a \"big bang\" launch, an agile team delivers work in small, but consumable, increments. Requirements, plans, and results are evaluated continuously so teams have a natural mechanism for responding to change quickly."
	},
	"Android": {
		"name": "Android",
		"docLink": "https://reactjs.org/",
		"tag": ["OS", "Mobile", ],
		"descMarkdown": "Android is a popular, Linux-based mobile phone operating system (maintained by Google)."
	},
	"Android Studio": {
		"name": "Android Studio",
		"docLink": "https://developer.android.com/",
		"tag": ["Android", "IDE", "XML", "Android Emulator", "APK Analyzer"],
		"descMarkdown": "Official IDE for Android built atop of IntelliJ",
		"features": [
			"Gradle-based build support",
			"Android-specific refactoring and quick fixes",
			"Lint tools to catch performance, usability, version compatibility and other problems",
			"ProGuard integration and app-signing capabilities",
			"Template-based wizards to create common Android designs and components",
			"A rich layout editor that allows users to drag-and-drop UI components, option to preview layouts on multiple screen configurations",
			"Support for building Android Wear apps",
			"Built-in support for Google Cloud Platform, enabling integration with Firebase Cloud Messaging (Earlier 'Google Cloud Messaging') and Google App Engine[18]",
			"Android Virtual Device (Emulator) to run and debug apps in the Android studio."
		]
	},
	"Angular": {
		"name": "Angular",
		"docLink": "https://angular.io/",
		"tag": ["Frontend", "TypeScript", "HTML Template Syntax"],
		"descMarkdown": "Frontend JS Framework to build Mobile & Desktop applications. As a framework, starting an app creates an extensive directory structure"
	},
	"Animation Libraries": {
		"name": "Animation Libraries",
		"docLink": "https://en.wikipedia.org/wiki/CSS_animations",
		"tag": ["Frontend", "React"],
		"descMarkdown": "Frontend animation libraries enable easier animations instead of just using CSS3 custom animations to fade, hover, or other. "
	},
	"Ant": {
		"name": "Ant",
		"docLink": "https://reactjs.org/",
		"tag": ["Build Tools", "XML", "Java"],
		"descMarkdown": "(Build.xml). (Legacy build tool - see Maven & Gradle). Apache Ant is a Java library and command-line tool whose mission is to drive processes described in build files as targets and extension points dependent upon each other. "
	},
	"App Performance Test": {
		"name": "App Performance Test",
		"docLink": "https://developers.google.com/web/tools/lighthouse",
		"tag": ["Web Dev"],
		"descMarkdown": `
			
		Performance Testing is different for desktops and web apps.
			For web apps, you can test domain load speed, bundle size, and 
				* load tests
				* stress tests
				* spike tests - rapidly increase workload
				* endurance tests (soak tests) - app performance over long time (find memory leaks)
				* scalability tests - gradually increase workload
				* Volume tests
			Web Dev Performanc Testing Tools
				* Lighthouse (built into Chrome DevTools)
				* KeyCDN (haven't used, but heard OK)
			Desktop - record some test scenario & use some tools (I'm pretty unfamiliar)
		`
	},
	"Automated Tests": {
		"name": "Automated Tests",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Babel": {
		"name": "Babel",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Backlog": {
		"name": "Backlog",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Bash": {
		"name": "Bash",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Batch Scripts": {
		"name": "Batch Scripts",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Build Tools": {
		"name": "Build Tools",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"C": {
		"name": "C",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"C#": {
		"name": "C#",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"C++": {
		"name": "C++",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"CSS Media Queries": {
		"name": "CSS Media Queries",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"CSS3": {
		"name": "CSS3",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"CentOS": {
		"name": "CentOS",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Chai": {
		"name": "Chai",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Code Collab": {
		"name": "Code Collab",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Component Libraries": {
		"name": "Component Libraries",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"D3.js": {
		"name": "D3.js",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Daily Stand Up": {
		"name": "Daily Stand Up",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Database": {
		"name": "Database",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Declarative Pipelines": {
		"name": "Declarative Pipelines",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"DevOps (CI/CD)": {
		"name": "DevOps (CI/CD)",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Discord": {
		"name": "Discord",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"EOT": {
		"name": "EOT",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Executor": {
		"name": "Executor",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Flexbox": {
		"name": "Flexbox",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Fonts": {
		"name": "Fonts",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Framer Motion": {
		"name": "Framer Motion",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Frontend": {
		"name": "Frontend",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Gatsby.js": {
		"name": "Gatsby.js",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Git": {
		"name": "Git",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"GitLab": {
		"name": "GitLab",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Gradle": {
		"name": "Gradle",
		"docLink": "https://gradle.org/",
		"tag": ["Build Tools", "Java", ],
		"descMarkdown": "Far improved Java build tool as compared to Maven & Ant which both need long configuration files by definition. Gradle uses plugins and lets people use plugins like Jacoco with one command."
	},
	"Gulp": {
		"name": "Gulp",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"HTML5": {
		"name": "HTML5",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Java": {
		"name": "Java",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"JavaScript": {
		"name": "JavaScript",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Jenkins": {
		"name": "Jenkins",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Jest": {
		"name": "Jest",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Jira": {
		"name": "Jira",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Kaban Board": {
		"name": "Kaban Board",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Lighthouse": {
		"name": "Lighthouse",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Linux": {
		"name": "Linux",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Material UI": {
		"name": "Material UI",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Material-UI Theme Spacing": {
		"name": "Material-UI Theme Spacing",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Maven": {
		"name": "Maven",
		"docLink": "https://maven.apache.org/maven-features.html",
		"tag": ["Build Tools", "Java"],
		"descMarkdown": "Uses POM (project object model) files to load dependencies from Maven Central (a repo). As a build tool, we use it to build our Java executables.",
		"relatedLinks": [
			{"text": "Gradle", "link": "https://gradle.org/"}
		]
	},
	"Microsoft Teams": {
		"name": "Microsoft Teams",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Mocha": {
		"name": "Mocha",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"MongoDB": {
		"name": "MongoDB",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"MongoDB Atlas": {
		"name": "MongoDB Atlas",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"MongoDB Stitch": {
		"name": "MongoDB Stitch",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Mongoose": {
		"name": "Mongoose",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"MySQL": {
		"name": "MySQL",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Next.js": {
		"name": "Next.js",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Nose": {
		"name": "Nose",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Nuxt.js": {
		"name": "Nuxt.js",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"OS": {
		"name": "OS",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"PostgreSQL": {
		"name": "PostgreSQL",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Powershell": {
		"name": "Powershell",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Programming Languages": {
		"name": "Programming Languages",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": `# Header 1 \n## Header 2\n* blah\n* blah
		`
	},
	"Python": {
		"name": "Python",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"R": {
		"name": "R",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"React": {
		"name": "React",
		"docLink": "https://reactjs.org/",
		"tag": ["Frontend", "JavaScript"],
		"descMarkdown": "JS Frontend library to build UI components with state lifecycles"
	},
	"React Bootstrap": {
		"name": "React Bootstrap",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"React Hooks": {
		"name": "React Hooks",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"React Router": {
		"name": "React Router",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Reactstrap": {
		"name": "Reactstrap",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Redux": {
		"name": "Redux",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Responsive Design": {
		"name": "Responsive Design",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Ruby": {
		"name": "Ruby",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"SASS": {
		"name": "SASS",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"SQL Server": {
		"name": "SQL Server",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"SQLite": {
		"name": "SQLite",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"SVG": {
		"name": "SVG",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Scripted Pipelines": {
		"name": "Scripted Pipelines",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Selenium": {
		"name": "Selenium",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Semantic UI React": {
		"name": "Semantic UI React",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"SinonJS": {
		"name": "SinonJS",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Slack": {
		"name": "Slack",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Sprint Planning": {
		"name": "Sprint Planning",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Sprint Retrospective": {
		"name": "Sprint Retrospective",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Sprint Review": {
		"name": "Sprint Review",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Styling": {
		"name": "Styling",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"TTF": {
		"name": "TTF",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Trello": {
		"name": "Trello",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"TypeScript": {
		"name": "TypeScript",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"UI Testing": {
		"name": "UI Testing",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Ubuntu": {
		"name": "Ubuntu",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Unit Testing": {
		"name": "Unit Testing",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"VCS": {
		"name": "VCS",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Vanilla JS": {
		"name": "Vanilla JS",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Vue.js": {
		"name": "Vue.js",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"WIP Limits": {
		"name": "WIP Limits",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"WOFF": {
		"name": "WOFF",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"WOFF2": {
		"name": "WOFF2",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"WebRTC": {
		"name": "WebRTC",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Webpack": {
		"name": "Webpack",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Windows": {
		"name": "Windows",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Worker": {
		"name": "Worker",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"apt-get": {
		"name": "apt-get",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"cron": {
		"name": "cron",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"iOS": {
		"name": "iOS",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"jQuery": {
		"name": "jQuery",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"styled-components": {
		"name": "styled-components",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"undefined": {
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"unittest": {
		"name": "unittest",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"yum": {
		"name": "yum",
		"docLink": "https://reactjs.org/",
		"tag": [],
		"descMarkdown": "DEFAULT DESC"
	}
}

const skillsTreeData = [
	{
		"id": "2",
		"name": "Programming Languages",
		"children": [
			{
				"id": "4",
				"name": "Java"
			},
			{
				"id": "5",
				"name": "Python"
			},
			{
				"id": "6",
				"name": "JavaScript",
				"children": [
					{
						"id": "8",
						"name": "TypeScript"
					},
					{
						"id": "9",
						"name": "D3.js"
					}
				]
			},
			{
				"id": "10",
				"name": "Ruby"
			},
			{
				"id": "11",
				"name": "C#"
			},
			{
				"id": "12",
				"name": "C"
			},
			{
				"id": "13",
				"name": "C++"
			},
			{
				"id": "14",
				"name": "R"
			}
		]
	},
	{
		"id": "15",
		"name": "Frontend",
		"children": [
			{
				"id": "19",
				"name": "HTML5",
				"children": [
					{
						"id": "21",
						"name": "<audio>"
					},
					{
						"id": "22",
						"name": "<figure>"
					},
					{
						"id": "23",
						"name": "<figcaption>"
					}
				]
			},
			{
				"id": "17",
				"name": "Vanilla JS",
				"children": [
					{
						"id": "170",
						"name": "DOM Surgery",
					},
					{
						"id": "171",
						"name": "JS Asynchrony",
					}
				]
			},
			{
				"id": "172",
				"name": "Browser Storage",
				"children": [
					{
						"id": "173",
						"name": "Session Storage",
					},
					{
						"id": "174",
						"name": "Local Storage",
					},
					{
						"id": "175",
						"name": "Cookies",
					},
				]
			},
			{
				"id": "24",
				"name": "Styling",
				"children": [
					{
						"id": "26",
						"name": "CSS3"
					},
					{
						"id": "27",
						"name": "Flexbox"
					},
					{
						"id": "28",
						"name": "CSS Media Queries"
					},
					{
						"id": "29",
						"name": "Fonts",
						"children": [
							{
								"id": "31",
								"name": "EOT"
							},
							{
								"id": "32",
								"name": "SVG"
							},
							{
								"id": "33",
								"name": "TTF"
							},
							{
								"id": "34",
								"name": "WOFF"
							},
							{
								"id": "35",
								"name": "WOFF2"
							}
						]
					},
					{
						"id": "36",
						"name": "Responsive Design"
					},
					{
						"id": "37",
						"name": "SASS"
					},
					{
						"id": "38",
						"name": "styled-components"
					},
					{
						"id": "39",
						"name": "Material-UI Theme Spacing"
					}
				]
			},
			{
				"id": "40",
				"name": "React",
				"children": [
					{
						"id": "42",
						"name": "React Hooks"
					},
					{
						"id": "43",
						"name": "Redux"
					},
					{
						"id": "44",
						"name": "Jest"
					},
					{
						"id": "45",
						"name": "Gatsby.js"
					},
					{
						"id": "46",
						"name": "Next.js"
					},
					{
						"id": "47",
						"name": "Animation Libraries",
						"children": [
							{
								"id": "49",
								"name": "Framer Motion"
							}
						]
					},
					{
						"id": "50",
						"name": "Component Libraries",
						"children": [
							{
								"id": "52",
								"name": "Material UI"
							},
							{
								"id": "53",
								"name": "Semantic UI React"
							},
							{
								"id": "54",
								"name": "React Bootstrap"
							},
							{
								"id": "55",
								"name": "Reactstrap"
							}
						]
					},
					{
						"id": "56",
						"name": "React Router"
					}
				]
			},
			{
				"id": "57",
				"name": "Angular"
			},
			{
				"id": "58",
				"name": "Vue.js",
				"children": [
					{
						"id": "60",
						"name": "Nuxt.js"
					}
				]
			},
			{
				"id": "61",
				"name": "jQuery"
			},
			{
				"id": "62",
				"name": "Webpack"
			},
			{
				"id": "63",
				"name": "Babel"
			},
			{
				"id": "64",
				"name": "WebRTC"
			}
		]
	},
	{
		"id": "65",
		"name": "Automated Tests",
		"children": [
			{
				"id": "67",
				"name": "App Performance Test",
				"children": [
					{
						"id": "69",
						"name": "Lighthouse"
					}
				]
			},
			{
				"id": "70",
				"name": "UI Testing",
				"children": [
					{
						"id": "72",
						"name": "Selenium"
					}
				]
			},
			{
				"id": "73",
				"name": "Unit Testing",
				"children": [
					{
						"id": "75",
						"name": "JavaScript",
						"children": [
							{
								"id": "77",
								"name": "Mocha"
							},
							{
								"id": "78",
								"name": "Chai"
							},
							{
								"id": "79",
								"name": "SinonJS"
							}
						]
					},
					{
						"id": "80",
						"name": "Python",
						"children": [
							{
								"id": "82",
								"name": "unittest"
							},
							{
								"id": "83",
								"name": "Nose"
							}
						]
					}
				]
			}
		]
	},
	{
		"id": "84",
		"name": "Database",
		"children": [
			{
				"id": "86",
				"name": "MongoDB",
				"children": [
					{
						"id": "88",
						"name": "Mongoose"
					},
					{
						"id": "89",
						"name": "MongoDB Atlas"
					},
					{
						"id": "90",
						"name": "MongoDB Stitch"
					}
				]
			},
			{
				"id": "91",
				"name": "SQLite"
			},
			{
				"id": "92",
				"name": "MySQL"
			},
			{
				"id": "93",
				"name": "PostgreSQL"
			},
			{
				"id": "94",
				"name": "SQL Server"
			}
		]
	},
	{
		"id": "95",
		"name": "DevOps (CI/CD)",
		"children": [
			{
				"id": "97",
				"name": "Jenkins",
				"children": [
					{
						"id": "99",
						"name": "Scripted Pipelines"
					},
					{
						"id": "100",
						"name": "Declarative Pipelines"
					},
					{
						"id": "101",
						"name": "Executor"
					},
					{
						"id": "102",
						"name": "cron"
					}
				]
			},
			{
				"id": "103",
				"name": "GitLab",
				"children": [
					{
						"id": "105",
						"name": "Worker"
					}
				]
			}
		]
	},
	{
		"id": "106",
		"name": "Build Tools",
		"children": [
			{
				"id": "108",
				"name": "Gradle"
			},
			{
				"id": "109",
				"name": "Maven"
			},
			{
				"id": "110",
				"name": "Ant"
			},
			{
				"id": "111",
				"name": "Webpack"
			},
			{
				"id": "112",
				"name": "Gulp"
			}
		]
	},
	{
		"id": "113",
		"name": "OS",
		"children": [
			{
				"id": "115",
				"name": "Windows",
				"children": [
					{
						"id": "117",
						"name": "Powershell"
					},
					{
						"id": "118",
						"name": "Batch Scripts"
					}
				]
			},
			{
				"id": "119",
				"name": "Linux",
				"children": [
					{
						"id": "121",
						"name": "Bash"
					},
					{
						"id": "122",
						"name": "CentOS",
						"children": [
							{
								"id": "124",
								"name": "yum"
							}
						]
					},
					{
						"id": "125",
						"name": "Ubuntu",
						"children": [
							{
								"id": "127",
								"name": "apt-get"
							}
						]
					}
				]
			},
			{
				"id": "128",
				"name": "Android",
				"children": [
					{
						"id": "128-1",
						"name": "Android Studio",
					}
				]
			},
			{
				"id": "129",
				"name": "iOS"
			}
		]
	},
	{
		"id": "130",
		"name": "Code Collab",
		"children": [
			{
				"id": "132",
				"name": "VCS",
				"children": [
					{
						"id": "134",
						"name": "Git"
					},
					{
						"id": "135",
						"name": "Git"
					}
				]
			},
			{
				"id": "136",
				"name": "Kaban Board",
				"children": [
					{
						"id": "138",
						"name": "Backlog"
					},
					{
						"id": "139",
						"name": "WIP Limits"
					},
					{
						"id": "140",
						"name": "Jira"
					},
					{
						"id": "141",
						"name": "Trello"
					}
				]
			},
			{
				"id": "142",
				"name": "Agile",
				"children": [
					{
						"id": "144",
						"name": "Sprint Planning"
					},
					{
						"id": "145",
						"name": "Daily Stand Up"
					},
					{
						"id": "146",
						"name": "Sprint Review"
					},
					{
						"id": "147",
						"name": "Sprint Retrospective"
					}
				]
			},
			{
				"id": "148",
				"name": "Slack"
			},
			{
				"id": "149",
				"name": "Microsoft Teams"
			},
			{
				"id": "150",
				"name": "Discord"
			}
		]
	}
]

function genSkillName(skillsTreeData, skillsData) {
  const iterate = (skillSet, obj, skillsData) => {
    // check if resulting object skillSet already has skill name as key
    if (!Object.keys(skillSet).includes(obj["name"])) {
      // check if skillsData already has that skill name as a key
      if (!Object.keys(skillsData).includes(obj["name"])) {
        // create new key
        skillSet[obj["name"]] = {
          name: obj["name"],
          docLink: "https://reactjs.org/",
          tag: [],
          descMarkdown: `DEFAULT DESC`,
        }
      }
      else {
        // use old key
        skillSet[obj["name"]] = skillsData[obj["name"]]
      }
    }
    
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {
        iterate(skillSet, obj[key], skillsData)
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

  let skillSet = iterate({}, skillsTreeData, skillsData)
  skillSet = sortOnKeys(skillSet)
  
  const fs = require('fs');
  let data = JSON.stringify(skillSet);
  fs.writeFileSync('temp.json', data);
}

genSkillName(skillsTreeData, skillsData)