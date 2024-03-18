const axios = require('axios');
const cheerio = require('cheerio');
const { parse } = require('node-html-parser');

// Function to fetch HTML content from a website and parse it using Cheerio
async function fetchAndParseHTML(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        return $;
    } catch (error) {
        throw new Error(`Error fetching ${url}: ${error.message}`);
    }
}

// Function to extract text from HTML content using Cheerio
function extractTextFromHTML($, selector) {
    return $(selector).text().trim();
}

// Function to extract links from HTML content using Cheerio
function extractLinksFromHTML($, selector) {
    const links = [];
    $(selector).each((index, element) => {
        links.push($(element).attr('href'));
    });
    return links;
}

// Function to parse HTML content using Node HTML Parser
function parseHTML(html) {
    return parse(html);
}

module.exports = {
    fetchAndParseHTML,
    extractTextFromHTML,
    extractLinksFromHTML,
    parseHTML
};
