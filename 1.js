const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function getMediaUrl(postUrl) {
  const response = await fetch(postUrl);
  const html = await response.text();
  const $ = cheerio.load(html);
  const mediaUrl = $('meta[property="og:video"]').attr('content') || $('meta[property="og:image"]').attr('content');
  return mediaUrl;
}

// Example usage
getMediaUrl('https://www.instagram.com/p/abcdef123456/')
  .then(mediaUrl => console.log(mediaUrl))
  .catch(err => console.error(err));
