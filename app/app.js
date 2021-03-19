import axios from "axios";
import { fixImgUrls, mapDataToFileObjects } from "./helpers";
/*
 * Function below fixes this bug: relative IMG url are not correctly solved (by the browser) because the user's notes (including markdown and images) are stored in public/files/, so the browser would make the request of an image to 
 * */

export default {
	name: "App",
	created() {
		axios.get("/routes.php").then(response => {
			this.files = mapDataToFileObjects(response.data);
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
					file.content = fixImgUrls(response.data, file.path);
					console.log(file.content)
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
