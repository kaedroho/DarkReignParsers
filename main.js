var fs = require("fs");

if (process.argv[2] == "--ftg") {
    var FTG = require("./ftg.js").FTG;
    fs.readFile(process.argv[3], function (err, data) {
        if (err) {
            throw err;
        }
        
        var ftg = new FTG(data);
        
        if (ftg) {
            fs.mkdirSync(process.argv[3].replace(".", "_") + "/");
            for (var fileName in ftg.fileList) {
                console.log(fileName);
                
                var output = new Buffer(ftg.fileList[fileName].size);
                for (var currentOffset = 0; currentOffset < ftg.fileList[fileName].size; currentOffset++) {
                    output[currentOffset] = ftg.fileList[fileName].dataView.getUint8(currentOffset);
                }
                
                fs.writeFileSync(process.argv[3].replace(".", "_") + "/" + fileName, output); 
            }
        }
    });
} else if (process.argv[2] == "--txt") {
    var TXT = require("./txt.js").TXT;
    fs.readFile(process.argv[3], function (err, data) {
        if (err) {
            throw err;
        }
        
        var txt = new TXT(data.toString());
    });
}
