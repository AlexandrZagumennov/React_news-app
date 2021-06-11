import React from 'react';
import './Contacts.scss';
import DeveloperInfo from './DeveloperInfo/DeveloperInfo';
import DeveloperPhoto from './DeveloperPhoto/DeveloperPhoto';

const Contacts = () => {
    return (
        <div className="contacts">
            <DeveloperInfo 
                DeveloperPhoneNumber = {'+7 916 862-86-09'}
                DeveloperName = {'Александр Загумённов'}
                DeveloperEmail = {'aazagumennov@gmail.com'}
                DeveloperPosition = {'JavaScript разработчик'}
                DeveloperStack = {'ES5, ES6, '}
                DeveloperStackReact = {'React'}
            />
            <DeveloperPhoto />
        </div>
    )
};

export default Contacts;