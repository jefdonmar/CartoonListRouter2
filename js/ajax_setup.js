import $ from 'jquery';

const APP_ID = 'OMlIeJFoPoBWvSQxijVD1QWilp23C3I9uTvtii4W';
const API_KEY = 'lJoeKAuCsm8wgKQKkxpcx5WBADBrdnf7DiXv4jyi';

$.ajaxSetup({

  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-KEY': API_KEY
  }
});

// This step setup you router to get the information from you parse file 