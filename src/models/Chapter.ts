export class AnswerOption
{
    
	public body: string;
	public isRight: boolean;
	public isSelected: boolean;
	public goTo: number;
	public quizPart: QuizPart;
	
	constructor( data, quizPart: QuizPart )
	{
		this.body = data.body;
		this.goTo = data.goTo;
		this.isRight = data.isRight !== undefined ? data.isRight : true;
		this.quizPart = quizPart;
	}
	
	public select() {
		if( this.isSelected )
		{
			this.quizPart.select(this);
		}
    }
}

export class QuizPart
{
	public body: string;
	public options: Array<AnswerOption> = [];
	public answered: boolean = false;
	public allRightAnswers: boolean = false;
	public noWrongOptions: boolean = true;
	public singleSelect: boolean = false;
	public goTo: number;
	
	constructor(data)
	{
		this.body = data.body;
		this.goTo = data.goTo;
		this.singleSelect = data.singleSelect;

		for( let optionData of data.options )
		{
			let o = new AnswerOption(optionData, this);
			this.noWrongOptions = this.noWrongOptions && o.isRight;
			if( o.goTo )
			{
				this.singleSelect = true;
			}
			this.options.push( o );
		}
	}

	public checkAnswers()
	{
		this.allRightAnswers	= true;
		this.answered			= true;
		
        for( let o of this.options )
		{
			if( this.noWrongOptions !== true && (
                ( o.isRight == true && !o.isSelected ) ||
                ( o.isRight == false && o.isSelected ) )
            )
			{
				this.allRightAnswers = false;
			}
		}
	}

	public select(selectedOption: AnswerOption) {
		
		if( selectedOption.goTo && selectedOption.isSelected )
		{
			this.goTo = selectedOption.goTo;
		}
		
		if( this.singleSelect )
        {
            this.options.forEach( o => {
				o.isSelected = false;
			});
			selectedOption.isSelected = true;
        }
	}
}

export class Chapter
{
	public title: string;
	public description: string;
	public parts: Array<QuizPart> = [];
	public progressive: boolean;
	public icon: string;

	public allAnswered: boolean = false;

	constructor(data)
	{
		this.title			= data.title;
		this.description	= data.description;
		this.icon			= data.icon;
		this.progressive	= data.progressive;

		for( let quizPart of data.parts )
		{
			let iQuizPart = new QuizPart(quizPart);
			this.parts.push( iQuizPart );
		}
	}

	public resetAnswers()
	{
		this.parts.map(iPart => {
			iPart.answered = false;
			iPart.options.map( iOpt => iOpt.isSelected = false )
		})
	}
}
