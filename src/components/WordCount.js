import React,{useState} from "react";
function WordCount(){
  const[text,setText]=useState('');
  const handleTextChange=(e)=>{
    setText(e.target.value);
  }
  const countWords=()=>{
    const words=text.trim().split(/\s+/);
    return words.filter(word=>word!=='').length;
  }
  return(
    <div class="word">
      <textArea
        onChange={handleTextChange}
        value={text}
        rows="7"
        cols="50"
      />
      <p>Word Count:{countWords()}</p>
    </div>
  )
}
export default WordCount;