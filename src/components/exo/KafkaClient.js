import axios from "axios";

export default function TestClientKafka(){
 const HandleSubmit=(e)=>{
    e.preventDefault();
    const Data=new FormData(e.target);
  let id=e.target["id"].value;
  let prenom=e.target["firstname"].value;
  let nom=e.target["lastname"].value;
  let adresse=e.target["adresse"].value;
   let updata={id:id,firstName:prenom,lastName:nom,adresse:adresse};
  axios.post("http://localhost:8080/api/v3/messagesJson",updata).then(response=>{
    alert("Data envoyé avec succés");

  }).catch(error=>{
    console.log(error);
  })
}

return<>
<form onSubmit={(e)=>HandleSubmit(e)}>
    <label>Id:</label>
    <input type="number" name="id"></input>
    <label>First Name</label>
    <input type="text" name="firstname"></input>
    <label>Last Name</label>
    <input type="text" name="lastname"></input>
    <label>Adresse</label>
    <input type="text" name="adresse"></input>
    <button>Envoyer</button>
</form>
</>
}