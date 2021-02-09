import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {EditQuizComponent} from './quizzes/edit-quiz/edit-quiz.component';

const routes: Routes = [
  {path: 'quiz-list', component: QuizListComponent},
  {path: 'edit-quiz ', component: EditQuizComponent},
  {path: '', redirectTo: 'quiz-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
