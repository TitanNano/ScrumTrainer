export class QuizPart
{
	public body: string;
	public options: Array<string>
	constructor(data) {
		Object.assign(this, data);
	}
}

export class Chapter
{
	public title: string;
	public description: string;
	public parts: Array<QuizPart>;
	public icon: string;

	constructor(data)
	{
		this.title			= data.title;
		this.description	= data.description;
		this.icon			= data.icon;
		
		for( let quizPart of data.parts )
		{
			this.parts.push( new QuizPart(quizPart) );
		}
	}
}
