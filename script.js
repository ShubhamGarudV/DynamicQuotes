let realdata="";
let quotesdata="";

const quoteid=document.getElementById('quoteid');
const authorid=document.getElementById('authorid');
const newquoteid=document.getElementById('newquoteid');
const tweetme=document.getElementById('tweetme');

const tweetNow=()=>{
    if(quotesdata.author==null)
    {
        quotesdata.author="Unknown";
    }
    let tweetpost=`https://twitter.com/intent/tweet?text=${quotesdata.text}    
                            
                     By ${quotesdata.author}`;
   
    
    window.open(tweetpost);

}

const randomgen =()=>{
    let rnum=Math.floor(Math.random()*1500);
    // rnum=16;
    // console.log(rnum);
    quotesdata=realdata[rnum];
    quoteid.innerText=`${quotesdata.text}`;
    let tempauthor=`${quotesdata.author}`;
    // quotesdata.author==null 
    // ?( authorid.innerText="Unknown")
    // :(authorid.innerText=`${quotesdata.author}`);
   
    
    if(tempauthor==="null")
    {
        authorid.innerText="Unknown";
    }
    else
    {
        authorid.innerText=`${quotesdata.author}`;
    }

}


const getQuotes = async() =>{
    const api="https://type.fit/api/quotes";
    try{

        let data=await fetch(api);
         realdata=await data.json();
        // console.log(realdata[rnum].text);

        randomgen();
        
    }catch(error){}
    
}
newquoteid.addEventListener('click',randomgen)
tweetme.addEventListener('click',tweetNow);
getQuotes();
    