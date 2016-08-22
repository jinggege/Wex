var UIControl = (function (_super) {
    __extends(UIControl, _super);
    function UIControl() {
        _super.call(this);
        this.uiCatch = {};
        this.uiLayer = new egret.Sprite();
    }
    var d = __define,c=UIControl,p=c.prototype;
    p.init = function (stage) {
        this._stage = stage;
        this.container = new egret.Sprite();
        stage.addChild(this.container);
        this.container.addChild(this.uiLayer);
        this.regUIs();
        this.open(UIConfig.UI_BACKGROUND);
    };
    p.regUIs = function () {
        this.uiCatch[UIConfig.UI_BACKGROUND] = new BackgroundV();
        this.uiCatch[UIConfig.UI_LOADING] = new LoadingV();
        this.uiCatch[UIConfig.UI_WORD] = new WordV();
    };
    p.getUI = function (uiKey) {
        var ui = this.uiCatch[uiKey];
        return ui;
    };
    p.open = function (uiKey) {
        var ui = this.getUI(uiKey);
        if (!ui)
            return;
        this.container.addChild(ui);
        ui.open();
        ui.resize(this._stage.stageWidth, this._stage.stageHeight);
    };
    p.close = function (uiKey) {
        var ui = this.getUI(uiKey);
        if (!ui)
            return;
        if (this.container.contains(ui)) {
            ui.close();
            this.container.removeChild(ui);
        }
    };
    p.isOpen = function () {
        return false;
    };
    d(UIControl, "it"
        ,function () {
            if (this._instance == null) {
                this._instance = new UIControl();
            }
            return this._instance;
        }
    );
    UIControl._instance = null;
    return UIControl;
}(egret.EventDispatcher));
egret.registerClass(UIControl,'UIControl');
//# sourceMappingURL=UIControl.js.map