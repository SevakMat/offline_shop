import "./style.css"

function Items({test, cancleItem}){
  


  function renderItems(itemList){
    return (
      <table  className="itemsArea">
            <thead>
              <tr>
                <th>N</th>
                <th>Name</th>
                <th>Count</th>
                <th>Price</th>
                <th>Cancel</th>
              </tr>
            
            </thead>
        {itemList.map((item,i) => {
          return(
            <tbody key = {i}>
              <tr key={i}>
                <th>{item.n}</th>
                <th >{item.type}</th>
                <td>{item.count}</td>
                <td>{item.price}</td>
                <td onClick={cancleItem}>{item.x}</td>
              </tr>
            </tbody>
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
