define(function(require, exports, module) {
    //var Engine = require('famous/core/Engine');
    //var Utility = require('famous/utilities/Utility');
    //
    //var AppView = require('views/AppView');
    //var SlideData = require('data/SlideData');
    //
    //var mainContext = Engine.createContext();
    //mainContext.setPerspective(1000);
    //
    ////Utility.loadURL(SlideData.getUrl(), initApp);
    //
    //initApp(SlideData.getRawData());
    //
    //function initApp(data) {
    //    //data = SlideData.parse(data);
    //
    //    var appView = new AppView({ data : data });
    //
    //    mainContext.add(appView);
    //}

    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');

// create the main context
    var mainContext = Engine.createContext();

// your app here
    var demo = new ImageSurface({
        size: [635, 915],
        //content: 'http://code.famo.us/assets/famous_logo.png',
        content:'./assets/demo2.jpg'
        //classes: ['double-sided']
    });

    var initialTime = Date.now();
    var centerSpinModifier = new Modifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5],
        //transform : function () {
        //    return Transform.rotateY(.002 * (Date.now() - initialTime));
        //}
    });

    mainContext.add(centerSpinModifier).add(demo);
});
