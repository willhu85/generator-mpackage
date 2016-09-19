/**
 * Created by willhu on 16/9/14.
 */

/* global require, console, module */
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');
var yosay = require('yosay');
var fs = require('fs');

var mpackageGenerator = yeoman.Base.extend({
    // 初始化
    initializing: function() {
        this.pkg = require('../package.json');
    },
    // 用户输入部分
    // prompting: function() {
    // var done = this.async();
    // this.log(yosay('Beigin your project'));
    // this.prompt(
    //     [{
    //             type: 'input',
    //             name: 'Project Name',
    //             message: 'What\' your project name?'
    //         },
    //         /*{
    //             type:       'confirm',
    //             name:       'addJdMobi',
    //             message:    'Would you like to include jdMobi?',
    //             default:    true
    //         }*/
    //     ],
    //     function(answers) {
    //         this.appName = answers.appName;
    //         done();
    //     }.bind(this));

    // },
    // 复制配置文件
    configuring: function() {
        // var context = {
        //     appName: this.appName
        // };
        this.copy('package.json', 'package.json');
        // this.template('bower.json', 'bower.json');
        this.copy('gulpfile.js', 'gulpfile.js');
        this.copy('.jshintrc', '.jshintrc');
        this.copy('.gitignore', '.gitignore');
        this.copy('sprite.handlebars',
            'sprite.handlebars');
        // this.template('bowerrc', '.bowerrc');

    },
    // npm bower install
    install: function() {
        var done = this.async();
        this.installDependencies({
            bower: true,
            npm: true,
            callback: function() {
                console.log('NPM install ready!');
                done();
            }
        });
    },
    // 创建文件夹
    createFolders: function() {
        mkdirp('src');
        mkdirp('src/scss');
        mkdirp('src/img');
        mkdirp('src/img/sprite');
        mkdirp('src/js');
        mkdirp('src/html');
    },
    // 写文件
    // writing: function() {
    //
    // },
    // // 解决冲突
    // conflicts: function() {
    //
    // },
    // end
    end: function() {
        this.log(yosay('mpackage install complete, ' + '\n' +
            ' you can beign ' + this.appName + ' project!'));
    }

});

module.exports = mpackageGenerator;
