import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ntx-simple-avatar',
  templateUrl: './simple-avatar.component.html',
  styleUrls: ['./simple-avatar.component.scss']
})
export class SimpleAvatarComponent implements OnInit {

  @Input() label:string | undefined;
  @Input() src:string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.label = this.label || 'user name';
  }

}
