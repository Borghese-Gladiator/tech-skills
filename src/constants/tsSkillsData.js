// UNIQUE KEY is name, however can't enforce cause no SQL here
// can only do it myself (since I haven't set up any backend at all)

export default {
	"<audio>": {
		"name": "<audio>",
		"docLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio",
		"tags": [
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
		"tags": [
			"HTML5",
			"<figure>"
		],
		"descMarkdown": "# HTML5 element \n* Caption for a <figure> element"
	},
	"<figure>": {
		"name": "<figure>",
		"docLink": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure",
		"tags": [
			"HTML5",
			"<figcaption>"
		],
		"descMarkdown": "# HTML5 element \n* Self-contained content (eg: image, illustration, diagram, code snippet)"
	},
	"Agile": {
		"name": "Agile",
		"docLink": "https://agilemanifesto.org/",
		"tags": [
			"Project Management",
			"SMART Goals",
			"Collaboration"
		],
		"descMarkdown": "## Project Management Methodology\n Agile is an iterative approach to project management and software development that helps teams deliver value to their customers faster and with fewer headaches.\nInstead of betting everything on a \"big bang\" launch, an agile team delivers work in small, but consumable, increments. Requirements, plans, and results are evaluated continuously so teams have a natural mechanism for responding to change quickly.\n\nIn comparison, waterfall method is to design everything beforehand & then develop. Agile is develop continuously and adapt to changing needs."
	},
	"Android": {
		"name": "Android",
		"docLink": "https://reactjs.org/",
		"tags": [
			"OS",
			"Mobile"
		],
		"descMarkdown": "# Mobile OS\nAndroid is a popular, Linux-based mobile phone operating system (maintained by Google).\n* Dev with Android studio\n* Future is to have one codebase for mobile & desktop with android/ios folders to adjust for those permission (eg: Flutter, Ionic)."
	},
	"Android Studio": {
		"name": "Android Studio",
		"docLink": "https://developer.android.com/",
		"tags": [
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
		"tags": [
			"Frontend",
			"TypeScript",
			"HTML Template Syntax"
		],
		"descMarkdown": "# JS Framework\n* Build mobile & desktop UI at same time.\n* Built-in Testing apparently (have not tried it)\n* As a framework, starting an app creates an extensive directory structure"
	},
	"Animation Libraries": {
		"name": "Animation Libraries",
		"docLink": "https://en.wikipedia.org/wiki/CSS_animations",
		"tags": [
			"Frontend",
			"React"
		],
		"descMarkdown": "# JS Libraries\nIn general, animation libraries are done with JS. CSS3 comes with built-in animation and can be more cross-platform.\n* Advantagse of animation library is finer control due to using scripts\n* More work to cover edge cases and ensure performance.\n* Also negative is learning curve.\n* Frontend animation libraries enable easier animations instead of just using CSS3 custom animations to fade, hover, or other.\n* There are React animation libraries like (framer-motion || Poser)"
	},
	"Ant": {
		"name": "Ant",
		"docLink": "https://reactjs.org/",
		"tags": [
			"Build Tools",
			"XML",
			"Java"
		],
		"descMarkdown": "# Legacy Build Tool.\n* Uses build.xml therefore very limiting\n* See newer tools which use plugins for out-of-the-box functionality: see Maven & Gradle\n. Apache Ant is a Java library and command-line tool whose mission is to drive processes described in build files as targets and extension points dependent upon each other. "
	},
	"App Performance Test": {
		"name": "App Performance Test",
		"docLink": "https://developers.google.com/web/tools/lighthouse",
		"tags": [
			"Web Dev"
		],
		"descMarkdown": "## Desktops vs Web Apps\nFor frontend, you should \n* Reduce JS bundle size\n* Remove unused styling\n* Memoize functions to not reuse\n* Figure out caching strategy (in general)\n\nFor web apps, you should test:\n* load tests\n* stress tests\n* spike tests - rapidly increase workload\n* endurance tests (soak tests) - app performance over long time (find memory leaks)\n* scalability tests - gradually increase workload\n* Volume tests\n\nWeb Dev Performance Testing Tools\n* Lighthouse (built into Chrome DevTools)\n* KeyCDN (haven't used, but heard OK)\n\nDesktop - record some test scenario & use some tools (I'm pretty unfamiliar)\n"
	},
	"Testing (QE)": {
		"name": "Testing (QE)",
		"docLink": "https://en.wikipedia.org/wiki/Software_testing",
		"tags": ["Unit Tests", "Integration Tests", "Stagsing", "DevOps"],
		"descMarkdown": "Tests are imperative to create quality products. Once tests are made, **DevOps (CI/CD)** can be built & QE can be automated. \n* Write unit tests for code functionality (DEV) \n* Write integration tests to run on the production build (StagsING)\n* Use plugins like Jacoco to get reports about integration testing results\n* Automate frontend tests with Selenium WebDriver\n* Performance tests prepare for different user activity scenarios"
	},
	"Babel": {
		"name": "Babel",
		"docLink": "https://babeljs.io/",
		"tags": [],
		"descMarkdown": "# JS Transpiler\nConverts ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.\n* Pretty easy to add to a project. When you create a production build, you'll have a dist folder with optimized code for older browsers that you can use.\n P.S. Transpiler converts source code to equivalent source code (eg: Java to Kotlin)"
	},
	"Backlog": {
		"name": "Backlog",
		"docLink": "https://www.atlassian.com/agile/scrum/backlogs",
		"tags": ["Agile", "Sprint"],
		"descMarkdown": "## List of Tasks\nBacklog contains tasks that could be done, but are not REQUIRED.\n* Backlog: Possible user stories\n* To Do: Required stories\n* In Progress: being done (add WIP limit on stories here)\n* Completed: user story implemented\n\nVariations are more complicated to reflect Dev completion and then QE start, but ideally QE is automated with DevOps\nOfficial Doc link goes to Atlassian's Agile Coach page & describes product backlog in detail."
	},
	"Bash": {
		"name": "Bash",
		"docLink": "https://www.gnu.org/software/bash/",
		"tags": ["GNU/Linux"],
		"descMarkdown": "# Bourne Again SHell\nThe Bash shell is present in all the GNU/Linux distros. Use it to automate scripts & directory structure stuff."
	},
	"Batch Scripts": {
		"name": "Batch Scripts",
		"docLink": "https://en.wikipedia.org/wiki/Batch_file",
		"tags": ["Windows"],
		"descMarkdown": "# (.bat) Windows Batch Scripting\nSince DOS, Batch scripts have been useful for Windows to automate OS directory & file stuff.\nToday, it's still useful to get anything quick working, but involved scripts should use Powershell which can do heavy lifting for Windows scripts"
	},
	"Browser Storage": {
		"name": "Browser Storage",
		"docLink": "https://medium.com/@krishankantsinghal/local-storage-vs-session-storage-vs-cookie-22655ff75a8",
		"tags": ["Frontend", "Web Dev"],
		"descMarkdown": "# Modern Browser Storage\nPreviously, browsers could only store cookies.\n After HTML5, localStorage stores key/value pairs in the browser w/o expiring. However, it has a small limit and not secure\n Session Storage stores data per session until browser (or tab) is closed. Therefore, multiple tabs has multiple session storage instances.\nCookies store data to be sent to server in subsequent XHR requests (primarily for server-side rendering)"
	},
	"Build Tools": {
		"name": "Build Tools",
		"docLink": "https://en.wikipedia.org/wiki/List_of_build_automation_software",
		"tags": ["Dev", "Stagsing", "Production"],
		"descMarkdown": "# Build tools\n### Automates creating executables for production\n Use tools like Webpack, Gulp, Gradle, Maven, Ant, to test create **production** builds of product.\n* Android = apk\n* Windows installer = exe, msi\n* Java executables = war, jar"
	},
	"C": {
		"name": "C",
		"docLink": "https://www.geeksforgeeks.org/c-language-set-1-introduction/",
		"tags": ["Procedural", "OS class (UMass CS230)"],
		"descMarkdown": "# Language\nBoth high-level (application software) & low-level programming: scripting for drivers & kernels.\nFundamental basis for building other languages: C++, Java, JS, Go, Rust, PHP, Python, Perl.\n## Advantagses\n* fewer libraries - code from scratch\n* fast execution time (less processing overhead - garbage colleciton || preventing memory leaks)\n* embedded programming\n\n### Disadvantagses\n* Literally same as its advantagses. Writing stuff from scratch is a way pain & why reinvent the wheel.\n* There's a reason people made high-level programming langauges\n* PS: Professor thinks this is a high-level programming language and was on the test......>.>. When you can write drivers & kernels with this, I would beg to differ, but what do I know."
	},
	"C#": {
		"name": "C#",
		"docLink": "https://docs.microsoft.com/en-us/dotnet/csharp/",
		"tags": ["Microsoft", "Unity game engine"],
		"descMarkdown": "# Language\nIt's basically Microsoft Java\n* requires .NET framework to run\n* hybrid between C and C++ to create a modernized language\n### Advantagses\n* Good for making Windows desktop applications and games\n* supports operator overloading for multiple operators (figure out what that means later...)\n* Maintained by Microsoft"
	},
	"C++": {
		"name": "C++",
		"docLink": "https://docs.microsoft.com/en-us/cpp/?view=vs-2019",
		"tags": ["C", "Object-oriented"],
		"descMarkdown": "# Language\nC with Classes\nModern C now supports object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.\n\n* I haven't really used - don't know a lot"
	},
	"CSS Media Queries": {
		"name": "CSS Media Queries",
		"docLink": "https://www.w3schools.com/cssref/css3_pr_mediaquery.asp",
		"tags": ["Frontend",  "CSS3", "Responsive Web Design",],
		"descMarkdown": "#### Tailor style sheet to desktops, laptops, tablets, and mobile phones.\nUsage: `@media only screen and (max-width: 600px)`"
	},
	"CSS3": {
		"name": "CSS3",
		"docLink": "https://developer.mozilla.org/en-US/docs/Web/CSS",
		"tags": ["Frontend"],
		"descMarkdown": "# Cascading Style Sheets\nControls layout of multiple web pages. Now useful for responsive web design\n* HTML contains content of web page\n* CSS contains features like **custom properties, feature queries, media queries, variable fonts, graphical effects, CSS Grid and Layouts** \n\n### Features\n* Custom properties:`:root {  -​-primaryColor: #f45942;  }`\n* Feature queries: `@supports (display: grid) { .my-component { display: flex; } }`\n* Media queries (see child page on left Skill Tree)\n* Variable fonts: load single font file for an entire font family\n* Graphical Effects\n  * background-blend-mode\n  * mix-blend-mode\n  * CSS Filters\n  * Convert to grayscale\n  * SVG Filters\n  * Clipping and Masking (create non-rectangles by hiding parts of an image)\n  * linear-gradient (along same lines, but useful function to leave here)\n* CSS Grid and Layouts: [w3schools grid columns](https://www.w3schools.com/cssref/pr_grid-template-columns.asp)\n\n"
	},
	"CentOS": {
		"name": "CentOS",
		"docLink": "https://docs.centos.org/en-US/docs/",
		"tags": ["GNU/Linux", "Servers"],
		"descMarkdown": "# GNU/Linux Distro\n Derived from Red Hat Enterprise\n Used CentOS 7 at RSA & CentOS 8 with VirtualBox\n Most often used as a server OS."
	},
	"Chai": {
		"name": "Chai", 
		"docLink": "https://reactjs.org/",
		"tags": ["JavaScript", "Testing"],
		"descMarkdown": "Assertion Library\n Most often used with Mocha to create unit tests for JS code. Since Chai is just an assertion library, it needs a test framework."
	},
	"Collab Tools": {
		"name": "Collab Tools",
		"docLink": "https://reactjs.org/",
		"tags": ["Agile", "Kanban board", "Sprint"],
		"descMarkdown": "## General Project Management tools\n* Monday\n* Jira\n* Trello\n"
	},
	"Component Libraries": {
		"name": "Component Libraries",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Cookies": {
		"name": "Cookies",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"D3.js": {
		"name": "D3.js",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"DOM Surgery": {
		"name": "DOM Surgery",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Daily Stand Up": {
		"name": "Daily Stand Up",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Database": {
		"name": "Database",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Declarative Pipelines": {
		"name": "Declarative Pipelines",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"DevOps (CI/CD)": {
		"name": "DevOps (CI/CD)",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Discord": {
		"name": "Discord",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"EOT": {
		"name": "EOT",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Executor": {
		"name": "Executor",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Flexbox": {
		"name": "Flexbox",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Fonts": {
		"name": "Fonts",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Framer Motion": {
		"name": "Framer Motion",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Frontend": {
		"name": "Frontend",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Gatsby.js": {
		"name": "Gatsby.js",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Git": {
		"name": "Git",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"GitLab": {
		"name": "GitLab",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Gradle": {
		"name": "Gradle",
		"docLink": "https://gradle.org/",
		"tags": [
			"Build Tools",
			"Java"
		],
		"descMarkdown": "Far improved Java build tool as compared to Maven & Ant which both need long configuration files by definition. Gradle uses plugins and lets people use plugins like Jacoco with one command."
	},
	"Gulp": {
		"name": "Gulp",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"HTML5": {
		"name": "HTML5",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"JS Asynchrony": {
		"name": "JS Asynchrony",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Java": {
		"name": "Java",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"JavaScript": {
		"name": "JavaScript",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Jenkins": {
		"name": "Jenkins",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Jest": {
		"name": "Jest",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Jira": {
		"name": "Jira",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Kaban Board": {
		"name": "Kaban Board",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Lighthouse": {
		"name": "Lighthouse",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"GNU/Linux": {
		"name": "GNU/Linux",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Local Storage": {
		"name": "Local Storage",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Material UI": {
		"name": "Material UI",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Material-UI Theme Spacing": {
		"name": "Material-UI Theme Spacing",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Maven": {
		"name": "Maven",
		"docLink": "https://maven.apache.org/maven-features.html",
		"tags": [
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
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Mocha": {
		"name": "Mocha",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"MongoDB": {
		"name": "MongoDB",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"MongoDB Atlas": {
		"name": "MongoDB Atlas",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"MongoDB Stitch": {
		"name": "MongoDB Stitch",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Mongoose": {
		"name": "Mongoose",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"MySQL": {
		"name": "MySQL",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Next.js": {
		"name": "Next.js",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Nose": {
		"name": "Nose",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Nuxt.js": {
		"name": "Nuxt.js",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Operating Systems": {
		"name": "Operating Systems",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"PostgreSQL": {
		"name": "PostgreSQL",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Powershell": {
		"name": "Powershell",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Programming Languages": {
		"name": "Programming Languages",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "# Header 1 \n## Header 2\n* blah\n* blah\n\t\t"
	},
	"Python": {
		"name": "Python",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"R": {
		"name": "R",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"React": {
		"name": "React",
		"docLink": "https://reactjs.org/",
		"tags": [
			"Frontend",
			"JavaScript"
		],
		"descMarkdown": "JS Frontend library to build UI components with state lifecycles"
	},
	"React Bootstrap": {
		"name": "React Bootstrap",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"React Hooks": {
		"name": "React Hooks",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"React Optimization": {
		"name": "React Optimization",
		"docLink": "https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab",
		"tags": ["Frontend", "Performance Testing"],
		"descMarkdown": "DEFAULT DESC"
	},
	"React Router": {
		"name": "React Router",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Reactstrap": {
		"name": "Reactstrap",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Redux": {
		"name": "Redux",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Responsive Design": {
		"name": "Responsive Design",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Ruby": {
		"name": "Ruby",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"SASS": {
		"name": "SASS",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"SQL Server": {
		"name": "SQL Server",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"SQLite": {
		"name": "SQLite",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"SVG": {
		"name": "SVG",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Scripted Pipelines": {
		"name": "Scripted Pipelines",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Selenium": {
		"name": "Selenium",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Semantic UI React": {
		"name": "Semantic UI React",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Session Storage": {
		"name": "Session Storage",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"SinonJS": {
		"name": "SinonJS",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Slack": {
		"name": "Slack",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Sprint Planning": {
		"name": "Sprint Planning",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Sprint Retrospective": {
		"name": "Sprint Retrospective",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Sprint Review": {
		"name": "Sprint Review",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Styling": {
		"name": "Styling",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"TTF": {
		"name": "TTF",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Trello": {
		"name": "Trello",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"TypeScript": {
		"name": "TypeScript",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"UI Testing": {
		"name": "UI Testing",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Ubuntu": {
		"name": "Ubuntu",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Unit Testing": {
		"name": "Unit Testing",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"VCS": {
		"name": "VCS",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Vanilla JS": {
		"name": "Vanilla JS",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Vue.js": {
		"name": "Vue.js",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"WIP Limits": {
		"name": "WIP Limits",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"WOFF": {
		"name": "WOFF",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"WOFF2": {
		"name": "WOFF2",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"WebRTC": {
		"name": "WebRTC",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Webpack": {
		"name": "Webpack",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Windows": {
		"name": "Windows",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"Worker": {
		"name": "Worker",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"apt-get": {
		"name": "apt-get",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"cron": {
		"name": "cron",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"iOS": {
		"name": "iOS",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"jQuery": {
		"name": "jQuery",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"styled-components": {
		"name": "styled-components",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"unittest": {
		"name": "unittest",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	},
	"yum": {
		"name": "yum",
		"docLink": "https://reactjs.org/",
		"tags": [],
		"descMarkdown": "DEFAULT DESC"
	}
}