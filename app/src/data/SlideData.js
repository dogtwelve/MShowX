define(function(require, exports, module) {
    var SlideData = {
        queryDataUrl:'',
        defaultImage: './assets/loading_img.gif'
    };

    SlideData.getUrl = function() {
        return SlideData.queryDataUrl;
    };

    SlideData.parse = function(data) {
        var urls = [];
        data = JSON.parse(data);
        var entries = data.feed.entry;
        for (var i = 0; i < entries.length; i++) {
            var media = entries[i].media$group;
            urls.push(media.media$content[0].url);
        }
        return urls;
    };

    SlideData.getRawData = function() {
      var urls = [
        './img/domokun.jpg',
        './img/batcat.png',
        './img/very_large_image.jpg',
      ];
      return urls;
    };

    module.exports = SlideData;
});
