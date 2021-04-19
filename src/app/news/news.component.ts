import { Component, OnInit } from '@angular/core';
import {SteamApiService} from "../../services/steam-api/steam-api.service";
import {NewsItem, newsResponse} from "./news.model";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public dotaNews: Array<NewsItem> = [];

  constructor(
    private steamApiService: SteamApiService
  ) { }

  ngOnInit(): void {
    this.fetchGameNews(570);
  }

  fetchGameNews(gameId: number) {
    return this.steamApiService.getGameNews(gameId).subscribe((data: newsResponse) => {
      if (data) {
        this.dotaNews = data.appnews.newsitems;
      }
    })
  }
}
