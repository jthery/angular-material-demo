import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  // mettre par défaut notre checkbox en cocher(true)
  isChecked = true;

  // pour choisir par defaut sur notre selecteur l'id 2
  color = 2;

  // tableau de donnée de notre drop down list
  colors = [
    {
      id: 1,
      name: 'red'
    },
    {
      id: 2,
      name: 'orange'
    },
    {
      id: 3,
      name: 'green'
    }
  ]

  // Lors du cochement ou décochement de la checkbox, ça envoi une reponse false ou true dans la console
  onChange($event) {
    console.log($event);
  }
}
