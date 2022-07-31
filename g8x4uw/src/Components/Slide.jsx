function Slide(props) {
  
  
  let x=  props.data.filter((el)=>{
      return el.id===props.page
    })
 
  return (
    <div className="slide-container" data-testid="slide">
    
    {
      x.map((el,index)=>{
    return  <div key={index}>
       <h3 data-testid="title"> {el.title}</h3>
       <p data-testid="description">{el.description}</p>
     </div>
     
        
      })
    }
     
     
     
    </div>
  );
}

export default Slide;
