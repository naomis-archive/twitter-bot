"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
var twitter_1 = __importDefault(require("twitter"));
var login = function () {
    var consumerKey = process.env.CONSUMER_KEY;
    var consumerSecret = process.env.CONSUMER_SECRET;
    var accessToken = process.env.ACCESS_TOKEN;
    var accessSecret = process.env.ACCESS_SECRET;
    if (!consumerKey || !consumerSecret || !accessToken || !accessSecret) {
        console.error("Missing API values!");
        process.exit(1);
    }
    var Becca = new twitter_1.default({
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
        access_token_key: accessToken,
        access_token_secret: accessSecret,
    });
    return Becca;
};
exports.login = login;
