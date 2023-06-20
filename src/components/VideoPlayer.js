import React, { Component } from "react";


export default class VideoPlayer extends Component {
 
  componentDidMount() {
    kWidget.embed({
      targetId: "kaltura_player_1681495881",

      wid: "_2645261",

      uiconf_id: 52176612,

      flashvars: {},

      cache_st: 1681495881,

      entry_id: "1_zjr231ls",
    });
  }

  render() {
    return (
      <section className="section-1">
        <div id="VideoPlayer" style={{ width: "640px", height: "360px" }}>
          <h1>Video Player</h1>
          <iframe
            src="https://cdnapisec.kaltura.com/p/2645261/sp/264526100/embedIframeJs/uiconf_id/48537213/partner_id/2645261?iframeembed=true&playerId=kaltura_player_264526100&entry_id=1_uks1dadm&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true"
            width="400"
            height="285"
            allowfullscreen
            webkitallowfullscreen
            mozAllowFullScreen
            frameborder="0"
            allow="encrypted-media"
          ></iframe>
          <iframe
            src="https://cdnapisec.kaltura.com/p/2645261/sp/264526100/embedIframeJs/uiconf_id/52176612/partner_id/2645261?iframeembed=true&playerId=kaltura_player_264526100&entry_id=1_uks1dadm&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true"
            width="400"
            height="285"
            allowfullscreen
            webkitallowfullscreen
            mozAllowFullScreen
            frameborder="0"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div
          id="kaltura_player_1681495881"
          style={{ width: "640px", height: "360px" }}
        ></div>
      
      </section>
    );
  }
}
