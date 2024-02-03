
export function NavBar(){

       return (
           <div className="flex justify-between m-2">

                  <p>News-App</p>
                   
                 <div className="flex gap-20">
                     <input className=" border border-black rounded-md p-px " type="text" placeholder="...Search"/>
                       <p>Home</p>
                       <p>Sports</p>
                      <p>Politics</p>
                       <p>Bollywood</p>
                  </div>
                 
           </div>
       )

}