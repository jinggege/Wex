var WordV = (function (_super) {
    __extends(WordV, _super);
    function WordV() {
        _super.call(this);
        this.layerMap = null;
        this.cm = null;
        this.layerMap = new egret.Sprite();
        this.addChild(this.layerMap);
        this.cm = new CreateMap();
        this.layerMap.addChild(this.cm);
        this.touchEnabled = true;
        this.cm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tuchHandler, this);
    }
    var d = __define,c=WordV,p=c.prototype;
    p.open = function () {
        _super.prototype.open.call(this);
        this.cm.create();
    };
    p.tuchHandler = function (event) {
        var item = event.target;
        if (item == null)
            return;
        Util.it.log("[mapitemdata=]", item.itemData);
    };
    p.close = function () {
        _super.prototype.close.call(this);
    };
    return WordV;
}(BaseUI));
egret.registerClass(WordV,'WordV');
//# sourceMappingURL=WordV.js.map