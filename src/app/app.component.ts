import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-premier-projet';

  date = new Date();

  posts = [
    {
        title: 'Article 1',
        content: 'C\'est le premier article',
        loveIts: '5',
        created_at: new Date()
    }, {
        title: 'Article 2',
        content: 'C\'est le deuxième article',
        loveIts: '-1',
        created_at: new Date()
    }, {
        title: 'Article 3',
        content: 'C\'est le troisième article',
        loveIts: '0',
        created_at: new Date()
    }
  ];
}
