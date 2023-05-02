import React from "react";
import {Autocomplete} from '@mui/material';
import {TextField} from '@mui/material';

export default function Bonus() {
    const arr=
[
  {label:"Apple"},
  {label:"peach"},
  {label:"banana"},
  {label:"grpes"},
  {label:"orange"},
  {label:"papaya"},
  {label:"mango"},
  {label:"cherry"},
  {label:"guava"},
  {label:"watermelon"},
  {label:"melon"},
  {label:"bluberry"}
]
 
  return (
    <div  style={{backgroundImage:`url("https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80")`,backgroundSize:"cover"}}>
     <h1  style={{paddingTop:"13rem"}}>Search fruits</h1>
     
      <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={arr}
  sx={{ width: 300, marginLeft:"40rem",paddingBottom:"25rem"}}
  renderInput={(params) => <TextField {...params} label="Fruits" />}
/>
</div>
  );
}

