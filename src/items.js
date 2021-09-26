import "./style.css"

function Items({test}){
  


  function renderItems(itemList){
    return (
      <div  className="itemsArea">
        
        {itemList.map((item,i) => {

          return(
            <div className="item" key={i}>
              {item.type}
              {item.price} 
            </div>
          )

        })}
      </div>
    )
  }



return(
  <div>
    {renderItems(test)}
  </div>
)
}

export default Items