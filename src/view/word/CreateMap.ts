class CreateMap extends egret.Sprite {

	private mk:egret.Shape;

	public constructor() {
		super();

		this.mk = new egret.Shape();
		this.mask = this.mk;
		this.addChild(this.mk);
	}

	public create(){
		var item:MapItem;
		var itemData:MapItemData;
		for(var i=0; i<10; i++){
			for(var k=0; k<10; k++){
				item = new MapItem();
				this.addChild(item);
				itemData = new MapItemData();
				itemData.row  =i;
				itemData.col = k;
				item.create(itemData);
	
			}
		}


		this.mk.graphics.clear();
		this.mk.graphics.beginFill(0x000000);
		this.mk.graphics.drawRect(0,0,this.width-50,this.height-50);
		this.mk.graphics.endFill();
		this.mk.x = 25;
		this.mk.y = 25
		
	}



}