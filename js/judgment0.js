if(navigator.userAgent.match(/iPhone|Android.+Mobile/)){
    var d=document;
    var link=d.createElement('link');
    link.href='./css/style_sp.css';
    link.rel='stylesheet';
    link.type='text/css';

    var h=d.getElementsByTagName('head')[0];
    h.appendChild(link);
}else{
    var d=document;
    var link=d.createElement('link');
    link.href='./css/style_pc.css';
    link.rel='stylesheet';
    link.type='text/css';

    var h=d.getElementsByTagName('head')[0];
    h.appendChild(link);
}