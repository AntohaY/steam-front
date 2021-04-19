export class newsResponse {
  public appnews: newsResponseBody

  constructor(appnews: newsResponseBody) {
    this.appnews = appnews;
  }
}

export class newsResponseBody {
  public appid: number;
  public count: number;
  public newsitems: Array<NewsItem>

  constructor(appid: number, count: number, newsitems: Array<NewsItem>) {
    this.appid = appid;
    this.count = count;
    this.newsitems = newsitems;
  }
}

export class NewsItem {
  public appid: number;
  public author: string;
  public contents: string;
  public date: number;
  public feed_type: number;
  public feedlabel: string;
  public feedname: string;
  public gid: string;
  public is_external_url: boolean;
  public title: string;
  public url: string;

  constructor(appid: number, author: string, contents: string, date: number, feed_type: number,
   feedlabel: string, feedname: string, gid: string,  is_external_url: boolean, title: string,  url: string) {
    this.appid = appid;
    this.author = author;
    this.contents = contents;
    this.date = date;
    this.feed_type = feed_type;
    this.feedlabel = feedlabel;
    this.feedname = feedname;
    this.gid = gid;
    this.is_external_url = is_external_url;
    this.title = title;
    this.url = url;
  }
}
