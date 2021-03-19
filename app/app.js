import axios from "axios";

export default {
	name: "App",
	created() {
		axios.get("/routes.php").then(response => {
			this.files = response.data.split("\n").map(path => {
				path = path.replace(/^\.\//, "");
				return {
					path: path,
					url: "/files/" + path,
					content: ""
				}
			});
			this.files.pop(); // last item is empty string. remove it
			this.handleRouteChange(this.$route);
		})
	},
	computed: {
		filteredFiles() {
			if (this.search === "") {
				return this.files;
			}
			return this.files.filter(f => f.path.includes(this.search));
		}
	},
	data: function () {
		return {
			files: [],
			showPage: false,
			pageNotFound: false,
			showSidebar: false,
			content: "",
			search: "",
		};
	},
	methods: {
		getFileContent(file) {
			if (file.content !== "") {
				return this.renderFile(file);
			}
			axios.get(file.url)
				.then(response => {
					file.content = response.data;
					this.renderFile(file);
				})
				.catch(console.log);
		},
		renderFile(file) {
			this.content = file.content;
			this.showPage = true;
			this.showHomePage = this.pageNotFound = false;
		},
		handleRouteChange(route) {
			if (route.path === "/") {
				this.showHomePage = true;
				this.showPage = this.pageNotFound = false;
				return;
			}
			let file = this.files.find(f => "/" + f.path === route.path);
			if (file !== null && file !== undefined) {
				this.getFileContent(file);
			} else {
				this.showHomePage = this.showPage = false;
				this.pageNotFound = true;
			}
		}
	},
	watch: {
		$route: {
			immediate: true,
			handler: 'handleRouteChange'
		}
	}
}
