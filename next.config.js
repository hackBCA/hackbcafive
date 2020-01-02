const sass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");
const svgr = require("next-svgr")

module.exports = withPlugins([
    sass,
    svgr
], {
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