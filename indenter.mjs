// pseudo Python to Python re-formatter
function indenter (str) {
    indentation = [];
    let result = '';
    if (str) {
	str.split ('\n').forEach (line => {
	    let s = indent1 (line.trim ());
	    result += '\n' + s;
	});
    }
    return result;
}

let indentation = [];

function indent1 (s) {
    let n_opens = (s.match (/⤷/g) || []).length;
    let n_closes = (s.match (/⤶/g) || []).length;
    let r = indentation.join ('') + s.replace (/⤷/g, '').replace (/⤶/g, '');
    let diff = n_opens - n_closes;
    if (diff > 0) {
	while (diff > 0) {
            indentation.push ('    ');
            diff -=1;
	}
    } else {
	while (diff < 0) {
            indentation.pop ();
            diff += 1;
	}
    }
    return r;
}

import * as fs from 'fs';
let inp = fs.readFileSync(0, 'utf-8');
let outp = indenter (inp);
console.log (outp);
