class WordV  extends BaseUI{

	private layerMap:egret.Sprite = null;

	private cm:CreatMap = null;



	public constructor() {
		super();

		this.layerMap = new egret.Sprite();
		this.addChild(this.layerMap);
		this.cm = new CreatMap();
		this.layerMap.addChild(this.cm);

		this.touchEnabled = true;
		this.cm.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tuchHandler,this);
	}

	public open(){
		super.open();
		this.cm.create();
	}


	private tuchHandler(event:egret.TouchEvent){
		var b:Block = event.target as Block;
		if(b == null) return;
		console.log("row=",b.row," col=",b.col);
	}






	public close(){
		super.close();
	}



}