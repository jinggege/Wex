class BackgroundV extends BaseUI {

	public constructor() {
		super();
	}



	public open(){
		super.open();
	}

	public resize(w:number,h:number){
		super.resize(w,h);
		this.graphics.clear();
		this.graphics.beginFill(0x000000,0.5);
		this.graphics.drawRect(0,0,w,h);
		this.graphics.endFill();
	}


	public close(){
		super.close();
	}

	public level():number{
		return 1;
	}


	public destroy(){
		super.destroy();
	}






}