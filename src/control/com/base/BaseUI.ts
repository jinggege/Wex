class BaseUI extends egret.Sprite implements IUI {

	private  _isOpen:boolean = false;
	public constructor() {
		super();
	}


	public open(){
		this._isOpen = true;

	}

	public resize(w:number,h:number){
		
	}

	public close(){
		this._isOpen = false;

	}


	public isOpen():boolean{
		return this._isOpen;
	}

	public level():number{
		return 0;
	}

	public destroy(){
		
	}


}