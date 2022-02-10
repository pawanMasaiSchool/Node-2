const path = require("path");
console.log("Directory Name    ==>",__dirname);
console.log("Filename on the global level    ==>",__filename);
console.log("Basename of the file with extension    ==>",path.basename(__filename));
console.log("Basename of the file without extension    ==>",path.basename(__filename,".js"));
console.log("Extension of the file   ==>",path.extname(__filename));
console.log(path.join("Main Folder","Level_1","Level_2","File.html"));
console.log(path.parse(__filename));
console.log(path.format({
    root: 'C:\\',
    dir: 'C:\\Users\\KK\\Desktop\\Masai\\Backend\\Completed_Assignments\\Node-2\\Node - path(3147)',
    base: 'myPathFile.js',
    ext: '.js',
    name: 'myPathFile'
}));
console.log(path.dirname(__filename))