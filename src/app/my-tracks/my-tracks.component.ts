import {Component, OnInit, TemplateRef} from '@angular/core';
import {TrackListService} from '../track-list.service';

import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {UserInfo} from '../user-info';
import {EmailValidationService} from '../email-validation.service';

@Component({
  selector: 'app-my-tracks',
  templateUrl: './my-tracks.component.html',
  styleUrls: ['./my-tracks.component.css']
})
export class MyTracksComponent {
  modalRef: BsModalRef;
  userInfo = new UserInfo();

  emailValid = true;
  submitted = false;
  errorMessage: string;

  constructor(public trackListService: TrackListService,
              private modalService: BsModalService,
              private emailValidationService: EmailValidationService) {
  }
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {ignoreBackdropClick: true});
  }

  cancel(): void {
    this.modalRef.hide();
  }

  reset(): void {
    this.modalRef.hide();
    this.emailValid = false;
    this.errorMessage = null;
    this.submitted =  false;
    this.trackListService.tracks = [];
    this.userInfo = new UserInfo();
  }

  validateEmail() {
    this.emailValidationService.isEmailValid(this.userInfo.email)
      .subscribe(value => this.emailValid = (value.state === 'ALLOWED'));
  }

  submit(): void {
    if (this.trackListService.isSubmittable()) {
      if (this.emailValid) {
        this.trackListService.submit(this.userInfo).subscribe(result => {
          if (result.value === 'OK') {
            this.submitted = true;
          } else {
            this.errorMessage = result.message;
          }
        });
      }
    }
  }
}
