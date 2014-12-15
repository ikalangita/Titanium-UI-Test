function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function aClick() {
        var animation = require("alloy/animation");
        animation.shake($.apropos);
    }
    function bClick() {
        var win = Alloy.createController("bienvenue").getView();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "black",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.actor = Ti.UI.createImageView({
        backgroundColor: "black",
        top: 0,
        width: "100%",
        height: 200,
        id: "actor",
        image: "/images/f_logo.jpg"
    });
    $.__views.index.add($.__views.actor);
    $.__views.bienvenue = Ti.UI.createLabel({
        backgroundColor: "white",
        width: "90%",
        height: 50,
        top: 220,
        left: "5%",
        padding: 20,
        textAlign: "center",
        text: "Bienvenue",
        id: "bienvenue"
    });
    $.__views.index.add($.__views.bienvenue);
    bClick ? $.__views.bienvenue.addEventListener("click", bClick) : __defers["$.__views.bienvenue!click!bClick"] = true;
    $.__views.apropos = Ti.UI.createLabel({
        backgroundColor: "white",
        width: "90%",
        height: 50,
        top: 290,
        left: "5%",
        padding: 20,
        textAlign: "center",
        text: "A propos",
        id: "apropos"
    });
    $.__views.index.add($.__views.apropos);
    aClick ? $.__views.apropos.addEventListener("click", aClick) : __defers["$.__views.apropos!click!aClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.bienvenue!click!bClick"] && $.__views.bienvenue.addEventListener("click", bClick);
    __defers["$.__views.apropos!click!aClick"] && $.__views.apropos.addEventListener("click", aClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;