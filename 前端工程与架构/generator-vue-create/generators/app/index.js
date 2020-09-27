const Generator = require('yeoman-generator');
const fs = require('fs');
const path = require('path');
const filesName = [];
const tmpPath = path.join(__dirname , 'templates');
const files = fs.readdirSync(tmpPath);

module.exports = class extends Generator {
    prompting () {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname
            }
        ])
        .then(answers => {
            this.answers = answers
        })
    }

    writing () {
        /**
         * 读取文件路径
         * @param {*} files 文件列表
         * @param {*} pathStr 路径
         */
        function getFilesName(files, pathStr) {
            files.forEach((item) => {
                const storePath = path.join(pathStr, item);
                const stat = fs.lstatSync(storePath);
                if (stat.isDirectory()) {
                    getFilesName(fs.readdirSync(storePath), storePath);
                } else {
                    filesName.push(storePath.replace(tmpPath + '/', ''));
                }
            })
        }
        getFilesName(files, tmpPath);

        filesName.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}