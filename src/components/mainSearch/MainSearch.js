import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';

import './mainSearch.scss';

// const MainSearch = () => {
//     const {loading, error, getCharacterByName} = useMarvelService();
//     const [data, setData] = useState([]);
//     const [input, setInput] = useState("");
//     const [dnone, setDnone] = useState(true);

//     const loadCharacterbyName = (name) => {
//         if(!name) {
//             return
//         }
//         getCharacterByName(name).then(data => {setData(data); })
        
//     }

//     useEffect(()=> {
//         if(input === '') {
//             setData([]);
//         }
//         loadCharacterbyName(input)
//     },[input])


//     const renderCharacter = (data) => data.map(({id, name, thumbnail}) => 
//         <Link to={`character/${id}`} key={name}>
//             <div  className='findCharacter__results-wrapper'>
//                 <div className='findCharacter__desc'>{name}</div>
//             </div>
//         </Link>);

//     const noDisplay = dnone || !input? 'none' : 'block';
   
//     return (
//         <section className="findCharacter">
//             <div className='container'>
//                 <div className="findCharacter__block">
//                     <form>
//                         <input  value={input} 
//                                 onChange={(e)=> setInput(e.target.value)} 
//                                 onBlur={()=> setTimeout(()=> setDnone(true),150)} 
//                                 onFocus={() => setDnone(false)} 
//                                 type='text' 
//                                 autoComplete="off" 
//                                 placeholder='Or find a character by name'/>
//                         {data.length === 0? null: 
//                         <div className='findCharacter__results' style={{animation: `fadeIn .4s`, display: noDisplay}}>
//                             {loading? 'loading ...': renderCharacter(data)}
//                         </div>}
//                     </form>
//                 </div>
//                 {error? <div style={{fontWeight: "bold", color: 'red'}}>Unknow error, try search again</div>: null}
//             </div>
//             {dnone? null : <div style={{width: '100vw', height: '100vh', background: 'rgba(0, 0, 0, 0.413)', position: 'fixed', top: '0', zIndex: '9'}}></div> }
//         </section>
//     )
// }


const MainSearch = () => {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");

    const {loading, error, getCharacterByNameInput} = useMarvelService();


    useEffect(() => {
        if(input === ""){
            setData([]);
        } else {
            onSearch(input)
        }
    }, [input])

    const onSearch = (name) => {
        // проверка обязательна, чтобы не попала пустая строка, иначе будет запрос с пустой строкой
        if(!name){
            return;
        }
        getCharacterByNameInput(name)
        .then(res => console.log(res))
    }

    return (
        <section className="main-search">
            <div className="container">
                <form>
                    <input 
                        type="text" 
                        placeholder="Enter name"
                        value={input}
                        onChange={event => setInput(event.target.value)}
                        />
                </form>
            </div>
        </section>
    )
}

export default MainSearch;