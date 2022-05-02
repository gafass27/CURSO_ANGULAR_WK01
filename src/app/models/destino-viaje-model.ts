export class DestinoViajeModel{
  private selected: boolean;
  servicios: string[];
  id: any;

  constructor(public nombre:string ,public url:string, public votes: number = 0) {
    this.selected = false;
    this.servicios = ['piscina','desayuno','almuerzo'];
  }

  isSelected() :boolean{
      return this.selected;
  }
  setSelected(s: boolean){
    this.selected = s;
  }
  voteUp(): any (){
    this.votes++;
  }
  voteDown(): any (){
    this.votes--;
  }
}
