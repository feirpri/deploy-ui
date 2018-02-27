let fs = require('fs');
let path = require('path');

function createMultIndex() {
    let dir = path.resolve('./packages');
    let str = [`/** \rAuto created by script; \rAuthor: 舍掉英熊 \rUpdated: ${(new Date()).toString()}\r**/`];
    let components = [];
    let folders = fs.readdirSync(dir);
    folders.forEach((foldername) => {
        str.push(`import ${foldername} from '../packages/${foldername}/';`);
        components.push(`${foldername}`);
    });
    str.push('\r');
    str.push(`function install(Vue){
        [${components.join(', ')}].forEach(
            item => item.install(Vue)
        );
    }`);
    str.push('\r');
    str.push(`export default {\rinstall,\r${components.join(',\r')}\r}`);

    fs.writeFileSync(path.resolve('./src/index.js'), str.join('\n'));
}

module.exports = createMultIndex;
