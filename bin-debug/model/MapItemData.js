var MapItemData = (function () {
    function MapItemData() {
        this.itemW = 50;
        this.itemH = 50;
        //所在行, 列
        this.row = 0;
        this.col = 0;
        //阻挡类型 0:无阻挡   1：阻挡  ...
        this.typs = 0;
        this.isDebug = true;
        this.color = 0x000000;
    }
    var d = __define,c=MapItemData,p=c.prototype;
    return MapItemData;
}());
egret.registerClass(MapItemData,'MapItemData');
//# sourceMappingURL=MapItemData.js.map