import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-caroussel",
  templateUrl: "./caroussel.component.html",
  styleUrls: ["./caroussel.component.scss"],
})
export class CarousselComponent implements OnInit {
  activeCard: number;
  className: string;
  items: HTMLCollectionOf<Element>;
  moving: boolean;
  SWIPE_ACTION = { LEFT: "swipeleft", RIGHT: "swiperight" };

  constructor() {
    this.className = "card";
  }

  ngOnInit() {
    this.items = document.getElementsByClassName(this.className);
    this.moving = false;
    this.activeCard = 0;
    this.items[this.items.length - 1].classList.add("prev");
    this.items[0].classList.add("active");
    this.items[1].classList.add("next");
  }

  moveNext() {
    if (!this.moving) {
      this.activeCard =
        this.activeCard === this.items.length - 1 ? 0 : this.activeCard + 1;
      this.moveSlide();
    }
  }

  movePrev() {
    if (!this.moving) {
      this.activeCard =
        this.activeCard === 0 ? this.items.length - 1 : this.activeCard - 1;
      this.moveSlide();
    }
  }

  moveSlide() {
    if (!this.moving) {
      this.disableSlide();

      const active = this.activeCard;
      const prev =
        this.activeCard === 0 ? this.items.length - 1 : this.activeCard - 1;
      const next =
        this.activeCard === this.items.length - 1 ? 0 : this.activeCard + 1;
      for (let i = 0; i < this.items.length; i++) {
        if (i !== next && i !== prev && i != active) {
          this.items.item(i).classList.value = "card prev";
        }
      }
      this.items.item(prev).classList.value = "card prev";
      this.items.item(next).classList.value = "card next";
      this.items.item(active).classList.value = "card active";
    }
  }

  disableSlide() {
    this.moving = true;

    setTimeout(() => {
      this.moving = false;
    }, 200);
  }

  onSwipe(currentIndex: number, action: string = this.SWIPE_ACTION.RIGHT) {
    switch (action) {
      case this.SWIPE_ACTION.LEFT:
        this.moveNext();
      case this.SWIPE_ACTION.RIGHT:
        this.movePrev();
    }
  }

  goTo(index: number) {
    this.activeCard = index;
    this.moveSlide();
  }

  onPanEnd(event: any) {
    const active = document.getElementsByClassName('active').item(0) as HTMLElement;
    active.style.left = '0px';
  }

  onPan(event: any): void {
    const active = document.getElementsByClassName('active').item(0) as HTMLElement;
    active.style.left = event.deltaX + 'px';
  }
}
