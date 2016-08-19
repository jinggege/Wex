class EventControl extends egret.EventDispatcher {

	//预加载完成
	public static E_LOAD_PRE_END:string 	 = "E_LOAD_PRE_END";
	//预加载错误
	public static E_LOAD_PRE_ERROR:string    = "E_LOAD_PRE_ERROR";
	//预加载进度
	public static E_LOAD_PRE_PROGRESS:string = "E_LOAD_PRE_PROGRESS";


	private static _instnce:EventControl = null;

	public constructor() {
		super();
	}


	public notify(event:egret.Event){
		this.dispatchEvent(event);
	}

	public on(type,callback,pClass){
		this.addEventListener(type,callback,pClass);
	}

	public remove(type,callback,pClass){
		this.removeEventListener(type,callback,pClass);
	}


	public static get  it():EventControl{
		if(this._instnce == null){
			this._instnce = new EventControl();
		}

		return this._instnce;
	}



}