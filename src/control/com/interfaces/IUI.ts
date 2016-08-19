interface IUI{
    open();
    resize(w:number,h:number);
    close();
    isOpen():boolean;
    level():number;
    destroy();
}
