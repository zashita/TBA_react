import React, {useState} from 'react';
import {StyledInput} from "./styled";
import {StyledButton} from "./styled";
import ContactButton from "../img/svg/Contact_button_form.svg"
import axios from "axios";

const Form = () => {
    function isLetter(str: string): boolean {
        if (str.length === 1 && str.match(/[A-Z]/i)) return true;
        else return false;

    }

    function check_str(data: string): boolean {
        data = data.toUpperCase()
        let check: boolean = true;
        if (data.length == 0) check = false;
        for (let i: number = 0; i < data.length; i++) {
            if (!isLetter(data[i])) {
                check = false;
                break;
            }

        }
        return check;
    }
    function check_gmail(data:string):boolean
    {
        if(data.match(/@gmail.com/)) return true;
        else return false;
    }

    // function getMassage(message:string){
    //     const TOKEN:string = '5969205858:AAGqgT3bB_Fc3_AxL4kG10VrIubKqBs5z-8';
    //     const CHAT_ID:string = "-1001888517934"
    //     const API_URL:string = 'https://api.telegram.org/bot'+ TOKEN + '/sendMessage';
    //     let tg_message: string = "";
    //
    //
    //
    //
    //     axios.get(API_URL).then(res => {
    //         const persons = res.message.text;)
    //
    //
    // }


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
                         value={mail}
                         onChange={(e => setMail(e.target.value))}
            />
            <StyledButton
                onClick={
                    () => {
                        if (check_str(user.Name) && check_str(user.LastName) && check_gmail(user.Mail)) {
                            const TOKEN: string = '5969205858:AAGqgT3bB_Fc3_AxL4kG10VrIubKqBs5z-8';
                            const CHAT_ID: string = "-1001888517934"
                            const API_URL: string = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage';
                            const TG_MESSAGE: string = JSON.stringify(user);


                            axios.post(API_URL, {
                                chat_id: CHAT_ID,
                                parse_mode: "html",
                                text: TG_MESSAGE
                            })
                        } else console.log("ya dura");
                    }
                }
            >Contact us</StyledButton>


        </div>
    );
};

export default Form;