import { useRef, useState } from "react";
const Contact = () => {
  const [tbList, setTableList] = useState([]);

  const fnameInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();

  const tr = useRef();

  const add = () => {
    setTableList([
      {
        fname: fnameInput.current.value,
        phone: phoneInput.current.value,
        email: emailInput.current.value,
      },
      ...tbList,
    ]);

    fnameInput.current.value = "";
    phoneInput.current.value = "";
    emailInput.current.value = "";
  };

  const remove = (index) => {
    setTableList(tbList.filter((_, idx) => idx !== index));
  };
  const edit = (index) => {
    setTableList(
      tbList.map((contact, idx) => {
        if (idx === index) {
          contact.isEdit = true;
        }
        return contact;
      })
    );
  };
  const cancel = (index) => {
    setTableList(
      tbList.map((contact, idx) => {
        if (idx === index) {
          delete contact.isEdit;
        }
        return contact;
      })
    );
  };
  const save = (index) => {
    setTableList(
      tbList.map((contact, idx) => {
        if (idx === index) {
          const td = tr.current.children[index];
          const editInput = td.querySelector("input");

          contact.fname = editInput.value;
          contact.phone = editInput.value;
          contact.email = editInput.value;
          delete contact.isEdit;
        }
        return contact;
      })
    );
  };
  return (
    <>
      <div>
        <input
          className="input1"
          type="text"
          placeholder="이름"
          ref={fnameInput}
        />
        <input
          className="input2"
          type="text"
          placeholder="전화번호"
          ref={phoneInput}
        />
        <input
          className="input3"
          type="text"
          placeholder="이메일"
          ref={emailInput}
        />
        <button onClick={add}>추가</button>
      </div>
      <div>
        <table>
          <thead>
            <tbody ref={tr}>
              {tbList.map((contact, index) => (
                <tr key={index}>
                  <button
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    ✔
                  </button>
                  {!contact.isEdit && (
                    <td className="input">{contact.fname}</td>
                  )}
                  {!contact.isEdit && (
                    <td className="input">{contact.phone}</td>
                  )}
                  {!contact.isEdit && (
                    <td className="input">{contact.email}</td>
                  )}
                  {contact.isEdit && (
                    <input type="text" defaultvalue={contact.fname}></input>
                  )}
                  {contact.isEdit && (
                    <input type="text" defaultvalue={contact.phone}></input>
                  )}
                  {contact.isEdit && (
                    <input type="text" defaultvalue={contact.email}></input>
                  )}
                  {!contact.isEdit && (
                    <button
                      onClick={() => {
                        edit(index);
                      }}
                    >
                      edit
                    </button>
                  )}
                  {contact.isEdit && (
                    <button
                      onClick={() => {
                        save(index);
                      }}
                    >
                      save
                    </button>
                  )}
                  {contact.isEdit && (
                    <button
                      onClick={() => {
                        cancel(index);
                      }}
                    >
                      cancel
                    </button>
                  )}
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
