var ResControl = (function (_super) {
    __extends(ResControl, _super);
    function ResControl() {
        _super.call(this);
    }
    var d = __define,c=ResControl,p=c.prototype;
    p.startLoad = function () {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /** 获取纹理*/
    p.getTextureByName = function (resName) {
        return RES.getRes(resName);
    };
    p.getBitmapByName = function (resName) {
        var bmp = new egret.Bitmap();
        bmp.texture = this.getTextureByName(resName);
        return bmp;
    };
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            var eType = EventControl.E_LOAD_PRE_END;
            EventControl.it.notify(new egret.Event(eType));
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            var e = new egret.Event(EventControl.E_LOAD_PRE_PROGRESS);
            e.data = { curr: event.itemsLoaded, total: event.itemsTotal };
            EventControl.it.notify(e);
        }
    };
    d(ResControl, "it"
        ,function () {
            if (this._instance == null) {
                this._instance = new ResControl();
            }
            return this._instance;
        }
    );
    ResControl._instance = null;
    return ResControl;
}(egret.EventDispatcher));
egret.registerClass(ResControl,'ResControl');
