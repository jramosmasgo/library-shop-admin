import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styles: [],
})
export class CardContentComponent implements OnInit {
  constructor() {}
  @Input() titleCard: string = '--';

  ngOnInit(): void {}
}
