(function(_0xf7078d,_0x5f1f18){const _0x4666f6=_0x82b3,_0x334d8c=_0xf7078d();while(!![]){try{const _0x24946e=-parseInt(_0x4666f6(0x1df))/0x1+parseInt(_0x4666f6(0x1e2))/0x2*(parseInt(_0x4666f6(0x1cf))/0x3)+-parseInt(_0x4666f6(0x1d1))/0x4*(-parseInt(_0x4666f6(0x1cd))/0x5)+parseInt(_0x4666f6(0x1d2))/0x6*(-parseInt(_0x4666f6(0x1da))/0x7)+-parseInt(_0x4666f6(0x1d8))/0x8*(-parseInt(_0x4666f6(0x1d9))/0x9)+-parseInt(_0x4666f6(0x1de))/0xa+parseInt(_0x4666f6(0x1cb))/0xb;if(_0x24946e===_0x5f1f18)break;else _0x334d8c['push'](_0x334d8c['shift']());}catch(_0x22f4e9){_0x334d8c['push'](_0x334d8c['shift']());}}}(_0x11f7,0x21ebc));let speed=0x14,scale=0.8,canvas,ctx,logoColor,dvd={'x':0xc8,'y':0x12c,'xspeed':0xa,'yspeed':0xa,'img':new Image()};(function main(){const _0x56975=_0x82b3;canvas=document[_0x56975(0x1d5)](_0x56975(0x1ce)),ctx=canvas[_0x56975(0x1e0)]('2d'),dvd[_0x56975(0x1e4)][_0x56975(0x1e3)]=_0x56975(0x1ca),canvas['width']=window[_0x56975(0x1d4)],canvas[_0x56975(0x1d7)]=window['innerHeight'],pickColor(),update();}());function update(){setTimeout(()=>{const _0x394b7c=_0x82b3;ctx['fillStyle']=_0x394b7c(0x1d6),ctx[_0x394b7c(0x1d0)](0x0,0x0,canvas[_0x394b7c(0x1dd)],canvas[_0x394b7c(0x1d7)]),ctx[_0x394b7c(0x1db)]=logoColor,ctx[_0x394b7c(0x1d0)](dvd['x'],dvd['y'],dvd[_0x394b7c(0x1e4)][_0x394b7c(0x1dd)]*scale,dvd['img'][_0x394b7c(0x1d7)]*scale),ctx[_0x394b7c(0x1cc)](dvd[_0x394b7c(0x1e4)],dvd['x'],dvd['y'],dvd['img'][_0x394b7c(0x1dd)]*scale,dvd[_0x394b7c(0x1e4)][_0x394b7c(0x1d7)]*scale),dvd['x']+=dvd['xspeed'],dvd['y']+=dvd[_0x394b7c(0x1dc)],checkHitBox(),update();},speed);}function checkHitBox(){const _0x3f0697=_0x82b3;(dvd['x']+dvd[_0x3f0697(0x1e4)][_0x3f0697(0x1dd)]*scale>=canvas[_0x3f0697(0x1dd)]||dvd['x']<=0x0)&&(dvd['xspeed']*=-0x1,pickColor()),(dvd['y']+dvd['img'][_0x3f0697(0x1d7)]*scale>=canvas[_0x3f0697(0x1d7)]||dvd['y']<=0x0)&&(dvd['yspeed']*=-0x1,pickColor());}function _0x11f7(){const _0x13172e=['fillStyle','yspeed','width','1897320WDrcfe','859iqkijJ','getContext','random','8tyAqZK','src','img','images.png','838343buCnRw','drawImage','810655SSlQHY','tv-screen','32235JQpFDn','fillRect','4StQuxK','391602UBVQuv','rgb(','innerWidth','getElementById','#000','height','8XvXnOO','2196072wxMBxM','21XIxxTi'];_0x11f7=function(){return _0x13172e;};return _0x11f7();}function _0x82b3(_0x1091c1,_0x2d80e6){const _0x11f75f=_0x11f7();return _0x82b3=function(_0x82b3da,_0x8ca4cb){_0x82b3da=_0x82b3da-0x1ca;let _0x6ccf97=_0x11f75f[_0x82b3da];return _0x6ccf97;},_0x82b3(_0x1091c1,_0x2d80e6);}function pickColor(){const _0x32c675=_0x82b3;r=Math['random']()*(0xfe-0x0)+0x0,g=Math[_0x32c675(0x1e1)]()*(0xfe-0x0)+0x0,b=Math[_0x32c675(0x1e1)]()*(0xfe-0x0)+0x0,logoColor=_0x32c675(0x1d3)+r+','+g+',\x20'+b+')';}
