class UIControl extends egret.EventDispatcher {

	private static _instance:UIControl = null;

	private  uiCatch = {};

	private uiLayer:egret.Sprite = new egret.Sprite();
	private container:egret.Sprite;
	private _stage:egret.Stage;

	
	public constructor() {
		super();
	}


	public init(stage:egret.Stage){
		this._stage = stage;
		this.container = new egret.Sprite();
		stage.addChild(this.container);
		this.container.addChild(this.uiLayer);

		this.regUIs();

		this.open(UIConfig.UI_BACKGROUND);
	}

	private regUIs():void{
		this.uiCatch[UIConfig.UI_BACKGROUND] = new BackgroundV();
		this.uiCatch[UIConfig.UI_LOADING] = new LoadingV();
		this.uiCatch[UIConfig.UI_WORD] = new WordV();
	}


	public getUI(uiKey:string):BaseUI{
		var ui:BaseUI = this.uiCatch[uiKey];
		return ui;
	}
	

	public open(uiKey:string){
		var ui = this.getUI(uiKey);
		if(!ui) return;

		this.container.addChild(ui);
		ui.open();
		ui.resize(this._stage.stageWidth,this._stage.stageHeight);
	}

	public close(uiKey:string){
		var ui = this.getUI(uiKey);
		if(!ui) return;
		if(this.container.contains(ui)){
			ui.close();
			this.container.removeChild(ui);
		}
	}

	public isOpen():Boolean{
		return false;
	}


	public static get it():UIControl{
		if(this._instance == null){
			this._instance = new UIControl();
		}

		return this._instance;
	}




}