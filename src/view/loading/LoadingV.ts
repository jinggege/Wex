class LoadingV extends BaseUI {
	private _tf:egret.TextField = null;
	public constructor() {
		super();

		this._tf = new egret.TextField();
		this.addChild(this._tf);
		this._tf.width = 300;
        this._tf.height = 30;
        this._tf.textAlign = "center";
	}


	public open(){
		super.open();
		EventControl.it.on(EventControl.E_LOAD_PRE_PROGRESS,this.showProgress,this);
	}

	public close(){
		super.close();
		EventControl.it.remove(EventControl.E_LOAD_PRE_PROGRESS,this.showProgress,this);
	}

	public resize(w:number,h:number){
		super.resize(w,h);
		this._tf.x = (w-this._tf.width)/2;
		this._tf.y = (h-this._tf.height)/2;
	}


	private showProgress(event:egret.Event){
		var data = event.data;
		this._tf.text = data.curr+"/"+data.total;

	}

	





}