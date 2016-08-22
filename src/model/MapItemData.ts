class MapItemData {

	public itemW:number = 50;
	public itemH:number = 50;
	//所在行, 列
	public row:number = 0;
	public col:number = 0;
	//阻挡类型 0:无阻挡   1：阻挡  ...
	public typs:number = 0;

	public isDebug:boolean = true;

	public color:number = 0x000000;


	public constructor() {
	}
}