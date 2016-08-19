var CreatMap = (function (_super) {
    __extends(CreatMap, _super);
    function CreatMap() {
        _super.call(this);
        this.mk = new egret.Shape();
        this.mask = this.mk;
        this.addChild(this.mk);
    }
    var d = __define,c=CreatMap,p=c.prototype;
    p.create = function () {
        var b;
        for (var i = 0; i < 10; i++) {
            for (var k = 0; k < 10; k++) {
                b = new Block();
                this.addChild(b);
                b.row = i;
                b.col = k;
                b.bgColor = 0x000000;
                var offX = i % 2 == 0 ? 0 : 25;
                b.x = k * b.width + offX;
                b.y = i * (b.height / 2);
                b.label = "[" + i + ":" + k + "]";
            }
        }
        this.mk.graphics.clear();
        this.mk.graphics.beginFill(0x000000);
        this.mk.graphics.drawRect(0, 0, this.width - 50, this.height - 50);
        this.mk.graphics.endFill();
        this.mk.x = 25;
        this.mk.y = 25;
    };
    return CreatMap;
}(egret.Sprite));
egret.registerClass(CreatMap,'CreatMap');
