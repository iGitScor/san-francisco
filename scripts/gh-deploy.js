const ghpages = require('gh-pages');
const path = require('path');

// Demo deployment
ghpages.publish(
  path.join(__dirname, '..'),
  {
    src: [
      'index.html',
      'README.md',
      'builds/*.*',
      'src/style/*.*',
    ],
    message: 'Automatic deployment update',
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('No error in the demo website deployment');
    }
  }
);
