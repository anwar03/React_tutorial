class IndecisionApp extends React.Component{
  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['item one', 'item two', 'item three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
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
  handlePick(){
    alert('What should I Do?');
  }

  render(){
    return (
      <div>
        <button onClick={this.handlePick}>What should I Do?</button>
      </div>
    );
  }
}

// Options -> Options component here

class Options extends React.Component{

  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);

  }

  handleRemoveAll(){
    console.log(this.props.options);
  }

  render(){
    return (
      <div>
        <button onClick={ this.handleRemoveAll }>Remove All</button>
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

  handleAddOption(event) {
    event.preventDefault();
    let option = event.target.elements.option.value.trim();
    
    if(option){
      console.log(option);
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