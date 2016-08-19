var Block = (function (_super) {
    __extends(Block, _super);
    function Block() {
        _super.call(this);
        this.blockW = 50;
        this.blockH = 50;
        this.tf = null;
        this.row = 0;
        this.col = 0;
        this.touchChildren = false;
        this.touchEnabled = true;
        this.tf = new egret.TextField();
        this.tf.width = this.blockW;
        this.tf.height = 30;
        this.tf.y = (this.blockH - this.tf.height) / 2;
        this.tf.textAlign = 'center';
        this.tf.textColor = 0xFFFFFF;
        this.addChild(this.tf);
        this.tf.size = 12;
    }
    var d = __define,c=Block,p=c.prototype;
    p.tuchHandler = function (event) {
        console.log(event);
    };
    d(p, "label",undefined
        ,function (str) {
            this.tf.text = str;
        }
    );
    d(p, "bgColor",undefined
        ,function (color) {
            this.graphics.clear();
            this.graphics.beginFill(color);
            this.graphics.moveTo(this.blockW / 2, 0);
            this.graphics.lineTo(this.blockW, this.blockH / 2);
            this.graphics.lineTo(this.blockW / 2, this.blockH);
            this.graphics.lineTo(0, this.blockH / 2);
            this.graphics.lineTo(this.blockW / 2, 0);
            this.graphics.endFill();
        }
    );
    return Block;
}(egret.Sprite));
egret.registerClass(Block,'Block');
