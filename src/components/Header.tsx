import React from 'react';
import './Header.css';
import { Difficulty, Screen } from '../types';

interface MenuItem {
    title: string
    key: Screen
}

const menuOptions: MenuItem[] = [
    {title: 'Guess Components', key: 'GuessComponents'},
    {title: 'Guess Item (Components)', key: 'GuessItemByComponent'},
    {title: 'Guess Item (Description)', key: 'GuessItemByDescription'},
    {title: 'Items', key: 'TFTItems'}
]

interface HeaderProps{
    screen: Screen
    setScreen: Function
    difficulty: Difficulty
    setDifficulty: Function
}

function Header(props: HeaderProps) {
  return (
    <div className="Header">
        <div className='HeaderItem HeaderLeft'>
            <div className = 'HeaderTitle' onClick={() => props.setScreen("Home")}>
                TFTutor
            </div>         
        </div>
        <div className='HeaderMenu HeaderItem'>
            {menuOptions.map((opt: MenuItem) => {
                let className = 'Item HeaderMenu'
                if (opt.key === props.screen) {
                    className += ' Active'
                }
                return(
                    <div onClick={() => props.setScreen(opt.key)} className={className}>{opt.title}</div>
                )
            })}
        </div>
        <div className='HeaderItem HeaderDifficulty'>
            <div className='HeaderRight'>
                <label>Difficulty{' '}</label>
                <select onChange={(e) => props.setDifficulty(e.target.value)} value={props.difficulty}>
                    {Object.values(Difficulty).map((key: any) => {
                        return(
                            <option value={key}>{key}</option>
                        )
                    }) 
                    }
                </select>
            </div>
        </div>
    </div>
  );
}

export default Header;
