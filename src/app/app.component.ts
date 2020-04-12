import { Component } from "@angular/core";
import { transition, animate, trigger } from "@angular/animations";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [trigger("animation", [
    transition('invisible => visible', animate('2s'))
  ])],
})
export class AppComponent {
  title = "Landing Page";
  showYoutubePlayer = false;

  modalToggle() {
    this.showYoutubePlayer = !this.showYoutubePlayer;
    if (this.showYoutubePlayer) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }
}
