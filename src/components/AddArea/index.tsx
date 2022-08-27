import * as C from './styles'
import { useState, KeyboardEvent, MouseEvent } from 'react'
import Add from '../../assets/add.svg'

type Props ={
  addList: (taskName:string)=> void
}


export const AddArea = ({addList} :Props) => {
  const [inputText, setInputText] = useState('')

  const handleKeyUp = (e:KeyboardEvent <HTMLInputElement>)=>{
    if (e.code === 'Enter' && inputText !== ''){
      addList(inputText)
      setInputText('')
    }
  }
  
  const handleClick = (e: MouseEvent<HTMLInputElement>) =>{
    if(inputText !== ''){
      addList(inputText)
      setInputText('')
      
    }
  }

  return (
    <C.container>
      <div className="image" onClick={handleClick}>
        <img src={Add} alt="" />
      </div>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp ={handleKeyUp}
        placeholder="Adicione uma tarefa..."
      />
    </C.container>
  )
}
