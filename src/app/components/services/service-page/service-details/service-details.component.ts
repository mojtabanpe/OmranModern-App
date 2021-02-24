import { Service } from './../../../../interfaces/service';
import { RepositoryService } from './../../../../services/repository.service';
import { Component, Input, OnInit } from '@angular/core';
import { Comment } from './../../../../interfaces/comment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  @Input() service: Service;
  @Input() comments: Array<Comment>;
  @Input() explain;
  commentFirstName = '';
  commentLastName = '';
  commentText = '';
  errors = [];
  constructor(private repository: RepositoryService, private alert: ToastrService) { }

  ngOnInit(): void {
  }

  public generateRowIndexes(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }

  openIntroductionProduct(): void {

  }

  showMoreComments(): void {

  }

  submitComment(): void {
    const name = this.commentFirstName + ' ' + this.commentLastName;
    if (name.trim() === '') {
      this.errors.push('لطفا نام و یا نام خوانوادگی را پر کنید!');
    }
    if (this.commentText === '') {
      this.errors.push('لطفا متن را پر کنید!!');
    }
    if (this.errors.length === 0) {
      const comment = {
        name,
        text: this.commentText,
        product_type: false,
        product_id: this.service.id,
        product_name: this.service.name
      };

      this.repository.SubmitComment(comment).subscribe(res => {
        this.alert.success('نظر شما در صف تایید قرار گرفت!');
        console.log(res);
      });
    } else {
      for (const er of this.errors) {
        this.alert.error(er);
      }
      this.errors = [];
    }
  }
}
