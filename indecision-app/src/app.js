class IndecisionApp extends React.Component{

	constructor(props){
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleMakeDecision = this.handleMakeDecision.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: props.options
		}
	}

	handleDeleteOptions(){
		this.setState( () => ({ options: [] }));
	}

	handleDeleteOption(optionToRemove){
		this.setState( (prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option )
		}));
	}

	handleMakeDecision(){
		this.setState( (prevState) => {
			const randomNum = Math.floor(Math.random() * this.state.options.length );
			const option = this.state.options[randomNum];
			alert(option);
		});
		
	}

	handleAddOption(option){

		if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

		this.setState( (prevState) => ({ 
			options: prevState.options.concat(option)
		}));
	}

	componentDidMount(){
		const json = localStorage.getItem('options');
		const options =  JSON.parse(json);

		this.setState( () => ({ options }));
		console.log('component did mount');
	}
	
	componentDidUpdate(prevProps, prevState){
		if(prevState.options.langth !== this.state.options.length){
			const json = JSON.stringify( this.state.options);
			localStorage.setItem('options', json);
		}
		
	}

	componentWillUnmount(){
		console.log('component will unmount');
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
					handleDeleteOption={ this.handleDeleteOption }
				/>
				<AddOption 
					handleAddOption={ this.handleAddOption }
				/>
			</div>
		);
	}
}


const Header = (props) => {
	return (
		<div>
			<h1>{ props.title }</h1>
			<h2>{ props.subtitle }</h2>
		</div>
	);
};


const Action = (props) => {
		return (
				<div>
					<button 
						onClick={ props.handleMakeDecision }
						disabled={ !props.hasOptions }
					>
						what should I do?
					</button>
				</div>
		);
};


// Options -> Options component here

const  Options = (props) => {
	return (
		<div>
			<button onClick={ props.handleDeleteOptions }>Remove All</button>
				{props.options.length === 0 && <p>Please add new item.</p>}
				{
					props.options.map((option) => (
						<Option 
							key={ option } 
							option={ option }
							handleDeleteOption={ props.handleDeleteOption } />
					))
				}
		</div>
	);
};


// Option component here

const Option = (props) => {
	return (
		<div>
			{ props.option }
			<button 
				onClick={ () => {
					props.handleDeleteOption(props.option); 
				}} 
			>
				Remove
			</button>
		</div>
	);
};

// AddOption -> AddOption component here

class AddOption extends React.Component{

	constructor(props){
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		}

	}


	handleAddOption(event) {
		event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

		this.setState(() => ({ error }));
		
		if(!error){
			event.target.option.value = '';
		}
	}

	render(){
		return (
			<div>
				{ this.state.error && <p>{ this.state.error }</p>}
				<form onSubmit={ this.handleAddOption }>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: []
}


const app = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, app);