export class AnswerOption
{
	public body: string;
	public isRight: boolean;
	public isSelected: boolean;
	public goTo: number;
	
	constructor(data)
	{
		Object.assign(this, data);
		if ( data.isRight === undefined )
		{
			this.isRight = true;
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
	public goTo: number;
	
	constructor(data)
	{
		this.body = data.body;
		this.goTo = data.goTo;

		for( let optionData of data.options )
		{
			let iOpt = new AnswerOption(optionData);
			this.noWrongOptions = this.noWrongOptions && iOpt.isRight;
			this.options.push( iOpt );
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
