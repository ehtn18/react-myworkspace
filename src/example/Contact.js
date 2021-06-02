import{useRef, useState} from "react"
const Contact = () => {
  const [tbList, setTableList] = useState([
    
    
  ]);
 
  const fnameInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();
    

  

  const add = () => {
    
    setTableList([{
      fname: fnameInput.current.value,
      phone: phoneInput.current.value,
      email: emailInput.current.value,
    }, ...tbList]);
   
  

    fnameInput.current.value = "";
    phoneInput.current.value = "";
    emailInput.current.value = "";
};
 
 
 
  return (
    <>
      <div>
        <input className = "input1"type="text" placeholder="이름" ref={fnameInput}/>
        <input className = "input2"type="text" placeholder="전화번호" ref={phoneInput}/>
        <input className = "input3"type="text" placeholder="이메일" ref={emailInput}/>
        <button onClick={add}>추가</button>
      </div>
      <div>
        <table>
          
            <thead>
              <tbody>
          {tbList.map((contact, index) => (      
              <tr key={index}>
                  <td>{contact.fname}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
              
              </tr>
            ))}
            </tbody>
            
          </thead>
          

          
          
          
          
      
          
        </table>
      </div>
    </>
  );
};

  export default Contact;