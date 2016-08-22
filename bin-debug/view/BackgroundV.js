var BackgroundV = (function (_super) {
    __extends(BackgroundV, _super);
    function BackgroundV() {
        _super.call(this);
    }
    var d = __define,c=BackgroundV,p=c.prototype;
    p.open = function () {
        _super.prototype.open.call(this);
    };
    p.resize = function (w, h) {
        _super.prototype.resize.call(this, w, h);
        this.graphics.clear();
        this.graphics.beginFill(0x000000, 0.5);
        this.graphics.drawRect(0, 0, w, h);
        this.graphics.endFill();
    };
    p.close = function () {
        _super.prototype.close.call(this);
    };
    p.level = function () {
        return 1;
    };
    p.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return BackgroundV;
}(BaseUI));
egret.registerClass(BackgroundV,'BackgroundV');
//# sourceMappingURL=BackgroundV.js.map