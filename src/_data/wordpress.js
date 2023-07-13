const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let url = `${process.env.WORDPRESS_URL}/posts`;

  /* This returns a promise */
  return EleventyFetch(url, {
    duration: "1d",
    type: "json",
  });
};
