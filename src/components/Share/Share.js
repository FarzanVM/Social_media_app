import './share.css'
import { Avatar } from '@mui/material';
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material'
import { useState } from 'react';


function ShareComp() {

        const fileBtn = document.getElementById("realbtn");
        const customTxt = document.getElementById("custom-text")
        const [sended,setSended] = useState(true)
        const [fileName,setFileName] = useState("")
      
        function choseFile(e){
            e.preventDefault();
            fileBtn.click();
            
            console.log("clickedd")
        }
        

        const [desc,setDesc] = useState(null)
        const [photo,setPhoto] = useState(null)
        const like = 0
        const comment=""
        const userId=1

        const msgSubmit = (e)=>{
            var today=new Date();
            var date = today.getDate()+'/'+today.getMonth()+'/'+today.getFullYear();
            const blog= {desc,photo,date,userId,like,comment}

            fetch('https://backend-api.farzanvm.workers.dev/api/postData',{

                method:'POST',
                mode:'no-cors',
                headers:{ "Content-Type":"application/json"},
                body:JSON.stringify(blog)
            })
            .then(res => {
                return  res.text();
             })
             .then(data =>{
                 console.log("SUCCESS");
                 setSended(false)
             })
             if(!sended){
                window.location.reload();
             }
            

        }

        function encodeImageFileAsURL(element) {
            if(customTxt){
                customTxt.innerHTML="Done"}
            var file = element.files[0];
            var name=element.value;
            var reader = new FileReader();
            reader.onloadend = function() {
                setPhoto(reader.result);
                setFileName(name.substring(12));
                console.log(reader.result);
            }
            reader.readAsDataURL(file);
       
        }
          

        
    
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <Avatar src="/assets/images/1.png"/>
                    <input placeholder="What's in ur mind" className="shareInput"/>
                </div>
                {/* <hr className="shareHr"/> */}
                <input type="text" className="inputMsgBox" placeholder="Share your Feelings" onChange={(e)=>setDesc(e.target.value)}/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <input type="file" id="realbtn"  hidden="hidden" onChange={(e)=>encodeImageFileAsURL(e.target)}/>
                             <button className="fileUploadBtn" id="fakebtn" onClick={choseFile}> 
                            <PermMedia htmlColor="tomato" className="shareIcon"/>            
                            <span className="shareOptionText">Photo/Video</span></button>
                            <span>{fileName}</span>        
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room  htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>                  
                    <button className="shareButton" id="sharebtn" onClick={msgSubmit}>Share</button>
                </div>
                
            </div>
           
        </div>
    )
}

export default ShareComp
