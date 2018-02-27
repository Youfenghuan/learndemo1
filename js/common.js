var pageNum = 1;
// 间隔自动滑动图片
function loopSwipePic(e){
  // $('#poster1').toggleClass("addSwipe");
  // $('#poster2').toggleClass("addSwipe");
  if($('#poster1').css("left") == "0px" || $('#poster1').css("left") == "auto"){
    $('#poster1').animate({
      left: "-100%",
    },300,function(){
    });
    $('#poster2').animate({
      left: "0px",
    },300,function(){
      $('#poster2').css({"position": "static"})
      var ele = $("#poster1").remove();
      $(".poster1_pic").append(ele);
      ele.css({"left": "100%", "position": "absolute"})
    });
  }else{
    $('#poster2').animate({
      left: "-100%",
    },300,function(){
    });
    $('#poster1').animate({
      left: "0px",
    },300,function(){
      $('#poster1').css({"position": "static"})
      var ele = $("#poster2").remove();
      $(".poster1_pic").append(ele);
      ele.css({"left": "100%", "position": "absolute"})
    });
  }
};

// 事件监听器
function eventListenerFun(id){
  //滑动处理
  var startX, startY,
      ele = document.getElementById(id);
  ele.addEventListener('touchstart',function (ev) {
      ev.preventDefault();
      startX = ev.touches[0].pageX;
      startY = ev.touches[0].pageY;
  }, false);
  ele.addEventListener('touchend',function (ev) {
      ev.preventDefault();
      var endX, endY;
      endX = ev.changedTouches[0].pageX;
      endY = ev.changedTouches[0].pageY;
      var direction = GetSlideDirection(startX, startY, endX, endY);
      switch(direction) {
          case 0:
              $(".layer").fadeOut('slow');
              break; // alert("没滑动");
          case 1:
              break; // alert("向上");
          case 2:
              break; // alert("向下");
          case 3:
              swipeDirection(ev.target, "left"); // alert("向左");
              break;
          case 4:
              swipeDirection(ev.target, "right"); // alert("向右");
              break;
          default:
      }
  }, false);
};

//返回角度
function GetSlideAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
}

//根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    var dx = endX - startX;
    var result = 0;
    //如果滑动距离太短
    if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        return result;
    }
    var angle = GetSlideAngle(dx, dy);
    if(angle >= -45 && angle < 45) {
        result = 4;
    }else if (angle >= 45 && angle < 135) {
        result = 1;
    }else if (angle >= -135 && angle < -45) {
        result = 2;
    }
    else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    }
    return result;
};
// 切换滑动图片
function swipeDirection(target, direction){
    var parent = target;
    while(parent.id !== "logoleft1" && parent.id !== "logoleft2" && parent.id !== "logoleft3" && parent.id !== "logoleft4"){
        parent = parent.parentNode;
    }
    var name = parent.id;
    if(direction === "left"){ // 向左滑动
      if("logoleft1" === name){
          $(".logoleft1").css({'-webkit-transform' : 'translate3d(-100%, 0px, 0px)' , '-webkit-transition' : '300ms'});
          $(".logoleft2").css({'-webkit-transform' : 'translate3d(0px, 0px, 0px)' , '-webkit-transition' : '300ms'});
          $(".logoleft3").css({'-webkit-transform' : 'translate3d(100%, 0px, 0px)' , '-webkit-transition' : '300ms'});
          $(".logoleft4").css({'-webkit-transform' : 'translate3d(200%, 0px, 0px)' , '-webkit-transition' : '300ms'});

      }else if("logoleft2" === name){
        $(".logoleft1").css({'-webkit-transform' : 'translate3d(-200%, 0px, 0px)' , '-webkit-transition' : '300ms'});
        $(".logoleft2").css({'-webkit-transform' : 'translate3d(-100px, 0px, 0px)' , '-webkit-transition' : '300ms'});
        $(".logoleft3").css({'-webkit-transform' : 'translate3d(0px, 0px, 0px)' , '-webkit-transition' : '300ms'});
        $(".logoleft4").css({'-webkit-transform' : 'translate3d(100%, 0px, 0px)' , '-webkit-transition' : '300ms'});

      }else if("logoleft3" === name){
        $(".logoleft1").css({'-webkit-transform' : 'translate3d(-300%, 0px, 0px)' , '-webkit-transition' : '300ms'});
        $(".logoleft2").css({'-webkit-transform' : 'translate3d(-200%, 0px, 0px)' , '-webkit-transition' : '300ms'});
        $(".logoleft3").css({'-webkit-transform' : 'translate3d(-100%, 0px, 0px)' , '-webkit-transition' : '300ms'});
        $(".logoleft4").css({'-webkit-transform' : 'translate3d(0px, 0px, 0px)' , '-webkit-transition' : '300ms'});
      }else{
      }

    }else{ // 向右滑动
      if("logoleft4" === name){
          $(".logoleft1").css({'-webkit-transform' : 'translate3d(-200%, 0px, 0px)' , '-webkit-transition' : '300ms'});
          $(".logoleft2").css({'-webkit-transform' : 'translate3d(-100p%, 0px, 0px)' , '-webkit-transition' : '300ms'});
          $(".logoleft3").css({'-webkit-transform' : 'translate3d(0px, 0px, 0px)' , '-webkit-transition' : '300ms'});
          $(".logoleft4").css({'-webkit-transform' : 'translate3d(100%, 0px, 0px)' , '-webkit-transition' : '300ms'});

      }else if("logoleft3" === name){
        $(".logoleft1").css({'-webkit-transform' : 'translate3d(-100%, 0px, 0px)' , '-webkit-transition' : '300ms'});
        $(".logoleft2").css({'-webkit-transform' : 'translate3d(0px, 0px, 0px)' , '-webkit-transition' : '300ms'});
        $(".logoleft3").css({'-webkit-transform' : 'translate3d(100%, 0px, 0px)' , '-webkit-transition' : '300ms'});
        $(".logoleft4").css({'-webkit-transform' : 'translate3d(200%, 0px, 0px)' , '-webkit-transition' : '300ms'});

      }else if("logoleft2" === name){
        $(".logoleft1").css({'-webkit-transform' : 'translate3d(0px, 0px, 0px)' , '-webkit-transition' : '300ms'});
        $(".logoleft2").css({'-webkit-transform' : 'translate3d(100%, 0px, 0px)' , '-webkit-transition' : '300ms'});
        $(".logoleft3").css({'-webkit-transform' : 'translate3d(200%, 0px, 0px)' , '-webkit-transition' : '300ms'});
        $(".logoleft4").css({'-webkit-transform' : 'translate3d(300%, 0px, 0px)' , '-webkit-transition' : '300ms'});
      }else{
      }
    }

};


// 评论的方法
var commentFactory = function(pages){
  var pages = pages || pageNum;
  pageNum++;
  var param = "/cd/suggest_list?format=json&line=20&page=" + pages +"&timestamp=" + (Math.ceil(+new Date()/1000)) + "&type=14&username=msg@sududa.com&ver=4";
  param += "&signpass=" + md5(encodeURIComponent(param + "&f9fc5e8238713340e5bd328ab61111"));
  var commentInfo = "";
  $.ajax({
     type: "GET",
     url: 'http://pc.sududa.com:1024' + param,
     dataType: "json",
     async:false,
     success: function(data){
       commentInfo = data && data.sududa && data.sududa.list;
       if(commentInfo.length === 0){
         alert("已无更多数据加载！");
       }
     },
     error: function(e){
       console.log(e)
     }
  });
  // if($("#comment-content").children().length !== 0){
  //   return;
  // }
  var htmlCode = "";
  if(commentInfo && commentInfo.l.length > 0){
    commentInfo = commentInfo.l;
    for(var i =0, iLen = commentInfo.length; i < iLen; i++){
      var values  = commentInfo[i].c.substr(1).split("]");
          name = values[0],
          content = values[1],
          pcPath = commentInfo[i].h;
      htmlCode += "<li><div><img src='" + pcPath + "'/><span class='name'>" + name + "</span><span class='zan'>" + commentInfo[i].t + "</span></div><div class='contentdiv'>" + content+ "</div></li>"
    };
  }
  $("#comment-content").append(htmlCode);
};
