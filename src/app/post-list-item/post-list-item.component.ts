import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../model/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  // Le Post qu'on récupère de PostListComponent
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  // Action lorsqu'on aime un Post
  onLove() {
    this.post.loveIts++;
  }

  // Action lorsqu'on n'aime pas un Post
  onDislove() {
    this.post.loveIts--;
  }
}
