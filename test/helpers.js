import supertest from "supertest";
import chai from "chai";
import setupApp from "~/app";

global.setupApp = setupApp;
global.supertest = supertest;
global.expect = chai.expect;
