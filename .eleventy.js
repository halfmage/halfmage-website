const now = String(Date.now())

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy({'./node_modules/sal.js/dist/sal.js': './js/sal.js',})
    eleventyConfig.addPassthroughCopy({'./node_modules/sal.js/dist/sal.css': './sal.css',})

    eleventyConfig.addShortcode('version', function () {
        return now
    })

    eleventyConfig.addPassthroughCopy("src/img");
    return {
        dir: {
            input: "src"
        }
    }
};