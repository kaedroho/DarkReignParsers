function TXT(text) {
    function TXTNode(name, parameters, parent) {
        this.name = name;
        this.parent = parent;
        this.parameters = parameters;
        this.children = [];
    }
    
    this.parent = null;
    this.children = [];
    
    // Move braces to their own lines
    text = text.replace(/[{}]/g, "\n$&\n");
    
    // Remove comments
    text = text.replace(/;.*$/gm, "");
    
    // Remove whitespace and extra newlines (except when in brackets)
    text = text.replace(/[\s\t\n]+(?![^()]*\))/g, "\n");
    
    // Remove leading newlines
    text = text.replace(/^\n+/, "");
    
    // Remove empty brackets
    text = text.replace(/\(\s*\)$/gm, "");
    
    // Move opening braces to line above
    text = text.replace(/\n+(?={)/g, "");
    
    // Split into lines
    this.lines = text.split("\n");
    
    // Loop through lines
    var currentNode = this;
    for (var lineID in this.lines) {
        var line = this.lines[lineID];
        
        // Is this a close brace
        if (line.charAt(0) == "}") {
            // Jump to parent
            if (currentNode.parent != null) {
                currentNode = currentNode.parent;
            }
        } else {
            // Check if this line has a name
            var nameMatch = line.match(/^.*?(?=\(|\n|{|})/);
            var name = (nameMatch != null) ? nameMatch[0] : null;
            
            // Check if this line has parameters
            var parametersMatch = line.match(/\(.*\)/);
            var parameters = null;
            if (parametersMatch != null) {
                parameters = parametersMatch[0];
                parameters = parameters.substr(1, parameters.length - 2);
            }
            
            // Create node
            if (name != null || parameters != null) {
                // Create the new node
                var newNode = new TXTNode(name, (parameters != null) ? parameters.split(" ") : null, currentNode);
                
                // Add as a child to current node
                currentNode.children.push(newNode);
                
                // Check if this node has children
                if (/{$/.test(line)) {
                    currentNode = newNode;
                }
            }
        }
    }
}

if (typeof exports != "undefined") {
    exports.TXT = TXT;
}
