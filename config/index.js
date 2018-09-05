const _ = require('underscore');
const generalConfig = require('./general-config');
const enviroment = require('./enviroment');

module.exports = {
    settings: _.extend(generalConfig, enviroment)
};