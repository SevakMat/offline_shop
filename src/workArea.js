import "./style.css"

import Items from "./items"
import getItem from "./service/servise"
import Finish from "./finish"

import {useHistory } from "react-router-dom";
import {useState,useRef,useEffect} from "react"



function WorkArea(){
  
  const [sumPrice, setSumPrice] = useState(0)
  const shtrixCod = useRef(null);
  const countInput = useRef(null);
  const history = useHistory()
  const [itemList, setItemList]=useState([])
  const [warning, setWarning]=useState('')
  const [isFinish,setIsFinish]=useState(false)

  function setItemInItemList(tempItem){
    
    function addOrChange(temp){
      let rrr = false
      for(let i = 0 ; i < itemList.length; i++) {
        if(itemList[i].type === temp.type){
          rrr = true
          itemList[i].count = itemList[i].count + temp.count
          setItemList(itemList);
        }
      }
      if(!rrr){
        setItemList(itemList=>[...itemList,temp])
      }
    }

    if(countInput.current.value.includes(" ")||isNaN(countInput.current.value)){
      setWarning("problem with count")
    }
    
    else{
      setWarning("")
      if(countInput.current.value===''){
        let newSumPrice = sumPrice + tempItem.price
        setSumPrice(newSumPrice)
        tempItem.count = 1
      }
      else{
        let newSumPrice = sumPrice + tempItem.price*countInput.current.value
        setSumPrice(newSumPrice)
        tempItem.count = parseInt(countInput.current.value)
      }
      addOrChange(tempItem)

    }
  }
  
  function confirm(){
    let tempItem = getItem(shtrixCod.current.value)
    if(!!tempItem === false){
      setWarning("chka tenc apranq")
    }else{
    setItemInItemList(tempItem)
    tempItem["x"]="X"
    tempItem["n"]=itemList.length+1
    }
  }
  function logOut(){
    localStorage.clear()
    history.push('/login');
    window.location.reload()
  }

  function finish(){
    
    if(sumPrice!==0){
      setIsFinish(true)
    }
  }

  function goBack(){
    setIsFinish(false)
  }
  
  function submit(){
    setItemList([])
    setSumPrice(0)
    shtrixCod.current.value = null
    countInput.current.value = null
    setIsFinish(false)
  }

  useEffect(() => {
    shtrixCod.current.focus();
  }, [sumPrice]);

  function cancleItem(e){

    let cancleItemName= e.target.parentElement.childNodes[1].innerHTML
    let count = e.target.parentElement.childNodes[2].innerHTML
    let price = e.target.parentElement.childNodes[3].innerHTML
    let changeArray = itemList.filter((item)=>{
      return (item.type !== cancleItemName)
    })
    shtrixCod.current.value = null
    countInput.current.value = null
    setSumPrice(sumPrice-(count*price))
    setItemList(changeArray)
  }

  return(
    <div>
        <input ref={shtrixCod}   disabled={isFinish} placeholder="shtrix code"/>
        <input ref={countInput} disabled={isFinish} placeholder="count"/>
        <button onClick={confirm} disabled={isFinish} >confirm</button>
        <span className="price" >{sumPrice}</span>
        <button onClick={logOut} >Log Out</button>
        {!isFinish && <Items test={itemList} cancleItem={cancleItem}/>}
      {!isFinish && <button onClick={finish}>finish</button>}
      <div>{warning}</div>
      {isFinish && <Finish price={sumPrice} goBack = {goBack} submit = {submit}/>}
    </div>
  );
}

export default WorkArea