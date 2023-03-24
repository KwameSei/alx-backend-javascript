export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // GETTERS
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // SETTERS
  set code(newCode) {
    this._code = newCode;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
