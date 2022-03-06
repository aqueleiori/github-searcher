import React, {useState, useEffect} from "react"

import api from './req'
import styles from './index.module.css'

function index(){
  const [avatar, setAvatar] = useState()
  const [input, setInput] = useState()

  function hello(){
    api.get(`/users/${input}`)
    .then((response) => {
      setAvatar(response.data)
    })
    .catch((err) => {
      console.log('the error is: ', err.response.status);
      if(err.response.status === 404){
        alert("Usuario não localizado")
      }
    })
  }
  return(
    <div className={styles.main}>
      <div className={styles.selector}>
        <input type="text" className={styles.txselec} onChange={event => setInput(event.target.value)} />
        <input type="button" className={styles.btnselec} onClick={hello} value="search"/>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>{avatar?.name}</h1>
          <h5>{avatar?.login}</h5>
        </div>
        <img src={avatar?.avatar_url} width={300} height={300} />
      </div>
    </div>
    )
}

export default index
