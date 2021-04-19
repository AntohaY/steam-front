import {Component, OnInit, ViewChild} from '@angular/core';
import {PlayerSummariesResponse, UserModel} from "./user.model";
import {SteamApiService} from "../../services/steam-api/steam-api.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userIdInput: string = '';
  public userProfile: UserModel | undefined;

  constructor(
    private steamApiService: SteamApiService
  ) { }

  ngOnInit(): void {
  }

  fetchPlayersSummaries(userId: string) {
    return this.steamApiService.getPlayerSummaries(userId).subscribe(data => {
      console.log(data);
      this.userProfile = data.response.players[0];
    })
  }

}
