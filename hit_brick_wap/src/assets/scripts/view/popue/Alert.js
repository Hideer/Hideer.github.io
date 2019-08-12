var Alert={_alert:null,_detailLabel:null,_isButton:!1,_cancelButton:null,_enterButton:null,_enterCallBack:null,_animSpeed:.3,show:function(t,e,n,l,c){var a=this;void 0==Alert._alert&&(Alert._animSpeed=c||Alert._animSpeed,Alert._isButton=e||Alert._isButton,cc.loader.loadRes("prefabs/Alert",cc.Prefab,function(e,r){if(e)cc.error(e);else{var o=cc.instantiate(r);Alert._alert=o;var i=cc.callFunc(a.onFadeOutFinish,a),u=cc.callFunc(a.onFadeInFinish,a);a.actionFadeIn=cc.sequence(cc.spawn(cc.fadeTo(Alert._animSpeed,255),cc.scaleTo(Alert._animSpeed,1)),u),a.actionFadeOut=cc.sequence(cc.spawn(cc.fadeTo(Alert._animSpeed,0),cc.scaleTo(Alert._animSpeed,2)),i),Alert._detailLabel=cc.find("container/text",o).getComponent(cc.Label),Alert._cancelButton=cc.find("container/cancel",o),Alert._enterButton=cc.find("container/confirm",o),Alert._enterButton.on("click",a.onButtonClicked,a),Alert._cancelButton.on("click",a.onButtonClicked,a),Alert._alert.parent=cc.find("Canvas"),Alert._isButton?a.startFadeIn():(a.startFadeIn(),setTimeout(()=>{a.startFadeOut()},2e3)),a.configAlert(t,n,l,c)}}),a.configAlert=function(t,e,n){Alert._enterCallBack=e,Alert._detailLabel.string=t,Alert._isButton?n||void 0==n?Alert._cancelButton.active=!0:(Alert._cancelButton.active=!1,Alert._enterButton.x=0):(Alert._cancelButton.active=!1,Alert._enterButton.active=!1)},a.startFadeIn=function(){Alert._alert.position=cc.v2(0,0),Alert._alert.setScale(2),Alert._alert.opacity=0,Alert._alert.runAction(a.actionFadeIn)},a.startFadeOut=function(){Alert._alert.runAction(a.actionFadeOut)},a.onFadeInFinish=function(){},a.onFadeOutFinish=function(){a.onDestory()},a.onButtonClicked=function(t){"confirm"==t.target.name&&a._enterCallBack&&a._enterCallBack(),a.startFadeOut()},a.onDestory=function(){Alert._alert.destroy(),Alert._enterCallBack=null,Alert._alert=null,Alert._detailLabel=null,Alert._cancelButton=null,Alert._enterButton=null,Alert._animSpeed=.3})}};window.Alert=Alert;