import { Component } from '@angular/core';
import { Post } from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Le tableau contenant les objets Post
  posts: Array<Post>;

  // Le texte par défaut
  text = 'Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. ' +
    'Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. ' +
    'At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem ' +
    'certam indicere. Cras mattis iudicium purus sit amet fermentum.';

constructor() {
    // On Initialise l'array des posts
    this.posts = [
      new Post('Mon premier post', this.text, 5),
      new Post('Mon second post', this.text, -2),
      new Post('Mon dernier post', this.text, 0)
    ];
  }
}
