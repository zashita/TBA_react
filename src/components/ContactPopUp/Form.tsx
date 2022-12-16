import React, {useState} from 'react';
import {StyledInput} from "./styled";
import {StyledButton} from "./styled";
import ContactButton from "../img/svg/Contact_button_form.svg"
const Form = () => {
    function isLetter(str:string) {
        return str.length === 1 && str.match(/[A-Z]/i);
    }
    function check_str(data:string):boolean{
        data = data.toUpperCase()
        let check:boolean = true;
        for (let i:number = 0; i < data.length; i++ )
        {
            if(!isLetter(data[i]))
            {
                check = false;
                break;
            }

        }
        return check;


    }
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [mail, setMail] = useState('');
    const user = {
        Name: name,
        LastName: lastname,
        Mail: mail
    }

    return (
        <div>
            <StyledInput placeholder={"First name"}
            value={name}
             onChange={(e) => setName(e.target.value)}
            />
            <StyledInput placeholder={"Last name"}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <StyledInput placeholder={"Email"}
            value = {mail}
            onChange = {(e => setMail(e.target.value))}
            />
            <StyledButton>Contact us</StyledButton>
            <p>{user.Name} {user.LastName} {user.Mail}</p>

        </div>
    );
};

export default Form;