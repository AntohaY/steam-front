export class UserModel {
  public steamid: string;
  public communityvisibilitystate: number;
  public profilestate: number;
  public personaname: string;
  public commentpermission: number;
  public profileurl: string;
  public avatar: string;
  public avatarmedium: string;
  public avatarfull: string;
  public avatarhash: string;
  public lastlogoff: number;
  public personastate: number;
  public realname: string;
  public primaryclanid: string;
  public timecreated: number;
  public personastateflags: number;
  public gameextrainfo: string;
  public gameid: number;
  constructor(
    steamid: string,
    communityvisibilitystate: number,
    profilestate: number,
    personaname: string,
    commentpermission: number,
    profileurl: string,
    avatar: string,
    avatarmedium: string,
    avatarfull: string,
    avatarhash: string,
    lastlogoff: number,
    personastate: number,
    realname: string,
    primaryclanid: string,
    timecreated: number,
    personastateflags: number,
    gameextrainfo: string,
    gameid: number,
    )
  {
    this.steamid = steamid;
    this.communityvisibilitystate = communityvisibilitystate;
    this.profilestate = profilestate;
    this.personaname = personaname;
    this.commentpermission = commentpermission;
    this.profileurl = profileurl;
    this.avatar = avatar;
    this.avatarmedium = avatarmedium;
    this.avatarfull = avatarfull;
    this.avatarhash = avatarhash;
    this.lastlogoff = lastlogoff;
    this.personastate = personastate;
    this.realname = realname;
    this.primaryclanid = primaryclanid;
    this.timecreated = timecreated;
    this.personastateflags = personastateflags;
    this.gameextrainfo = gameextrainfo;
    this.gameid = gameid;
  }
}

export class Players {
  public players: Array<UserModel>;

  constructor(players: Array<UserModel>) {
    this.players = players;
  }
}

export class PlayerSummariesResponse {
  public response: Players;

  constructor(response: Players) {
    this.response = response;
  }
}

