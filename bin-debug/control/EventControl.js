var EventControl = (function (_super) {
    __extends(EventControl, _super);
    function EventControl() {
        _super.call(this);
    }
    var d = __define,c=EventControl,p=c.prototype;
    p.notify = function (event) {
        this.dispatchEvent(event);
    };
    p.on = function (type, callback, pClass) {
        this.addEventListener(type, callback, pClass);
    };
    p.remove = function (type, callback, pClass) {
        this.removeEventListener(type, callback, pClass);
    };
    d(EventControl, "it"
        ,function () {
            if (this._instnce == null) {
                this._instnce = new EventControl();
            }
            return this._instnce;
        }
    );
    //预加载完成
    EventControl.E_LOAD_PRE_END = "E_LOAD_PRE_END";
    //预加载错误
    EventControl.E_LOAD_PRE_ERROR = "E_LOAD_PRE_ERROR";
    //预加载进度
    EventControl.E_LOAD_PRE_PROGRESS = "E_LOAD_PRE_PROGRESS";
    EventControl._instnce = null;
    return EventControl;
}(egret.EventDispatcher));
egret.registerClass(EventControl,'EventControl');
