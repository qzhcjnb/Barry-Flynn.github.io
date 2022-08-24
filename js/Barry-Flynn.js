// 封装通知函数
function notify(){
  // 先检查浏览器是否支持
  if (!('Notification' in window)) {
      alert('你的浏览器不支持Notification')
  }
  // 检查是否拥有通知权限；有就通知，没有就请求；
  else if (Notification.permission == 'granted') {
    var n = new Notification('Meta-Code周年纪【点击前往】', {
        body: '百里飞洋的小世界一周年啦！',
        icon: "http://blog.meta-code.top/img/friends/Barry-Flynn.jpg",
        image:'https://s1.ax1x.com/2022/08/24/vgKEtK.png',
        requireInteraction: true
    });

    // onshow（在消息框显示时触发）
    // 可以做一些数据记录及定时关闭消息框等
    n.onshow = function() {
        // console.log('显示消息框');
        //15秒后关闭消息框
        setTimeout(function() {
          n.close();
      }, 15000);
    };

    //onclick（消息框被点击时被调用）
    //可以打开相关的视图，同时关闭该消息框等操作
    n.onclick = function() {
        // console.log('消息框被点击');
        // 打开相关的视图
        window.open('http://blog.meta-code.top/2022/08/25/2022-89/')
        // 关闭消息框
        n.close();
    };

    //onerror（当有错误发生时被调用）
    //如果没有granted授权，创建Notification对象实例时，也会执行onerror函数
    n.onerror = function() {
        // console.log('消息框错误');
        // 做些其他的事
    };

    //onclose（消息框关闭时会被调用）
    n.onclose = function() {
        // console.log('关闭消息框');
        //做些其他的事
    };

  }else if (Notification.permission !== 'denied'){
    Notification.requestPermission().then(function(result){
      if(result=='granted'){
        // 回调自身
        notify()
      }
    })
  }
}
// 调用通知函数
notify()
