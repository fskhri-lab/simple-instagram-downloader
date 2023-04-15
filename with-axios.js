const axios = require('axios');
const fs = require('fs');

async function downloadImage(imageUrl, filename) {
  const response = await axios.get(imageUrl, { responseType: 'stream' });
  const writer = fs.createWriteStream(filename);
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

// Example usage
const imageUrl = 'https://www.example.com/image.jpg';
const filename = 'image.jpg';
downloadImage(imageUrl, filename)
  .then(() => console.log('Image downloaded successfully'))
  .catch(err => console.error(err));
