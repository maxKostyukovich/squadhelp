import React , { Component } from 'react';
import styles from './MainPage.module.sass';
import Header from '../../components/Header/Header';
import { getUserAction, setNewWordAction } from "../../actions/actionCreator";
import { STORAGE_KEYS } from '../../constants/';
import connect from 'react-redux/es/connect/connect';
import { startContestButton, exploreNames } from '../../constants/MainPageButtonsText';
import MainButton from "../../components/MainPageButtons/MainButton";
import { words } from '../../constants/headerWordsMainPage';
class MainPage extends Component{
    renderNewWord =  () => {
         setInterval(()=>{
            let i = words.indexOf(this.props.word);
            if(i === -1)
                i = 0;
            if(i === words.length-1){
                i = -1;
            }
            this.props.setNewWordAction(words[i+1]);
        }, 4000)
    };
    componentDidMount() {
        this.renderNewWord();
    }

    render(){
        return(
            <div>
                <Header/>
                <div className={styles.bodyContainer}>
                    <div className={styles.carouselInner}>
                        <h1>Find the Perfect Name for <span className={styles.randomWord}>{this.props.word}</span></h1>
                        <p>Launch a naming contest to engage hundreds of naming experts as you’re guided through our agency-level naming process.<br/> Or, explore our hand-picked collection of premium names available for immediate purchase</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <ul>
                            <li><MainButton {...startContestButton}/></li>
                            <li><span>or</span></li>
                            <li><MainButton {...exploreNames}/></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUserAction: () => dispatch(getUserAction()),
    setNewWordAction: (word) => dispatch(setNewWordAction(word)),
});

const mapStateToProps = (state) => {
    const { user, isFetching, err } = state.userReducer;
    const { word } = state.utilsReducer;
    return {
        user,
        isFetching,
        err,
        word,
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);