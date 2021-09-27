import "./style.css"

function Items({test}){
  function cancleItem(){
    console.log(3333);
    
  }

  function renderItems(itemList){
    return (
      <table  className="itemsArea">
            <thead>
              <tr>
                <th>Name</th>
                <th>Count</th>
                <th>Price</th>
                <th>Cancel</th>
              </tr>
            
            </thead>
        {itemList.map((item,i) => {
          return(
              <tr key={i}>
                <th >{item.type}</th>
                <td>{item.count + "x"}</td>
                <td>{item.price}</td>
                <td onClick={cancleItem}>X</td>
              </tr>
          )
        })}
      </table>
    )
  }

  return(
    <div>
      {renderItems(test)}
    </div>
  )
}

export default Items
