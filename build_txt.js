function BuildTXT(txt) {
    this.txt = txt;
    
    function Building(ident) {
        this.ident = ident;
    }
    
    this.buildings = [];
    
    for (var node in this.txt.children) {
        var nodeObj = this.txt.children[node];
        
        // Make sure that this is a valid building
        if (nodeObj.name != "DefineBuildingType" || nodeObj.parameters.length != 1) {
            continue;
        }
        
        // Create new building object
        var newBuilding = new Building(nodeObj.parameters[0]);
        
        // Parse the building
        this.parseBuilding(nodeObj, newBuilding);
        
        // Add the building to the building list
        this.buildings.push(newBuilding);
    }
}

BuildTXT.prototype.parseBuilding = function(node, building) {
    for (var child in node.children) {
        var childObj = node.children[child];
        var name = childObj.name;
        if (name == "SetBuildingImages") {
            building.buildingImages = childObj.parameters;
        } else if (name == "SetDescription") {
            if (childObj.parameters.length == 1) {
                building.description = childObj.parameters[0];
            }
        } else if (name == "SetRequirements") {
            
        } else if (name == "SetEfficiencyResource") {
            
        } else if (name == "SetSpyType") {
            if (childObj.parameters.length == 1) {
                building.spyType = childObj.parameters[0];
            }
        } else if (name == "SetEquivalentBuilding") {
            if (childObj.parameters.length == 1) {
                building.equivilantBuilding = childObj.parameters[0];
            }
        } else if (name == "NeedResource") {
            
        } else if (name == "SetSide") {
            if (childObj.parameters.length == 1) {
                building.side = parseInt(childObj.parameters[0]);
            }
        } else if (name == "SetBay") {
            
        } else if (name == "SetRepairCost") {
            
        } else if (name == "SetHitpoints") {
            
        } else if (name == "SetSeeingRange") {
            if (childObj.parameters.length == 1) {
                building.seeingRange = parseInt(childObj.parameters[0]);
            }
        } else if (name == "SetSeeingHeight") {
            if (childObj.parameters.length == 1) {
                building.seeingHeight = parseInt(childObj.parameters[0]);
            }
        } else if (name == "SetCost") {
            
        } else if (name == "SetSell") {
            
        } else if (name == "CanMake") {
            
        } else if (name == "MakesCrater") {
            if (childObj.parameters.length == 1) {
                building.makesCrater = parseInt(childObj.parameters[0]);
            }
        } else if (name == "GivesMiniMap") {
            
        } else if (name == "SetShadowImage") {
            if (childObj.parameters.length == 1) {
                building.shadowImage = childObj.parameters[0];
            }
        } else if (name == "SetTransportUnit") {
            
        } else if (name == "SetVulnerability") {
            
        } else if (name == "SetHealthExplosion") {
            
        } else if (name == "SetHealthExplosion") {
            
        } else if (name == "SetHealthExplosion") {
            
        } else if (name == "SetHealthExplosion") {
            
        } else if (name == "SetRepairActionIndicator") {
            if (childObj.parameters.length == 1) {
                building.repairActionIndicator = childObj.parameters[0];
            }
        } else if (name == "SetDeathSfx") {
            if (childObj.parameters.length == 1) {
                building.deathSfx = childObj.parameters[0];
            }
        } else if (name == "IsUpgradeOf") {
            if (childObj.parameters.length == 1) {
                building.upgradeOf = childObj.parameters[0];
            }
        } else if (name == "IsDecoyOf") {
            if (childObj.parameters.length == 1) {
                building.decoyOf = childObj.parameters[0];
            }
        } else if (name == "SetResource") {
            
        } else if (name == "SetResourceSale") {
            
        } else if (name == "SetResourceSaleAnimation") {
            if (childObj.parameters.length == 1) {
                building.resourceSaleAnimation = parseInt(childObj.parameters[0]);
            }
        } else if (name == "AssociatedUnit") {
            
        } else if (name == "SupplyResource") {
            
        } else if (name == "SetIdleAnimation") {
            if (childObj.parameters.length == 1) {
                building.idleAnimation = parseInt(childObj.parameters[0]);
            }
        } else if (name == "ActivePart") {
            
        } else if (name == "SetRepairAnimation") {
            if (childObj.parameters.length == 1) {
                building.repairAnimation = parseInt(childObj.parameters[0]);
            }
        } else if (name == "SetRooms") {
            
        } else if (name == "SetBoardAnimation") {
            if (childObj.parameters.length == 1) {
                building.boardAnimation = parseInt(childObj.parameters[0]);
            }
        } else if (name == "SetRearmAnimation") {
            if (childObj.parameters.length == 1) {
                building.rearmAnimation = parseInt(childObj.parameters[0]);
            }
        } else if (name == "IsTeleport") {
            
        } else if (name == "SetCPUGainPercent") {
            if (childObj.parameters.length == 1) {
                building.cpuGainPercent = parseInt(childObj.parameters[0]);
            }
        } else {
            console.log(name);
        }
    }
};
