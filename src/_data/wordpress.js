const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let url = `${process.env.WORDPRESS_URL}/posts`;

  return EleventyFetch(url, {
    type: "json",
  });
};
