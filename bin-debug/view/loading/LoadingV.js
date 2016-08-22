var LoadingV = (function (_super) {
    __extends(LoadingV, _super);
    function LoadingV() {
        _super.call(this);
        this._tf = null;
        this._tf = new egret.TextField();
        this.addChild(this._tf);
        this._tf.width = 300;
        this._tf.height = 30;
        this._tf.textAlign = "center";
    }
    var d = __define,c=LoadingV,p=c.prototype;
    p.open = function () {
        _super.prototype.open.call(this);
        EventControl.it.on(EventControl.E_LOAD_PRE_PROGRESS, this.showProgress, this);
    };
    p.close = function () {
        _super.prototype.close.call(this);
        EventControl.it.remove(EventControl.E_LOAD_PRE_PROGRESS, this.showProgress, this);
    };
    p.resize = function (w, h) {
        _super.prototype.resize.call(this, w, h);
        this._tf.x = (w - this._tf.width) / 2;
        this._tf.y = (h - this._tf.height) / 2;
    };
    p.showProgress = function (event) {
        var data = event.data;
        this._tf.text = data.curr + "/" + data.total;
    };
    return LoadingV;
}(BaseUI));
egret.registerClass(LoadingV,'LoadingV');
//# sourceMappingURL=LoadingV.js.map