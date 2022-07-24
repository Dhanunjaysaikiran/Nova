import React, { useEffect, useState } from "react";
import '../App.css';
import Prof1 from '../images/prof-1.svg';
import Plus from '../images/plus.svg';
import Close from '../images/close.svg'

function ToDo() {

    function closeTab() {
        var b = document.getElementById('hide')
        if (b.style.display == 'none') {
            b.style.display = 'block'
        }
        else {
            b.style.display = 'none'
        }
    }
    const [inputTitle, setinputTitle] = useState("");
    const [inputDesc, setinputDesc] = useState("");
    const [items, setitems] = useState([
        {
            id: "001",
            name: "Default Task",
            desc: "Default Description",
            status: false,
        },
    ]);
    const handleInputTitle = (e) => {
        setinputTitle(e.target.value);
    };
    const handleInputdesc = (e) => {
        setinputDesc(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputTitle || !inputDesc) {
            alert("fill data");
        }
        else {
            const allInputData = {
                id: new Date().getTime().toString(),
                name: inputTitle,
                desc: inputDesc,
            }
            setitems([allInputData, ...items])
            setinputDesc('');
            setinputTitle('');
        };
        document.getElementById('hide').style.display = 'none'
    }
    const DelTask = (id) => {
        let newTasks = items.filter(items => items.id !== id)
        setitems(newTasks);
    }

    return (
        <div className='pallet'>
            <div className="Add-item" id="hide">

                <input type='text' name='title' placeholder="Add a new task title" className="input-nova" onChange={handleInputTitle}
                    value={inputTitle}></input>
                <input type='text' name='description' placeholder="Add description" className="input-nova" onChange={handleInputdesc}
                    value={inputDesc}></input>
                <button onClick={handleSubmit}>Add</button>

                <img src={Close} onClick={closeTab} />
            </div>
            <div className='mini-box'>
                <span>To Do</span>
                <div className='colorbg'>{items.length}</div>
            </div>
            <div className='add' onClick={closeTab}><img src={Plus} /></div>
            <div className='page1'>
                {items.map((items) => {
                    return (
                        <div className='subpage'>
                            <span className='card-title'>{items.name}</span>
                            <div className='limit'>
                                <p>{items.desc}</p>
                            </div>

                            <img src={Prof1}></img>
                            <button className="del" onClick={() => DelTask(items.id)}>Delete</button>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ToDo;