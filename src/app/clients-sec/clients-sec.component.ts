import { Component } from '@angular/core';

@Component({
  selector: 'app-clients-sec',
  templateUrl: './clients-sec.component.html',
  styleUrls: ['./clients-sec.component.css'],
})
export class ClientsSecComponent {
  itemsPerSlide = window.innerWidth < 768 ? 3 : 5;
  singleSlideOffset = true;
  noWrap = false;

  slides = [
    { image: '../../assets/images/2.png' },
    { image: '../../assets/images/3.png' },
    { image: '../../assets/images/4.png' },
    { image: '../../assets/images/5.png' },
    { image: '../../assets/images/6.png' },
    { image: '../../assets/images/7.png' },
    { image: '../../assets/images/1.png' },
  ];
}
