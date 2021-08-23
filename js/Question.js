class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
this.input2=createInput("Enter your number here.....");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question=createElement('h3');
    this.option1=createElement('h4');
    this.option2=createElement('h4');
    this.option3=createElement('h4');
    this.option4=createElement('h4'); 
    this.input3=createInput("Type the correct option");



    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
this.question.hide();
this.option1.hide();
this.option2.hide();
this.option3.hide();
this.option4.hide();
this.input2.hide();
this.input3.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("what do you like to do??");
    this.question.position(150,230);

    this.option1.html("1.dance");
    this.option1.position(150,250);

    this.option2.html("2.sing");
    this.option2.position(150,270);

    this.option3.html("3.cooking");
    this.option3.position(150,290);

    this.option4.html("4.other");
    this.option4.position(150,310);

    this.input3.position(500,230)

this.input2.position(300,230);
    this.input1.position(100, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.question.hide();
this.option1.hide();
this.option2.hide();
this.option3.hide();
this.option4.hide();
this.input3.hide();
      this.message.html("Thank you! Your answer has been submitted");
      this.message,position(290,170);

    })


  }
}
