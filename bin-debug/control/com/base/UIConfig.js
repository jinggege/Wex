var UIConfig = (function () {
    function UIConfig() {
    }
    var d = __define,c=UIConfig,p=c.prototype;
    d(UIConfig, "UI_BACKGROUND"
        ,function () {
            return "UI_BACKGROUND";
        }
    );
    d(UIConfig, "UI_LOADING"
        ,function () {
            return "UI_LOADING";
        }
    );
    d(UIConfig, "UI_WORD"
        ,function () {
            return "UI_WORD";
        }
    );
    return UIConfig;
}());
egret.registerClass(UIConfig,'UIConfig');
