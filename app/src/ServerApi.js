'use strict';

const config = require('./config.template.js');
const { v4: uuidV4 } = require('uuid');

module.exports = class ServerApi {
    constructor(host, authorization) {
        this._host = host;
        this._authorization = authorization;
        this._api_key_secret = config.apiKeySecret;
    }

    isAuthorized() {
        if (this._authorization != this._api_key_secret) return false;
        return true;
    }

    getMeetingURL() {
        return 'https://' + this._host + '/join/' + uuidV4();
    }

    getJoinURL(data) {
        return (
            'https://' +
            this._host +
            '/join?room=' +
            data.room +
            '&name=' +
            data.name +
            '&audio=' +
            data.audio +
            '&video=' +
            data.video +
            '&notify=' +
            data.notify
        );
    }
};
