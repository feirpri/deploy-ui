let fs = require('fs');
let path = require('path');

function exstractLess() {
    let rootPath = './packages';
    let components = [];
    let folders = fs.readdirSync(rootPath);
    folders.forEach((foldername) => {
        let srcPath = path.resolve(`${rootPath}/${foldername}/src/`);
        try {
            fs.readdirSync(srcPath).forEach((file) => {
                let fileContent = fs.readFileSync(`${srcPath}/${file}`, {
                    encoding: 'utf-8'
                });
                let styleContent = fileContent.replace(/\r|\n/g,'**RRR**').replace(/^.+\<style[^>]+\>(.+)\<\/style\>/ig, '$1');
                let vueContent = fileContent.replace(/\r|\n/g,'**RRR**').replace(/<style[^>]+>(.+)<\/style>/igm, '');
                
                // 清除首位换行符
                vueContent = vueContent.replace(/^\*\*RRR\*\*/igm, '').replace(/(\*\*RRR\*\*)+$/igm, '**RRR**');
                styleContent = styleContent.replace(/^\*\*RRR\*\*/igm, '').replace(/(\*\*RRR\*\*)+$/igm, '**RRR**');

                // 还原换行符
                vueContent = vueContent.replace(/\*\*RRR\*\*/g, '\r');
                styleContent = styleContent.replace(/\*\*RRR\*\*/g, '\r');

                fs.writeFileSync(`${srcPath}/${file}`, vueContent);
                fs.writeFileSync(`./theme/${foldername.toLowerCase()}.less`, styleContent);
            });
        } catch(e) {}
    });
}

module.exports = exstractLess;
