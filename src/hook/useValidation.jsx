import { useContext } from "react";
import { ValidationContext } from "../context/validation_context";

export  function UseValidation(){
    return useContext(ValidationContext)
}