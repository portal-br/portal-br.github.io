import 'bootstrap/dist/css/bootstrap.css';
import '../static/timeline.css';
import React from 'react';

const groupsFacebook = [

    {id:1,name:"Portal-BR",address:"https://www.facebook.com/groups/686160095156385/"},
    {id:2,name:"Computadores-BR",address:"https://web.facebook.com/groups/256622045000747/"},
    {id:3,name:"Emacs-BR",address:"https://web.facebook.com/groups/363760494222521/"},
    {id:4,name:"Física-BR",address:"https://www.facebook.com/groups/686160095156385/"},
    {id:5,name:"GNU-BR",address:"https://www.facebook.com/groups/639504229778635/"},
    {id:6,name:"Hacking-BR",address:"https://web.facebook.com/groups/250164319047897/"},
    {id:7,name:"Hardware-BR",address:"https://www.facebook.com/groups/312406906242602/"},
    {id:8,name:"Math-BR",address:"https://web.facebook.com/groups/254349098533699"},
    {id:9,name:"Programadores-BR",address:"Programadores-BR - Grupo de estudos"},
    {id:10,name:"Unix-BR",address:"https://www.facebook.com/groups/1511003425865588/"},
    {id:11,name:"Windows-BR",address:"https://www.facebook.com/groups/2267116043601384/"}

];

const groupsTelegram = [
  
    {id:1,name:"Programadores-BR",address:"https://t.me/programadores_br"},
    {id:2,name:"Hacking-BR",address:"https://t.me/hackbr"},
    {id:3,name:"Linux-BR",address:"https://t.me/linuxgrupo"},
    {id:4,name:"GNU-BR",address:"https://t.me/joinchat/LYpp81NGIJY0pJUZKMWKEA"},
    {id:5,name:"Emacs-BR",address:"https://t.me/emacswiki"}

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