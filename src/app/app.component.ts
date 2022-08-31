import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog-posts';
  cards: any[] = [];
  isLoading = false;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.newsService.getPosts().subscribe((res) => {
      console.log(res);
      this.cards = res as any[];
      this.isLoading = false;
    });
  }
}
