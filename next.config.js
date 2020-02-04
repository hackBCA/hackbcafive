const sass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");
const svgr = require("next-svgr");
const yaml = require("next-yaml");

module.exports = withPlugins([
    sass,
    svgr,
    yaml
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