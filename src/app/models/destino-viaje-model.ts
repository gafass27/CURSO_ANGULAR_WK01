export class DestinoViajeModel{
  private selected: boolean;
  servicios: string[];
  id: any;
  constructor(public nombre:string ,public url:string) {
    this.selected = false;
    this.servicios = ['piscina','desayuno','almuerzo'];
  }

  isSelected() :boolean{
      return this.selected;
  }
  setSelected(s: boolean){
    this.selected = s;
  }
}
