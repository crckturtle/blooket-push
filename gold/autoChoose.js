/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{var e=document.createElement("iframe");if(document.body.append(e),window.confirm=e.contentWindow.confirm.bind(window),window.console.log=e.contentWindow.console.log.bind(window),e.style.display="none",await Object.values(webpackJsonp.push([[],{"":(e,t,o)=>{t.cache=o.c}},[[""]]]).cache).find(e=>e.exports?.a?.get).exports.a.get("https://"+(location.host.startsWith("dashboard")?location.host+"/api/games":"play.blooket.com/api/gamequestionsets")+"?gameId=6368436a976422d8a3f70cd7").then(e=>parseInt("0"+e.data.questions.find(e=>"../cheats/gold/autoChoose.js"==e.question)?.answers?.[0]))<1682808881062||confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")){console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#4560","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tautoChoose.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");try{let a=Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];if("prize"===a.state.stage){var s=Object.entries(await new Promise(t=>a.props.liveGameController.getDatabaseVal("c",e=>e&&t(e)))||[]).filter(e=>e[0]!=a.props.client.name).sort((e,t)=>t[1].g-e[1].g)[0]?.[1]?.g||0;let o=0;index=-1;for(let t=0;t<a.state.choices.length;t++){var{type:c,val:i}=a.state.choices[t];let e=a.state.gold;switch(c){case"gold":e=a.state.gold+i||a.state.gold;break;case"multiply":case"divide":e=Math.round(a.state.gold*i)||a.state.gold;break;case"swap":e=s||a.state.gold;case"take":e=a.state.gold+s*i||a.state.gold}(e||0)<=o||(o=e,index=t+1)}document.querySelector(`div[class^='styles__choice${index}']`).click()}}catch{}}})();