import { Component } from '@angular/core';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'llamadaApiAngular';
public personas: Array<any> = [];


constructor(private personaService: PersonaService){
this.personaService.getPersonas().subscribe((resp: any) => {
  console.log(resp)
  this.personas = resp
})
}

}
