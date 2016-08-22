var Util = (function () {
    function Util() {
    }
    var d = __define,c=Util,p=c.prototype;
    p.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log(args);
    };
    d(Util, "it"
        ,function () {
            this._instance = this._instance == null ? new Util() : this._instance;
            return this._instance;
        }
    );
    Util._instance = null;
    return Util;
}());
egret.registerClass(Util,'Util');
//# sourceMappingURL=Util.js.map