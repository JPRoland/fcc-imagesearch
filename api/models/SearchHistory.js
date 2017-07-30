const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const searchHistorySchema = new mongoose.Schema({
    searchTerm: {
        type: String,
        required: 'You must provide a search term'
    },
    when: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SearchHistory', searchHistorySchema);