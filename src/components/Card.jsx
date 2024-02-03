export function Card(props){

         function myFun(){
            //url=props.url
            window.location.href = props.url;
         }

       return(

            <div className=" flex-col h-80 rounded-md w-80 border border-black  m-4 " >
           
               {
                props.urlToImage==null?<img className="h-40 w-full" src="https://i.insider.com/65bd5e0543bb77284ba33c48?width=1200&format=jpeg" alt="image" /> :<img className="h-40 w-full" src={props.urlToImage} alt="image" /> 
               }             
                            <p>{props.author}</p>
                            <p>{props.title}</p>
                            {/* <p>{props.content}</p> */}
                            {/* <p>{props.description}</p> */}
                            <button className="border border-black m-4 rounded-md w-32 bg-sky-300" onClick={myFun}>Read More</button>
            </div>

       )

}


// author
// : 
// "Jacquelyn Melinek"
// content
// : 
// "The crypto world is riddled with noise. Memecoins, speculation, rugpulls, scams, hype and doomers distract us from all the innovative stuff people are building with blockchains. And sometimes the noi… [+1136 chars]"
// description
// : 
// "\"I’m not anti-speculation, but I think it’s a question of priorities... It’s putting the cart before the horse.\""
// publishedAt
// : 
// "2024-02-02T17:09:15Z"
// source
// : 
// {id: 'techcrunch', name: 'TechCrunch'}
// title
// : 
// "A16z’s Chris Dixon thinks it's time to focus on blockchains' use cases, not speculation | TechCrunch"
// url
// : 
// "https://techcrunch.com/2024/02/02/a16z-chris-dixon-chain-reaction-interview/"
// urlToImage
// : 
// "https://techcrunch.com/wp-content/uploads/2022/10/tc-disrupt-2022-chris-dixon-9.jpg?resize=1200,800"