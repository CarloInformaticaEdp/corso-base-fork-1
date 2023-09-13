import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  constructor() {
    console.log('costruttore');
  }

  ngOnInit(): void {
    console.log('init');
  }
}
