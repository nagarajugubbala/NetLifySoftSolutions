import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwiperOptions } from 'swiper';
import { ContactDialogComponent } from '../dialogs/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  isBrowser: boolean;
  constructor(public dialog: MatDialog, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    autoplay: {
      delay: 6200
    },
    speed: 800,
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
      slideShadows: true,
      rotate: 15,
      stretch: 15,
      depth: 5,
      modifier: 5,
    }
  };

  //to move to particular div element
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '400px',
    });
  }

}
