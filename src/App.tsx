import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'


function App() {
  const [sonnets, setSonnet] = useState<string[]>([])
  useEffect(()=>{
    searchPoem()
  },[])

  

  const searchPoem = async ():Promise<any>=>{
    const response = 
      await axios.get(
        `https://poetrydb.org/author/Shakespeare`
      )
      for (let i = 0; i < 166; i++) {
        
          const title = response.data[i].title
          if (title.includes('Sonnet')) {
            console.log(title)
            setSonnet(prev =>[...prev, title])}
        
       
      }

      
     
     return sonnets
  }

  return (



    <div>{sonnets}</div>

  );
}

export default App;
