# marikovmailbory

marikovmailbory is a Node.js module that provides a collection of tools for fetching and parsing HTML content using various techniques.

## Installation

You can install this module via npm: `npm install marikovmailbory`

## Usage

```javascript
const { fetchAndParseHTML, extractTextFromHTML, extractLinksFromHTML, parseHTML } = require('quantum-tools');

// Fetch HTML content from a website and parse it using Cheerio
fetchAndParseHTML('https://example.com')
    .then(($) => {
        // Extract text from HTML using Cheerio
        const title = extractTextFromHTML($, 'title');
        console.log('Title:', title);

        // Extract links from HTML using Cheerio
        const links = extractLinksFromHTML($, 'a');
        console.log('Links:', links);
    })
    .catch((error) => {
        console.error(error.message);
    });

// Parse HTML content using Node HTML Parser
const html = '<div><p>Hello, world!</p></div>';
const root = parseHTML(html);
console.log(root.querySelector('p').text); // Output: Hello, world!
```

