export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    changeColor: boolean; 
  
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
      
    }

    shouldShowWarning(): boolean{
        if (this.type.toLocaleLowerCase() === ('Space Debris').toLocaleLowerCase()){
            this.changeColor = true;
            //<td>{{satellite.launchDate}}</td>

            //<ol [style.color]="alternateColor" [type]="bulletType">
            //<td>{{satellite.type}}</td>
            return true;
        }else{
            return false; 
        }
    }

    
    

}

