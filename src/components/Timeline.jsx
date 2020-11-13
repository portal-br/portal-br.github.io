import 'bootstrap/dist/css/bootstrap.css';
import '../static/timeline.css';
import React from 'react';

const groupsFacebook = [

    {name:"Portal-BR",address:"https://www.facebook.com/groups/686160095156385/"},
    {name:"Computadores-BR",address:"https://web.facebook.com/groups/256622045000747/"},
    {name:"Emacs-BR",address:"https://web.facebook.com/groups/363760494222521/"},
    {name:"Física-BR",address:"https://www.facebook.com/groups/686160095156385/"},
    {name:"GNU-BR",address:"https://www.facebook.com/groups/639504229778635/"},
    {name:"Hacking-BR",address:"https://web.facebook.com/groups/250164319047897/"},
    {name:"Hardware-BR",address:"https://www.facebook.com/groups/312406906242602/"},
    {name:"Math-BR",address:"https://web.facebook.com/groups/254349098533699"},
    {name:"Programadores-BR",address:"Programadores-BR - Grupo de estudos"},
    {name:"Unix-BR",address:"https://www.facebook.com/groups/1511003425865588/"},
    {name:"Windows-BR",address:"https://www.facebook.com/groups/2267116043601384/"}

];

const groupsTelegram = [
  
    {name:"Programadores-BR",address:"https://t.me/programadores_br"},
    {name:"Hacking-BR",address:"https://t.me/hackbr"},
    {name:"Linux-BR",address:"https://t.me/linuxgrupo"},
    {name:"GNU-BR",address:"https://t.me/joinchat/LYpp81NGIJY0pJUZKMWKEA"},
    {name:"Emacs-BR",address:"https://t.me/emacswiki"}

];

function MapNameFacebook(props){
  return groupsFacebook.map(group=>
    <div id="content">
    <ul className="timeline">
    <li className="event">
  <div className="member-infos">
  <h1 className='member-title'>{group.name}</h1>
  </div>
  <a  className="btn btn-danger btn-lg" target="_blank" href={group.address} role="button">Participar</a>
</li>  
</ul>
</div>);
}

function MapTelegram(props){
  return groupsTelegram.map(group=>
    <div id="content">
    <ul className="timeline">
    <li className="event">
  <div className="member-infos">
  <h1 className='member-title'>{group.name}</h1>
  </div>
  <a  className="btn btn-danger btn-lg" target="_blank" href={group.address} role="button">Participar </a>
</li>  
</ul>
</div>);

}
function Timeline(){

return(
<div className="container">
     <h1>Grupos Facebook</h1>  
     <MapNameFacebook></MapNameFacebook>
     <h1>Grupos Telegram</h1>
     <MapTelegram></MapTelegram>

</div>
    )
};

export default Timeline;