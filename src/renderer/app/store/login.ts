import * as React from 'react';
import { computed, observable } from 'mobx';

export class LoginStore {
  @observable
  public email: string = "";
  @observable
  public password: string = "";

  @computed
  public get isValidEmail() {
    let atpos = this.email.indexOf('@');
    let dotpos = this.email.lastIndexOf('.');
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= this.email.length) {
      return false;
    }
    return true;
  }

  @computed
  public get enabled() {
    return this.isValidEmail && this.password.length > 0;
  }

  public onEmailInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    this.email = e.currentTarget.value;
  }

  public onPasswordInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    this.password = e.currentTarget.value;
  }
}
