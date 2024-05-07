const htmlmin = require('html-minifier')
const Image = require("@11ty/eleventy-img")
const now = String(Date.now())

async function imageShortcode(src, alt, pictureClass, imgClass) {
    if(alt === undefined) {
        // You bet we throw an error on missing alt (alt="" works okay)
        throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }

    let metadata = await Image(src, {
        widths: [300, 600, 1200],
        formats: ['webp', 'jpg', 'png'],
        outputDir: "./_site/images/",
        urlPath: "/images/"
    });

    let lowsrc = metadata.png[0];
    let highsrc = metadata.png[metadata.png.length - 1];

    return `<picture class="${pictureClass}">
        ${Object.values(metadata).map(imageFormat => {
        return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}">`;
        }).join("\n")}
        <img
            src="${lowsrc.url}"
            width="${highsrc.width}"
            height="${highsrc.height}"
            alt="${alt}"
            class="${imgClass}"
            loading="lazy"
            decoding="async">
        </picture>`;
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget('tailwind.config.js')
    eleventyConfig.addWatchTarget('tailwind.css')

    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('fonts')

    eleventyConfig.addPassthroughCopy({'./node_modules/alpinejs/dist/cdn.js': './js/alpine.js',})
    eleventyConfig.addPassthroughCopy({'./node_modules/sal.js/dist/sal.js': './js/sal.js',})
    eleventyConfig.addPassthroughCopy({'./node_modules/sal.js/dist/sal.css': './sal.css',})

    eleventyConfig.addShortcode('version', function () {
        return now
    })
    
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode)
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
        if (
            outputPath &&
            outputPath.endsWith('.html')
        ) {
        let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
        });
        return minified
        }
        return content
    })
    return {
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            includes: "includes",
			layouts: "layouts",
			data: "data",
        }
    }
};