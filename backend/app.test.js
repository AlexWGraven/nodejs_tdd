// app.test.js
import { should } from "chai";
import MessageApp from './app.js'
describe("app", function() {
  let testApp = new MessageApp
  it("app has messages", function() {
    testApp.messages.should.be.an('array');
  });
});