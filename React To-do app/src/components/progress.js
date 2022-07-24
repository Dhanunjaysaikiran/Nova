import React, { useEffect, useState } from "react";
import '../App.css';
import Prof1 from '../images/prof-1.svg'
import Plus from '../images/plus.svg'
import Close from '../images/close.svg'

function Progress() {
    function closeTab() {
        var b = document.getElementById('hide3')
        if (b.style.display == 'none') {
            b.style.display = 'block'
        }
        else {
            b.style.display = 'none'
        }
    }
    const [inputcTitle, setinputcTitle] = useState("");
    const [inputcDesc, setinputcDesc] = useState("");
    const [complete, setitems] = useState([
        {
            id: "001",
            name: "Default Task",
            desc: "Default Description",
            status: false,
        },
    ]);
    const handleInputTitle = (e) => {
        setinputcTitle(e.target.value);
    };
    const handleInputdesc = (e) => {
        setinputcDesc(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputcTitle || !inputcDesc) {
            alert("fill data");
        }
        else {
            const completed = {
                id: new Date().getTime().toString(),
                name: inputcTitle,
                desc: inputcDesc,
            }
            setitems([completed, ...complete])
            setinputcDesc('');
            setinputcTitle('');
        };
        document.getElementById('hide3').style.display = 'none'
    }
    const DelTask = (id) => {
        let newTasks = complete.filter(complete => complete.id !== id)
        setitems(newTasks);
    }



    return (
        <div className='pallet gap' id='progress'>
            <div className="Add-item2" id="hide3">

                <input type='text' name='title' placeholder="Add a new task title" className="input-nova" onChange={handleInputTitle}
                    value={inputcTitle}></input>
                <input type='text' name='description' placeholder="Add description" className="input-nova" onChange={handleInputdesc}
                    value={inputcDesc}></input>
                <button onClick={handleSubmit}>Add</button>

                <img src={Close} onClick={closeTab} />
            </div>
            <div className='mini-box'>
                <span>Progress</span>
                <div className='colorbg'>{complete.length}</div>
            </div>
            <div className='add' onClick={closeTab}><img src={Plus} /></div>
            <div className='page1'>
                {complete.map((complete) => {
                    return (
                        <div className='subpage'>
                            <span className='card-title'>{complete.name}</span>
                            <div className='limit'>
                                <p>{complete.desc}</p>
                            </div>

                            <img src={Prof1}></img>
                            <button className="del" onClick={() => DelTask(complete.id)}>Delete</button>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default Progress;