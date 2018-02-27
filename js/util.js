

  var execuDownLoad = function(){
    var system = {
      win: false,
      mac: false,
      xll: false,
      ipad:false
    };
    //检测平台
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false;

    var browser = {
      'versions': function() {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息
          trident: u.indexOf('Trident') > -1, //IE内核
          presto: u.indexOf('Presto') > -1, //opera内核
          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
          iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, //是否iPad
          webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
      }()
      , 'language': (navigator.browserLanguage || navigator.language).toLowerCase()
    };

    var down = document.getElementById('footer-downid');
    var uri = formatUrl(window.location.href);
    // console.log(uri);
    if (system.win || system.mac || system.xll || system.ipad) { //pc
        alert('必须使用苹果或安卓手机下载');
    } else {
      if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
        if (!isWeiXin()) {
          down.setAttribute('href','http://itunes.apple.com/cn/app/id948622082');
        }else{//微信
          down.setAttribute('href','http://a.app.qq.com/o/simple.jsp?pkgname=com.chuangdun.kehuda');
        }
      }else if (browser.versions.android) {
        if (!isWeiXin()) {
          down.setAttribute('href','http://apk.kehuda.com/kehuda2.68.apk');
        }else{//微信
           down.setAttribute('href','http://a.app.qq.com/o/simple.jsp?pkgname=com.chuangdun.kehuda');
        }
      }
   }

 };

  var isWeiXin = function(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
  };
  var formatUrl = function(url){
    var reg=/(?:[?&]+)([^&]+)=([^&]+)/g;
    var data={};
    function fn(str,pro,value){
        data[decodeURIComponent(pro)]=decodeURIComponent(value);
    }
    url.replace(reg,fn);
    return data;
  };
