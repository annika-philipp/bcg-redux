import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Welcome from './Welcome'
import Display from './Display'
import GameOver from './GameOver'
import AddScore from './AddScore'

import {getQuestions, addScoreApi, getScoresApi } from '../api'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalscore: 0,
            topScores: [],
            questions: [],
            question: '',
            answers: [],
            currentQuestionObject: null, 
            index: 0,
            beforeGame: true,
            gamePlaying: false,
            gameOver: false,
            isPositiveScore: true,
            isTopScore: false,
            scoreIncreased: true
        }

        this.refreshBoard = this.refreshBoard.bind(this)
        this.saveQuestions = this.saveQuestions.bind(this)
        this.updateIndex = this.updateIndex.bind(this)
        this.updateScore = this.updateScore.bind(this)
        this.startGame = this.startGame.bind(this)
        this.resetGame = this.resetGame.bind(this)
        this.getScores = this.getScores.bind(this)
        this.saveScores = this.saveScores.bind(this)
        this.checkScore = this.checkScore.bind(this)
        this.checkIfTopScore = this.checkIfTopScore.bind(this)
        this.refreshScores = this.refreshScores.bind(this)
    }

    componentDidMount() {
        this.refreshBoard()
    }

    saveQuestions(questionsList) {        
        this.setState({
            questions: questionsList,
            currentQuestionObject: questionsList
        })
    }
       
    refreshBoard (err) {
        this.setState({
            error: err,
        })
        getQuestions(this.saveQuestions)
    }

    resetGame() {
        this.setState({
            totalscore: 0,
            topScores: [],
            question: '',
            answers: [],
            index: 0,
            beforeGame: true,
            gamePlaying: false,
            gameOver: false,
            isPositiveScore: true
        })
    }

    startGame() {
        this.setState({
            beforeGame: false,
            gamePlaying: true,
            gameOver: false,
            isTopScore: false
        })
    }

    gameOver() {
        this.setState({
            beforeGame: false,
            gamePlaying: false,
            gameOver: true,
        })
        this.getScores()
    }

    getScores () {
        getScoresApi(this.saveScores)
    }

    saveScores(topScoresApi) {
        this.setState({
            topScores: topScoresApi
        })
        this.checkScore()
    }

    checkScore() {
        getScoresApi(this.checkIfTopScore)
    }

    checkIfTopScore(topScoresApi) {
        if(this.state.totalscore > this.state.topScores[9].score) {
            this.setState({
                isTopScore:true
            })
        }
    }

    refreshScores() {
        this.getScores()
    }


    updateScore(value) {
        var updatedscore = this.state.totalscore + value
        this.setState({
            totalscore: updatedscore
        }) 
        var scoreIncreased = updatedscore > this.state.totalscore
        ? this.setState({
                scoreIncreased: true
            })
        : this.setState({
            scoreIncreased: false
        })    

        if (updatedscore < 0)  {
            this.setState ({
                isPositiveScore: false
            })
        }
    }

    updateIndex (score) {
    var next = this.state.index == this.state.questions.length -1 ? this.gameOver() : this.state.index + 1 
    this.setState({
        index: next,
    })
    this.updateScore(score)
    }

    handleUpdate (index) {
        if(this.state.questions.length > 0 && this.state.isPositiveScore) {
            return (
                <div>
                     <Display question={this.state.currentQuestionObject[index]} updateIndex={this.updateIndex} totalscore={this.state.totalscore} scoreIncreased={this.state.scoreIncreased} />
                </div>    
            )}
        if(this.state.questions.length > 0 && !this.state.isPositiveScore) {
            return (
                <div>
                    <GameOver resetGame={this.resetGame}/>
                </div>
            )
        }    
    }
    

    render () {
        const {totalscore} = this.state
        return (
            <div className="container">
            <div className="row">
                <h1>BCG 3000</h1>
            </div>  
            {this.state.beforeGame && <Welcome startGame={this.startGame} />}
            {this.state.gameOver && <AddScore isTopScore={this.state.isTopScore} topScores={this.state.topScores} resetGame={this.resetGame} refreshScores ={this.refreshScores} totalscore={this.state.totalscore}/>}
            <div className="game">
                {this.state.gamePlaying && this.handleUpdate(this.state.index)}
            </div>
            </div>
        )   
    }
}

export default App








