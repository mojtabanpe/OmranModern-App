import { Comment } from './../../../../interfaces/comment';
import { RepositoryService } from './../../../../services/repository.service';
import { formatDate, Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-material-details',
  templateUrl: './material-details.component.html',
  styleUrls: ['./material-details.component.css']
})
export class MaterialDetailsComponent implements OnInit {
  @Input() material: any;
  @Input() comments: Array<Comment>;
  @Input() explain;
  commentFirstName = '';
  commentLastName = '';
  commentText = '';
  errors = [];
  constructor(private alert: ToastrService, private repository: RepositoryService) { }

  ngOnInit(): void {

  }

  public generateRowIndexes(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
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
        product_type: true,
        product_id: this.material.id,
        product_name: this.material.name
      };
      console.log(JSON.stringify(comment));
      
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
