export function fixImgUrls(content, path) {
	let pathFragments = path.split("/");
	let dir, parentDir;
	pathFragments.pop();
	dir = pathFragments.pop() || "";
	parentDir = pathFragments.pop() || "";
	if (dir !== "") {
		dir += "/";
	}
	if (parentDir !== "") {
		parentDir += "/";
	}
	return content
		.replace(
			/(\[[^\]]+\])\(\.?\/?([^\.](?!http:|https:)[^)]+(jpg|png|svg|jpeg))\)/gi,
			"$1(/files/" + dir + "$2)")
		.replace(
			/(\[[^\]]+\])\(\.{2}\/([^)]+(jpg|png|svg|jpeg))\)/gi,
			"$1(/files/" + parentDir + "$2)")
		.replace(
			/src=["']\.?\/?([^\.](?!http:|https:)[^"']+(jpg|png|svg|jpeg))["']/gi,
			'src="/files/' + dir + '$1"'
		)
		.replace(
			/src=["']\.{2}\/([^"']+(jpg|png|svg|jpeg))["']/gi,
			'src="/files/' + parentDir + '$1"'
		);	
}

/**
 * Return array of object representing fiules
 * @param  {String}
 * @return {Array}
 * */
export function mapDataToFileObjects(data) {
	// each line has a path of a given file
	let files = data.split("\n");

	// last item of array is empty string.
	files.pop();

	// filter files, then map it
	files = files
		.filter(path =>path.match(/.*(md|txt)$/i))
		.map(path => {
			path = path.replace(/^\.\//, "");
			return {
				path: path,
				url: "/files/" + path,
				content: ""
			};
		});
	return files;
}
