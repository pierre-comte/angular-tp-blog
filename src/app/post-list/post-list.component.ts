import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // Le Post qu'on récupère de AppComponent
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }
}
