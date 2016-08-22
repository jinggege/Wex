var BaseUI = (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI() {
        _super.call(this);
        this._isOpen = false;
    }
    var d = __define,c=BaseUI,p=c.prototype;
    p.open = function () {
        this._isOpen = true;
    };
    p.resize = function (w, h) {
    };
    p.close = function () {
        this._isOpen = false;
    };
    p.isOpen = function () {
        return this._isOpen;
    };
    p.level = function () {
        return 0;
    };
    p.destroy = function () {
    };
    return BaseUI;
}(egret.Sprite));
egret.registerClass(BaseUI,'BaseUI',["IUI"]);
//# sourceMappingURL=BaseUI.js.map