let fs = require('fs');
let path = require('path');

module.exports = function (options) {
	let suffixArray = options.suffix || [];
	suffixArray.unshift('');
	let alias = options.alias || {};
	let aliasArray = Object.keys(alias);

	function isTailMode(str) {
		return str.indexOf('$') === str.length - 1;
	}

	return {
		resolveId(file, importer) {
			if (!importer) {return null;}

			aliasArray.every(function(key) {
				let tailMode = isTailMode(key);
				if (tailMode && file.match(new RegExp(key))) {
					file = file.replace(new RegExp(key), alias[key]);
					return false;
				}
				if (!tailMode && file.indexOf(key) === 0) {
					file = file.replace(key, alias[key]);
					return false;
				}
				return true;
			});

			let res = null;
			let baseDir = file.indexOf('./') === 0 ? path.dirname(importer) + '/' : '';
			(suffixArray || []).every(function(suf){
				let filepath = path.resolve(baseDir + file + suf);
				try {
					if(fs.statSync(filepath).isFile()){
						res = filepath;
						return false;
					}else {
						return true;
					};
				} catch (err) {
					return true;
				}
			});

			return res;
		}
	};
}
