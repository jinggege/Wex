class MapItem extends egret.Sprite{

	public blockW:number = 50;
	public blockH:number = 50;
	//类型 0：无阻挡 1:阻挡 2:敌人
	public blockType:number = 0;

	public  row:number = 0;
	public col:number = 0;

	private tf:egret.TextField = null;
	private _mapItemData:MapItemData = null;

	public constructor() {
		super();
		this.touchChildren = false;
		this.touchEnabled = true;
	}


	public create(data:MapItemData){
		this._mapItemData = data;
		this.bgColor = data.color;

		var offX:number = data.row%2==0? 0:25;
		this.x = data.col*this.width+offX;
		this.y = data.row*(this.height/2);

		this.debug = data.isDebug;
	}


	public get itemData():MapItemData{
		return this._mapItemData;
	}



	private set label(str:string){
		this.tf.text = str;
	}


	private set bgColor(color:number){
		var w:number = this._mapItemData.itemW;
		var h:number = this._mapItemData.itemH;

		this.graphics.clear();
		this.graphics.beginFill(color);

		this.graphics.moveTo(w/2,0)
		this.graphics.lineTo(w,h/2);
		this.graphics.lineTo(w/2,h);
		this.graphics.lineTo(0,h/2);
		this.graphics.lineTo(w/2,0);
		this.graphics.endFill();
	}
	

	private set debug(isDebug:boolean){
		var w:number = this._mapItemData.itemW;
		var h:number = this._mapItemData.itemH;
		if(isDebug){
			this.tf = new egret.TextField();
			this.tf.width = w;
			this.tf.height = 30;
			this.tf.y = (h-this.tf.height)/2 + 10;
			this.tf.textAlign = 'center';
			this.tf.textColor = 0xFFFFFF;
			this.tf.size = 12;	
			this.addChild(this.tf);

			this.label = "["+this._mapItemData.row+":"+this._mapItemData.col+"]";
		}
		else{
			if(this.contains(this.tf)){
				this.removeChild(this.tf);
			}
		}

	}







}