import {Component, OnInit, TemplateRef} from '@angular/core';
import {TrackListService} from '../track-list.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {UserInfo} from '../user-info';
import {EmailValidationService} from '../email-validation.service';

@Component({
  selector: 'app-my-tracks',
  templateUrl: './my-tracks.component.html',
  styleUrls: ['./my-tracks.component.css']
})
export class MyTracksComponent implements OnInit {
  modalRef: BsModalRef;
  userInfo = new UserInfo();

  emailValid = true;
  submitted = false;

  constructor(public trackListService: TrackListService,
              private modalService: BsModalService,
              private emailValidationService: EmailValidationService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>): void {
    this.trackListService.freeze();
    this.modalRef = this.modalService.show(template);
  }

  submit(): void {
    if (this.trackListService.isSubmittable()) {
      this.emailValid = this.emailValidationService.isEmailUnique(this.userInfo.email);
      if (this.emailValid) {
        this.submitted = this.trackListService.submit(this.userInfo);
      }
    }
  }
}
