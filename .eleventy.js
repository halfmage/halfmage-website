module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/img");
    return {
        dir: {
            input: "src"
        }
    }
};