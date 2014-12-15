function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showTable() {
        var liste = Alloy.createController("liste");
        liste.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "bienvenue";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.bienvenue = Ti.UI.createWindow({
        backgroundColor: "black",
        id: "bienvenue"
    });
    $.__views.bienvenue && $.addTopLevelView($.__views.bienvenue);
    $.__views.bienvenue2 = Ti.UI.createImageView({
        top: 0,
        width: "100%",
        height: 200,
        id: "bienvenue2",
        image: "/images/f_logo.jpg"
    });
    $.__views.bienvenue.add($.__views.bienvenue2);
    $.__views.texte = Ti.UI.createView({
        backgroundColor: "white",
        width: "90%",
        height: 50,
        top: 290,
        left: "5%",
        padding: 20,
        textAlign: "center",
        id: "texte"
    });
    $.__views.bienvenue.add($.__views.texte);
    showTable ? $.__views.texte.addEventListener("click", showTable) : __defers["$.__views.texte!click!showTable"] = true;
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "Afficher la liste",
        id: "__alloyId0"
    });
    $.__views.texte.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.texte!click!showTable"] && $.__views.texte.addEventListener("click", showTable);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;