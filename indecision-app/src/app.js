import React from 'react'
import ReactDOM from 'react-dom'

class IndecisionApp extends React.Component{

  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleMakeDecision = this.handleMakeDecision.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
      options: ['item one', 'item two', 'item three']
    }
  }

  handleDeleteOptions(){
    this.setState( () => {
      return {
        options: []
      }
    });
  }

  handleMakeDecision(){
    this.setState( (prevState) => {
      const randomNum = Math.floor(Math.random() * this.state.options.length );
      const option = this.state.options[randomNum];
      alert(option);
    });
    
  }

  addOption(option){
    // this.setState( (prevState) => {
    //   return {
    //     options: prevState.push(option)
    //   }
    // });

    this.setState( () => {
      this.state.options.push(option);
    });
  }



  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions={ this.state.options.length > 0 } 
          handleMakeDecision={ this.handleMakeDecision }
        />
        <Options 
          options={ this.state.options } 
          handleDeleteOptions={ this.handleDeleteOptions }
        />
        <AddOption 
          addOption={ this.addOption }
        />
      </div>
    );
  }
}


class Header extends React.Component{

  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>

    );
  }
}


class Action extends React.Component{

  render(){
    return (
      <div>
        <button 
          onClick={this.props.handleMakeDecision }
          disabled={ !this.props.hasOptions }
        >
        What should I Do?
        </button>
      </div>
    );
  }
}

// Options -> Options component here

class Options extends React.Component{

  render(){
    return (
      <div>
        <button onClick={ this.props.handleDeleteOptions }>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} option={option} />)
        }
      </div>
    );
  }
}

// Option component here

class Option extends React.Component{
  render(){
    return (
      <div>
        { this.props.option }
      </div>
    );
  }
}

// AddOption -> AddOption component here

class AddOption extends React.Component{

  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }


  handleAddOption(event) {
    event.preventDefault();
    let option = event.target.elements.option.value.trim();
  
    if(option){
      this.props.addOption( option );
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={ this.handleAddOption }>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


const app = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, app);