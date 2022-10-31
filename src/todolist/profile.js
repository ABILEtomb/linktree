import './style.css';
import images from './images/profile_img.jpg'

function Profile(){
    return(
<div className= "user_profile">
<div className='logo'>
 <img src={images}></img>
</div>
<h1 className='profile_name'>Abile Tombra</h1>
<div className='button_links'>
    <button ><a href='https://twitter.com/TombraAbile'>twitter link</a></button>
    <button className='slack' id='slack'><a href='#'>Tombra Abile</a></button>
    <button id='zuri__btn'><a href='https://training.zuri.team/'>zuri team</a></button>
    <button id='books'><a href='https://training.zuri.team/'>zuri books</a></button>
    <button id='book__python'><a href='https://training.zuri.team/' id='Tombra Abile'>python books</a></button>
    <button id='pitch'><a href='https://background.zuri.team'>background check for coders</a></button>
    <button id='book__design'><a href='https://books.zuri.team/design-rules'>design books</a></button>
</div>
</div>
    )
}

export default Profile;