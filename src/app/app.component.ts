import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Piano';

  public playSound(sound: string) {
    console.log(`playing sound: ${sound}`);
    let audio = new Audio();
    audio.src = `./src/assets/sounds/${sound}.wav`;
    audio.load();
    audio.play();
  }
}
