const withSass = require("@zeit/next-sass");

module.exports = withSass({
    exportTrailingSlash: true,
    exportPathMap: () => {
        const paths = ["/", "/register", "/schedule", "/sponsor", "/support", "/whatis"];
        let map = {};

        paths.forEach(path => {
            map[path] = {page: path};
        });

        return map;
    }
});