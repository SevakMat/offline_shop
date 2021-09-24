function Items({test}){
  
  function renderItems(itemList){
    return itemList.map((item,i) => {
      return(
        <div key={i}>
          {item.type}
          {item.price} 
        </div>
      )
    })
  }
return(
  <div>
    {renderItems(test)}
  </div>
)
}

export default Items