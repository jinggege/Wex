var MapItem = (function (_super) {
    __extends(MapItem, _super);
    function MapItem() {
        _super.call(this);
        this.blockW = 50;
        this.blockH = 50;
        //类型 0：无阻挡 1:阻挡 2:敌人
        this.blockType = 0;
        this.row = 0;
        this.col = 0;
        this.tf = null;
        this._mapItemData = null;
        this.touchChildren = false;
        this.touchEnabled = true;
    }
    var d = __define,c=MapItem,p=c.prototype;
    p.create = function (data) {
        this._mapItemData = data;
        this.bgColor = data.color;
        var offX = data.row % 2 == 0 ? 0 : 25;
        this.x = data.col * this.width + offX;
        this.y = data.row * (this.height / 2);
        this.debug = data.isDebug;
    };
    d(p, "itemData"
        ,function () {
            return this._mapItemData;
        }
    );
    d(p, "label",undefined
        ,function (str) {
            this.tf.text = str;
        }
    );
    d(p, "bgColor",undefined
        ,function (color) {
            var w = this._mapItemData.itemW;
            var h = this._mapItemData.itemH;
            this.graphics.clear();
            this.graphics.beginFill(color);
            this.graphics.moveTo(w / 2, 0);
            this.graphics.lineTo(w, h / 2);
            this.graphics.lineTo(w / 2, h);
            this.graphics.lineTo(0, h / 2);
            this.graphics.lineTo(w / 2, 0);
            this.graphics.endFill();
        }
    );
    d(p, "debug",undefined
        ,function (isDebug) {
            var w = this._mapItemData.itemW;
            var h = this._mapItemData.itemH;
            if (isDebug) {
                this.tf = new egret.TextField();
                this.tf.width = w;
                this.tf.height = 30;
                this.tf.y = (h - this.tf.height) / 2 + 10;
                this.tf.textAlign = 'center';
                this.tf.textColor = 0xFFFFFF;
                this.tf.size = 12;
                this.addChild(this.tf);
                this.label = "[" + this._mapItemData.row + ":" + this._mapItemData.col + "]";
            }
            else {
                if (this.contains(this.tf)) {
                    this.removeChild(this.tf);
                }
            }
        }
    );
    return MapItem;
}(egret.Sprite));
egret.registerClass(MapItem,'MapItem');
//# sourceMappingURL=MapItem.js.map