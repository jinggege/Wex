class ResControl extends egret.EventDispatcher {

	private static _instance:ResControl = null;

	public constructor() {
		super();
	}


	public startLoad(){

		RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
	}



	/** 获取纹理*/
	public getTextureByName(resName:string):egret.Texture{
		return RES.getRes(resName);
	}

	public getBitmapByName(resName:string):egret.Bitmap{
		var bmp:egret.Bitmap = new egret.Bitmap();
		bmp.texture = this.getTextureByName(resName);
		return bmp;
	}




	private onConfigComplete(event:RES.ResourceEvent){
		RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);

		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");

	}

	 private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
			var eType:string = EventControl.E_LOAD_PRE_END;
			EventControl.it.notify(new egret.Event(eType));

        }
    }

	/**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            var e:egret.Event = new egret.Event(EventControl.E_LOAD_PRE_PROGRESS);
            e.data = {curr:event.itemsLoaded,total:event.itemsTotal}
            EventControl.it.notify(e);

        }
    }





	public static get it():ResControl{
		if(this._instance==null){
			this._instance = new ResControl();
		}
		return this._instance;
	}







}