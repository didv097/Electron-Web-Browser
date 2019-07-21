import * as React from 'react';
import { computed, observable } from 'mobx';

export class SignupStore {
  @observable
  public email: string = "";
  @observable
  public username: string = "";
  @observable
  public password: string = "";
  @observable
  public password_confirm: string = "";
  @observable
  public iagree: boolean = false;

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
  public get isValidName() {
    if (this.username.length == 0)
      return false;
    return true;
  }

  @computed
  public get enabled1() {
    return this.isValidEmail && this.isValidName;
  }

  @computed
  public get enabled2() {
    if (this.password.length == 0)
      return false;
    return this.password == this.password_confirm;
  }

  public onEmailInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    this.email = e.currentTarget.value;
  }

  public onNameInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    this.username = e.currentTarget.value;
  }

  public onPasswordInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    this.password = e.currentTarget.value;
  }

  public onPasswordConfirmInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    this.password_confirm = e.currentTarget.value;
  }

  public onIagreeInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    this.iagree = e.currentTarget.checked;
  }
}
