class WordV  extends BaseUI{

	private layerMap:egret.Sprite = null;

	private cm:CreateMap = null;


	public constructor() {
		super();

		this.layerMap = new egret.Sprite();
		this.addChild(this.layerMap);
		this.cm = new CreateMap();
		this.layerMap.addChild(this.cm);

		this.touchEnabled = true;
		this.cm.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tuchHandler,this);
	}

	public open(){
		super.open();
		this.cm.create();
	}

	private tuchHandler(event:egret.TouchEvent){
		var item:MapItem = event.target as MapItem;
		if(item == null) return;
		Util.it.log("[mapitemdata=]",item.itemData);

	}



	public close(){
		super.close();
	}



}