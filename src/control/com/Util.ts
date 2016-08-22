class Util {

	private static  _instance:Util = null;
	public constructor() {
	}

	public log(...args){
		console.log(args);
	}


	public static get it():Util{
		this._instance = this._instance==null? new Util():this._instance;
		return this._instance;
	}





}