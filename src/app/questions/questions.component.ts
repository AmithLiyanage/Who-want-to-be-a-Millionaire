import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  isCorrected: boolean;
  count: 0;
  questionId: number;
  question: any;
  id: string;
  answerClasses = {
    1: '',
    2: '',
    3: '',
    4: ''
  };

  constructor(
    private qService: QuestionsService,
    private router: ActivatedRoute,
    private route: Router
    ) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.questionId = parseInt(this.id) + 1;
    // console.log("id"+this.id)
    // tslint:disable-next-line: radix
    this.question = this.qService.getQuestion(parseInt(this.id));
    console.log(this.question);
  }

  checkAnswer(id: number){
    //this.count++;
    //if (this.count == 1) {
      if (this.question.correct == id) {
        this.isCorrected = true;
        this.answerClasses[id] = 'btnGreen';
        console.log('correct answer');
      } else {
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
    //this.count = 0;
    this.questionId++;
    if (this.questionId <=5) {
      if (this.isCorrected) {
        console.log("in correct");
        this.route.navigate(['/question/' + this.questionId]);
        this.question = this.qService.questions[this.questionId];
        this.isCorrected = false;
        this.answerClasses = {
          1: '',
          2: '',
          3: '',
          4: ''
        };
      } else {
        console.log("in fault");
        swal({
          title: "Over!",
          text: "You lose the Game",
          icon: "warning",
        });
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
      swal({
        title: "Congratulations!",
        text: "You won",
        icon: "success"
      });
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


    console.log("question : " + this.qService.questions[this.questionId].question);
    console.log("question id: " + this.qService.questions[this.questionId].correct);
    console.log("this question : " + this.questionId);
  }

}
