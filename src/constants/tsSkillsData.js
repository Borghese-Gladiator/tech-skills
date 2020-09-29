// UNIQUE KEY is name, however can't enforce cause no SQL here
// can only do it myself (since I haven't set up any backend at all)

export default {
	"<audio>": {
		"name": "<audio>",
		"docLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio",
		"tag": [
			"HTML5",
			"JavaScript",
			"WebRTC",
			"MP3",
			"FLAC",
			"WAV",
			"AIFF"
		],
		"descMarkdown": "# HTML5 element \n* Used to embed a sound element in the page.\n* Loads sound from file specified by <source> element\n* Use WebRTC to redirect audio to various media devices."
	},
	"<figcaption>": {
		"name": "<figcaption>",
		"docLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption",
		"tag": [
			"HTML5",
			"<figure>"
		],
		"descMarkdown": "# HTML5 element \n* Caption for a <figure> element"
	},
	"<figure>": {
		"name": "<figure>",
		"docLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure",
		"tag": [
			"HTML5",
			"<figcaption>"
		],
		"descMarkdown": "# HTML5 element \n* Self-contained content (eg: image, illustration, diagram, code snippet)"
	},
	"Agile": {
		"name": "Agile",
		"docLink": "https://agilemanifesto.org/",
		"tag": [
			"Project Management",
			"SMART Goals",
			"Collaboration"
		],
		"descMarkdown": "## Project Management Methodology\n Agile is an iterative approach to project management and software development that helps teams deliver value to their customers faster and with fewer headaches.\nInstead of betting everything on a \"big bang\" launch, an agile team delivers work in small, but consumable, increments. Requirements, plans, and results are evaluated continuously so teams have a natural mechanism for responding to change quickly.\n\nIn comparison, waterfall method is to design everything beforehand & then develop. Agile is develop continuously and adapt to changing needs."
	},
	"Android": {
		"name": "Android",
		"docLink": "https://reactjs.org/",
		"tag": [
			"OS",
			"Mobile"
		],
		"descMarkdown": "# Mobile OS\nAndroid is a popular, Linux-based mobile phone operating system (maintained by Google).\n* Dev with Android studio\n* Future is to have one codebase for mobile & desktop with android/ios folders to adjust for those permission (eg: Flutter, Ionic)."
	},
	"Android Studio": {
		"name": "Android Studio",
		"docLink": "https://developer.android.com/",
		"tag": [
			"Android",
			"IDE",
			"XML",
			"Android Emulator",
			"APK Analyzer"
		],
		"descMarkdown": "## Official IDE for Android\n* Built atop of IntelliJ (similar interface)\n* Have cool features like Android Virtual Device (AVD Manager)\n* HELLA BULKY. TAKES 4EVER to get anything done.\n* AND, uses XML still for all the UI, so takes forever to write.",
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
		"tag": [
			"Frontend",
			"TypeScript",
			"HTML Template Syntax"
		],
		"descMarkdown": "# JS Framework\n* Build mobile & desktop UI at same time.\n* Built-in Testing apparently (have not tried it)\n* As a framework, starting an app creates an extensive directory structure"
	},
	"Animation Libraries": {
		"name": "Animation Libraries",
		"docLink": "https://en.wikipedia.org/wiki/CSS_animations",
		"tag": [
			"Frontend",
			"React"
		],
		"descMarkdown": "# JS Libraries\nIn general, animation libraries are done with JS. CSS3 comes with built-in animation and can be more cross-platform.\n* Advantage of animation library is finer control due to using scripts\n* More work to cover edge cases and ensure performance.\n* Also negative is learning curve.\n* Frontend animation libraries enable easier animations instead of just using CSS3 custom animations to fade, hover, or other.\n* There are React animation libraries like (framer-motion || Poser)"
	},
	"Ant": {
		"name": "Ant",
		"docLink": "https://reactjs.org/",
		"tag": [
			"Build Tools",
			"XML",
			"Java"
		],
		"descMarkdown": "(Build.xml). (Legacy build tool - see Maven & Gradle). Apache Ant is a Java library and command-line tool whose mission is to drive processes described in build files as targets and extension points dependent upon each other. "
	},
	"App Performance Test": {
		"name": "App Performance Test",
		"docLink": "https://developers.google.com/web/tools/lighthouse",
		"tag": [
			"Web Dev"
		],
		"descMarkdown": "\n\t\t\t\n\t\tPerformance Testing is different for desktops and web apps.\n\t\t\tFor web apps, you can test domain load speed, bundle size, and \n\t\t\t\t* load tests\n\t\t\t\t* stress tests\n\t\t\t\t* spike tests - rapidly increase workload\n\t\t\t\t* endurance tests (soak tests) - app performance over long time (find memory leaks)\n\t\t\t\t* scalability tests - gradually increase workload\n\t\t\t\t* Volume tests\n\t\t\tWeb Dev Performanc Testing Tools\n\t\t\t\t* Lighthouse (built into Chrome DevTools)\n\t\t\t\t* KeyCDN (haven't used, but heard OK)\n\t\t\tDesktop - record some test scenario & use some tools (I'm pretty unfamiliar)\n\t\t"
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
	"Browser Storage": {
		"name": "Browser Storage",
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
	"Collab Tools": {
		"name": "Collab Tools",
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
	"Cookies": {
		"name": "Cookies",
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
	"DOM Surgery": {
		"name": "DOM Surgery",
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
		"tag": [
			"Build Tools",
			"Java"
		],
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
	"JS Asynchrony": {
		"name": "JS Asynchrony",
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
	"Local Storage": {
		"name": "Local Storage",
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
		"tag": [
			"Build Tools",
			"Java"
		],
		"descMarkdown": "Uses POM (project object model) files to load dependencies from Maven Central (a repo). As a build tool, we use it to build our Java executables.",
		"relatedLinks": [
			{
				"text": "Gradle",
				"link": "https://gradle.org/"
			}
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
		"descMarkdown": "# Header 1 \n## Header 2\n* blah\n* blah\n\t\t"
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
		"tag": [
			"Frontend",
			"JavaScript"
		],
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
	"Session Storage": {
		"name": "Session Storage",
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