class Block extends egret.Sprite{

	public blockW:number = 50;
	public blockH:number = 50;
	//类型 0：无阻挡 1:阻挡 2:敌人
	public blockType:number = 0;

	private tf:egret.TextField = null;

	public row:number = 0;
	public col:number = 0;

	public constructor() {
		super();
		this.touchChildren = false;
		this.touchEnabled = true;

		this.tf = new egret.TextField();
		this.tf.width = this.blockW;
		this.tf.height = 30;
		this.tf.y = (this.blockH-this.tf.height)/2;
		this.tf.textAlign = 'center';
		this.tf.textColor = 0xFFFFFF;
		this.addChild(this.tf);
		this.tf.size = 12;	
	}


	private tuchHandler(event:egret.TouchEvent){
		console.log(event);
	}


	public set label(str:string){
		this.tf.text = str;
	}


	public set bgColor(color:number){
		this.graphics.clear();
		this.graphics.beginFill(color);

		this.graphics.moveTo(this.blockW/2,0)
		this.graphics.lineTo(this.blockW,this.blockH/2);
		this.graphics.lineTo(this.blockW/2,this.blockH);
		this.graphics.lineTo(0,this.blockH/2);
		this.graphics.lineTo(this.blockW/2,0);
		this.graphics.endFill();

	}








}