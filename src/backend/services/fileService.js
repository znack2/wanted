// /* Global imports */
// var _ = require('underscore'),
//   logger = require('winston');
//
// /**
//  Reads a folder and writes all files to a json
//  @param dir         string, Directory with files
//  @param suffix      The file suffix
//  @param callback    The Callback function
//  */
// exports.getLocalFiles = function (dir, suffix, callback) {
//   var fs = require('fs-extra'),
//     walk = require('walk'),
//     path = require('path');
//
//   var walker = walk.walk(dir);
//   var returnFiles = [];
//   var uniqueFileNames = {};
//   walker.on('file', function(root, fileStat, next) {
//     var filePath = path.join(root, fileStat.name);
//     root = path.normalize(root);
//     if (fileStat.name.match(suffix)) {
//       var fileObject = { 'href': filePath, 'dir': root, 'file': fileStat.name };
//       if (!uniqueFileNames.hasOwnProperty(fileObject.file)) {
//         returnFiles.push(fileObject);
//         uniqueFileNames[fileObject.file] = true;
//       }
//     }
//
//     next();
//   });
//
//   walker.on('end', function(err) {
//     callback(err, returnFiles);
//   });
// };
//
// /**
//  Reads a folder and writes all files to a json
//  @param dir         string, Directory with files
//  @param filename    The filename to search for
//  @param callback    The Callback function
//  */
// exports.getLocalFile = function (dir, filename, callback) {
//   this.getLocalFiles(dir, '', function(err, returnFiles) {
//     var foundFile = false;
//     _.forEach(returnFiles, function(file) {
//       if (file.file === filename) {
//         callback(err, file);
//         foundFile = true;
//       }
//     });
//     if (!foundFile) {
//       callback(err, null);
//     }
//   });
// };
//
// /**
//  Removes corrupted directories.
//  @param checkDir         dir to check
//  @param callback        The Callback
//  */
// exports.removeBadDir = function (checkDir, callback){
//   var rimraf = require('rimraf'),
//     async  = require('async');
//
//   rimraf(checkDir, function (err) {
//     if(!err){
//       setTimeout(function(){
//         /* Send string to client to trigger reload of bad item */
//         callback('bad dir');
//       },1000);
//     } else {
//       logger.error('Removing dir error:', err );
//     }
//   });
// };
//
// exports.downloadFile = function (src, output, options, callback){
//   var wget = require('wget');
//   var download = wget.download(src, output, options);
//   download.on('error', function(err) {
//     logger.error('Error', err);
//     callback();
//   });
//   download.on('end', function(output) {
//     logger.info('File downloaded succesfully...');
//     setTimeout(function(){
//       callback(output);
//     },3000);
//   });
//   download.on('progress', function(progress) {
//     logger.info(progress);
//   });
// }
//


//
// typingSymLink
//
//
// import pathHelper           from '../helpers/pathHelper'
// import fs                   from 'fs'
//
// let originalPath            = pathHelper.getRelative('typings')
// let destinationPath         = pathHelper.getRelative('client', 'typings')
//
// fs.symlink(originalPath, destinationPath, 'dir', (err) => {
//   if (err) return console.log(err)
//
//   console.log('Symlink successfully created!')
// })