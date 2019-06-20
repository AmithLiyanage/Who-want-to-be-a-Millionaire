import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { ActivatedRoute, Router } from '@angular/router';
//import swal from 'sweetalert';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  isCorrected: boolean;
  isClicked:boolean;
  count: 0;
  questionId: number;
  question: any;
  color: string;
  id: string;
  answerClasses = {
    1: '',
    2: '',
    3: '',
    4: ''
  };
  prizeColor = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: ''
  }

  setColor(index: number){
    for(var i=0;i<=5;i++){
      if(i<=index){
        this.prizeColor[i] = "orange"
      }else{
        this.prizeColor[i]="white"
      }
    }

    // this.prizeColor[index] = "orange";
  }

  constructor(
    private qService: QuestionsService,
    private router: ActivatedRoute,
    private route: Router
    ) { }

  ngOnInit() {
    console.log(this.question);

    this.id = this.router.snapshot.paramMap.get('id');
    this.questionId = parseInt(this.id);
    // console.log("id"+this.id)
    // tslint:disable-next-line: radix
    this.question = this.qService.getQuestion(parseInt(this.id));
    this.setColor(this.questionId);
    this.isClicked = false;
  }

  ngAfterViewInit(): void {
    this.setColor(this.questionId-1);
  }

  checkAnswer(id: number){
    //this.count++;
    //if (this.count == 1) {
      this.isClicked = true;
      if (this.question.correct == id) {
        this.setColor(this.questionId);
        this.isCorrected = true;
        this.answerClasses[id] = 'btnGreen';
        this.color = 'orange',
        console.log('correct answer');
      } else {
        this.setColor(this.questionId-1);
        this.isCorrected = false;
        this.answerClasses[id] = 'btnError';
        this.answerClasses[this.question.correct] = 'btnGreen';
        console.log('wrong answer');
      }
    // } else {
      // this.answerClasses = {
      //   1: '',
      //   2: '',
      //   3: '',
      //   4: ''
      // }
    // }
  }

  goToNext() {
    if(!this.isClicked){
      alert('Please select an answer')
      return
    }
    //this.count = 0;
    console.log("currentQuestion: "+this.questionId)
    this.questionId+=1;
    if (this.questionId <=5) {
      if (this.isCorrected) {
        this.setColor(this.questionId);
        console.log("next Question: "+this.questionId);
        this.route.navigate(['/question/' + this.questionId]);
        this.question = this.qService.questions[this.questionId];
        this.color = this.qService.questions[this.questionId],
        this.isCorrected = false;
        this.answerClasses = {
          1: '',
          2: '',
          3: '',
          4: ''
        };
      } else {
        this.setColor(1);
        console.log("in fault");
        alert("You loose!");
        this.route.navigate(['/question/1']);
        this.questionId = 1;
        this.question = this.qService.questions[this.questionId];
        this.answerClasses = {
          1: '',
          2: '',
          3: '',
          4: ''
        };
      }
    } else {
      alert("Congratuations!, You won");
      this.questionId = 1;
      this.question = this.qService.questions[this.questionId];
      this.answerClasses = {
        1: '',
        2: '',
        3: '',
        4: ''
      };
      this.route.navigate(['']);
    }

    // console.log("question : " + this.qService.questions[this.questionId].question);
    // console.log("question id: " + this.qService.questions[this.questionId].correct);
    // console.log("this question : " + this.questionId);
  }

}
