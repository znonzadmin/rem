/**
 * rem.js封装一个小模块
 * rem.js用于动态计算页面的字号大小使用rem单位来控制样式的展示
 */
   (function(window,document){
    var REM = function(){
        /*getBoundingClientRect()--用获取坐标的点数*/
        var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
        var _html = document.getElementsByTagName('html')[0];
        if (view_width > 640){
            _html.style.fontSize = 640 / 16 + 'px';
        }else{
            _html.style.fontSize = view_width / 16 + 'px';
        }
        return _html.style.fontSize;
      }
      window.onresize = REM;
    if(typeof module != 'undefined' && module.exports) {
     return module.exports = REM;
    }else if(typeof define == 'function' && define.amd) {
     return  define( function () { return REM; } );
    }else{
     return  window.REM = REM;
    }
  })(window,document);
  /**
   *
   * 调用 REM()的方式即可
   */
