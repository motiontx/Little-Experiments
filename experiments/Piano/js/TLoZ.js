// The Legend of Zelda Main Theme (Easy) - Koji Kondo
// https://musescore.com/user/20360426/scores/4880846
// Transcription made by Rafael Verde

// 120 bpm --> 120 beats in 60000 ms
// 1 beat --> 500 ms
// 1 bar --> 4 beats --> 2000 ms

const song = [
  ['La4', 1000],
  ['Blank', 166.66],
  ['Blank', 166.66],
  ['La4', 166.66],
  ['La4', 166.66],
  ['La4', 166.66],
  ['La4', 166.66],
  ['La4', 333.33],
  ['Sol4', 166.66],
  ['La4', 500],
  ['Blank', 166.66],
  ['Blank', 166.66],
  ['La4', 166.66],
  ['La4', 166.66],
  ['La4', 166.66],
  ['La4', 166.66],
  ['La4', 333.33],
  ['Sol4', 166.66],
  ['La4', 500],
  ['Blank', 166.66],
  ['Blank', 166.66],
  ['La4', 166.66],
  ['La4', 166.66],
  ['La4', 166.66],
  ['La4', 166.66],
  ['La4', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 250],
  ['La4', 500],
  ['Mi4', 750],
  ['La4', 250],
  ['La4', 125],
  ['Si4', 125],
  ['Do5', 125],
  ['Re5', 125],
  ['Mi5', 1000],
  ['Blank', 250],
  ['Mi5', 250],
  ['Mi5', 166.66],
  ['Fa5', 166.66],
  ['Sol5', 166.66],
  ['La5', 1000],
  ['Blank', 250],
  ['La5', 250],
  ['La5', 166.66],
  ['Sol5', 166.66],
  ['Fa5', 166.66],
  ['Sol5', 375],
  ['Fa5', 125],
  ['Mi5', 1000],
  ['Mi5', 500],
  ['Re5', 250],
  ['Re5', 125],
  ['Mi5', 125],
  ['Fa5', 1000],
  ['Mi5', 250],
  ['Re5', 250],
  ['Do5', 250],
  ['Do5', 125],
  ['Re5', 125],
  ['Mi5', 1000],
  ['Re5', 250],
  ['Do5', 250],
  ['Si4', 250],
  ['Si4', 125],
  ['Do5', 125],
  ['Re5', 1000],
  ['Fa5', 500],
  ['Mi5', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 250],
  ['La4', 500],
  ['Mi4', 750],
  ['La4', 250],
  ['La4', 125],
  ['Si4', 125],
  ['Do5', 125],
  ['Re5', 125],
  ['Mi5', 1000],
  ['Blank', 250],
  ['Mi5', 250],
  ['Mi5', 166.66],
  ['Fa5', 166.66],
  ['Sol5', 166.66],
  ['La5', 1000],
  ['Blank', 250],
  ['Blank', 250],
  ['Do6', 500],
  ['Si5', 500],
  ['Sol5', 1000],
  ['Mi5', 500],
  ['Fa5', 1500],
  ['La5', 500],
  ['Sol#5', 500],
  ['Mi5', 1000],
  ['Mi5', 500],
  ['Fa5', 1500],
  ['La5', 500],
  ['Sol#5', 500],
  ['Mi5', 1000],
  ['Do#5', 500],
  ['Re5', 1500],
  ['Fa5', 500],
  ['Mi5', 500],
  ['Do5', 1000],
  ['La4', 500],
  ['Si4', 250],
  ['Si4', 125],
  ['Do5', 125],
  ['Re5', 1000],
  ['Fa5', 500],
  ['Mi5', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 250],
  ['La4', 500],
  ['Mi4', 750],
  ['La4', 250],
  ['La4', 125],
  ['Si4', 125],
  ['Do5', 125],
  ['Re5', 125],
  ['Mi5', 1000],
  ['Blank', 250],
  ['Mi5', 250],
  ['Mi5', 166.66],
  ['Fa5', 166.66],
  ['Sol5', 166.66],
  ['La5', 1000],
  ['Blank', 250],
  ['La5', 250],
  ['La5', 166.66],
  ['Sol5', 166.66],
  ['Fa5', 166.66],
  ['Sol5', 375],
  ['Fa5', 125],
  ['Mi5', 1000],
  ['Mi5', 500],
  ['Re5', 250],
  ['Re5', 125],
  ['Mi5', 125],
  ['Fa5', 1000],
  ['Mi5', 250],
  ['Re5', 250],
  ['Do5', 250],
  ['Do5', 125],
  ['Re5', 125],
  ['Mi5', 1000],
  ['Re5', 250],
  ['Do5', 250],
  ['Si4', 250],
  ['Si4', 125],
  ['Do5', 125],
  ['Re5', 1000],
  ['Fa5', 500],
  ['Mi5', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 250],
  ['La4', 500],
  ['Mi4', 750],
  ['La4', 250],
  ['La4', 125],
  ['Si4', 125],
  ['Do5', 125],
  ['Re5', 125],
  ['Mi5', 1000],
  ['Blank', 250],
  ['Mi5', 250],
  ['Mi5', 166.66],
  ['Fa5', 166.66],
  ['Sol5', 166.66],
  ['La5', 1000],
  ['Blank', 250],
  ['Blank', 250],
  ['Do6', 500],
  ['Si5', 500],
  ['Sol5', 1000],
  ['Mi5', 500],
  ['Fa5', 1500],
  ['La5', 500],
  ['Sol#5', 500],
  ['Mi5', 1000],
  ['Mi5', 500],
  ['Fa5', 1500],
  ['La5', 500],
  ['Sol#5', 500],
  ['Mi5', 1000],
  ['Do#5', 500],
  ['Re5', 1500],
  ['Fa5', 500],
  ['Mi5', 500],
  ['Do5', 1000],
  ['La4', 500],
  ['Si4', 250],
  ['Si4', 125],
  ['Do5', 125],
  ['Re5', 1000],
  ['Fa5', 500],
  ['Mi5', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 125],
  ['Mi4', 125],
  ['Mi4', 250],
  ['Mi4', 250]];
