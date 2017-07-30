const mongoose = require('mongoose');
const SearchHistory = mongoose.model('SearchHistory');
const axios = require('axios');

exports.search = async (req, res) => {
    const apiKey = process.env.GOOGLE_API_KEY;
    const searchId = process.env.CUSTOM_SEARCH_ID;
    
    const offset = req.query.offset || '1';
    const search = await (new SearchHistory({searchTerm: req.params.search})).save();
    
    const apiURL = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchId}&searchType=image&q=${search.searchTerm}&num=10&start=${offset}&fields=items(snippet,link,image/contextLink)`;

    // make request to image api
    const response = await axios.get(apiURL);
    // send json data
    res.json(response.data.items);
};

exports.getLatest = async (req, res) => {
    const mostRecent = await SearchHistory
        .find({}, {_id: 0, searchTerm: 1, when: 1})
        .sort('-when')
        .limit(10);

    res.json(mostRecent);
};