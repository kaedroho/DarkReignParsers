function FTG(buffer) {
    function File(name, size, dataView) {
        this.name = name;
        this.size = size;
        this.dataView = dataView;
    }
    
    this.buffer = buffer;
    this.fileList = null;
    this.isValid = false;
    
    // Get dataview
    var dataView = new DataView(this.buffer);
    
    // Check magic number
    if (dataView.getUint32(0, true) == 0x47544F42) {
        this.isValid = true;
    } else {
        this.isValid = false;
        return;
    }
    
    // Find index
    var indexOffset = dataView.getUint32(4, true);
    
    // File count
    this.fileCount = dataView.getUint32(8, true);
    
    // Prepare file list array
    this.fileList = {};
    
    // Loop through files
    for (var currentFile = 0; currentFile < this.fileCount; currentFile++) {
        // Calculate offset
        var currentOffset = indexOffset + 36 * currentFile;
        
        // Read filename
        var newFileName = "";
        for (var currentCharID = 0; currentCharID < 28; currentCharID++) {
            newFileName += String.fromCharCode(dataView.getUint8(currentOffset));
            currentOffset++;
        }
        
        // Read offset and size
        var newFileOffset = dataView.getUint32(currentOffset, true);
        var newFileSize = dataView.getUint32(currentOffset + 4, true);
        
        // Create a data view
        var newFileDataView = new DataView(this.buffer, newFileOffset, newFileSize);
        
        // Add file to file list
        this.fileList[newFileName] = new File(newFileName, newFileSize, newFileDataView);
    }
}

if (typeof exports != "undefined") {
    exports.FTG = FTG;
}
